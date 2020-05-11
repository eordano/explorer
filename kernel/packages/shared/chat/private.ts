import { ExplorerIdentity } from 'shared'
import { SocialClient, FriendshipRequest, Conversation, PresenceType, CurrentUserStatus } from 'dcl-social-client'
import { SocialAPI } from 'dcl-social-client/dist/SocialAPI'
import { Authenticator } from 'dcl-crypto'
import { takeEvery, put, select, call, take } from 'redux-saga/effects'
import {
  SEND_PRIVATE_MESSAGE,
  SendPrivateMessage,
  sendPrivateMessage,
  updateFriendship,
  UPDATE_FRIENDSHIP,
  UpdateFriendship,
  updatePrivateMessagingState,
  updateUserData
} from './actions'
import { getClient, findByUserId, isFriend, getPrivateMessaging } from './selectors'
import { createLogger } from '../logger'
import { ProfileAsPromise } from '../profiles/ProfileAsPromise'
import { unityInterface } from 'unity-interface/dcl'
import { ChatMessageType, FriendshipAction, PresenceStatus } from 'shared/types'
import { SocialData, ChatState } from './types'
import { StoreContainer } from '../store/rootTypes'
import { ChatMessage } from '../types'
import { getRealm } from 'shared/dao/selectors'
import { lastPlayerPosition } from '../world/positionThings'
import { worldToGrid } from '../../atomicHelpers/parcelScenePositions'
import { ensureRenderer } from '../profiles/sagas'
import { ADDED_PROFILE_TO_CATALOG } from '../profiles/actions'
import { isAddedToCatalog } from 'shared/profiles/selectors'

declare const globalThis: StoreContainer & { sendPrivateMessage: (userId: string, message: string) => void }

const DEBUG = true

const logger = createLogger('chat: ')

const INITIAL_CHAT_SIZE = 50

const receivedMessages: Record<string, number> = {}
const MESSAGE_LIFESPAN_MILLIS = 1000

const SEND_STATUS_INTERVAL_MILLIS = 5000

export function* initializePrivateMessaging(synapseUrl: string, identity: ExplorerIdentity) {
  const { address: ethAddress } = identity
  const timestamp = Date.now()

  const messageToSign = `${timestamp}`

  const authChain = Authenticator.signPayload(identity, messageToSign)

  const client: SocialAPI = yield SocialClient.loginToServer(synapseUrl, ethAddress, timestamp, authChain)

  const { friendsSocial, ownId }: { friendsSocial: SocialData[]; ownId: string } = yield call(initializeFriends, client)

  // initialize conversations

  const conversations: {
    conversation: Conversation
    unreadMessages: boolean
  }[] = yield client.getAllCurrentConversations()

  yield Promise.all(
    conversations.map(async ({ conversation }) => {
      // TODO - add support for group messaging - moliva - 22/04/2020
      const cursor = await client.getCursorOnLastMessage(conversation.id, { initialSize: INITIAL_CHAT_SIZE })
      const messages = cursor.getMessages()

      const friend = friendsSocial.find(friend => friend.conversationId === conversation.id)

      if (!friend) {
        logger.warn(`friend not found for conversation`, conversation.id)
        return
      }

      messages.forEach(message => {
        const chatMessage = {
          messageId: message.id,
          messageType: ChatMessageType.PRIVATE,
          timestamp: message.timestamp,
          body: message.text,
          sender: message.sender === ownId ? ethAddress : friend.userId,
          recipient: message.sender === ownId ? friend.userId : ethAddress
        }
        addNewChatMessage(chatMessage)
      })
    })
  )

  yield takeEvery(UPDATE_FRIENDSHIP, handleUpdateFriendship)

  // register listener for new messages

  DEBUG && logger.info(`registering onMessage`)
  client.onMessage((conversation, message) => {
    DEBUG && logger.info(`onMessage`, conversation, message)

    if (receivedMessages.hasOwnProperty(message.id)) {
      // message already processed, skipping
      return
    } else {
      receivedMessages[message.id] = Date.now()
    }

    const { socialInfo } = globalThis.globalStore.getState().chat.privateMessaging
    const friend = Object.values(socialInfo).find(friend => friend.conversationId === conversation.id)

    if (!friend) {
      logger.warn(`friend not found for conversation`, conversation.id)
      return
    }

    const chatMessage = {
      messageId: message.id,
      messageType: ChatMessageType.PRIVATE,
      timestamp: message.timestamp,
      body: message.text,
      sender: message.sender === ownId ? ethAddress : friend.userId,
      recipient: message.sender === ownId ? friend.userId : ethAddress
    }
    addNewChatMessage(chatMessage)
  })

  const handleIncomingFriendshipUpdateStatus = async (action: FriendshipAction, socialId: string) => {
    DEBUG && logger.info(`handleIncomingFriendshipUpdateStatus`, action, socialId)

    // map social id to user id
    const userId = parseUserId(socialId)

    if (!userId) {
      logger.warn(`cannot parse user id from social id`, socialId)
      return null
    }

    globalThis.globalStore.dispatch(updateUserData(userId, socialId))

    // ensure user profile is initialized and send to renderer
    await ProfileAsPromise(userId)

    // add to friendRequests & update renderer
    globalThis.globalStore.dispatch(updateFriendship(action, userId, true))
  }

  client.onFriendshipRequest(socialId =>
    handleIncomingFriendshipUpdateStatus(FriendshipAction.REQUESTED_FROM, socialId)
  )
  client.onFriendshipRequestCancellation(socialId =>
    handleIncomingFriendshipUpdateStatus(FriendshipAction.CANCELED, socialId)
  )

  client.onFriendshipRequestApproval(socialId =>
    handleIncomingFriendshipUpdateStatus(FriendshipAction.APPROVED, socialId)
  )

  client.onFriendshipRequestRejection(socialId =>
    handleIncomingFriendshipUpdateStatus(FriendshipAction.REJECTED, socialId)
  )

  yield takeEvery(SEND_PRIVATE_MESSAGE, handleSendPrivateMessage)

  initializeReceivedMessagesCleanUp()
  initializeStatusUpdateInterval(client)
}

function* initializeFriends(client: SocialAPI) {
  const ownId = client.getUserId()
  DEBUG && logger.info(`initializePrivateMessaging#ownId`, ownId)

  // init friends
  const friends: string[] = yield client.getAllFriends()
  DEBUG && logger.info(`friends`, friends)

  const friendsSocial: SocialData[] = yield Promise.all(
    toSocialData(friends).map(async friend => {
      const conversation = await client.createDirectConversation(friend.socialId)
      return { ...friend, conversationId: conversation.id }
    })
  )

  // init friend requests
  const friendRequests: FriendshipRequest[] = yield client.getPendingRequests()
  DEBUG && logger.info(`friendRequests`, friendRequests)

  // filter my requests to others
  const toFriendRequests = friendRequests.filter(request => request.from === ownId).map(request => request.to)
  const toFriendRequestsSocial = toSocialData(toFriendRequests)

  // filter other requests to me
  const fromFriendRequests = friendRequests.filter(request => request.to === ownId).map(request => request.from)
  const fromFriendRequestsSocial = toSocialData(fromFriendRequests)

  const socialInfo: Record<string, SocialData> = [
    ...friendsSocial,
    ...toFriendRequestsSocial,
    ...fromFriendRequestsSocial
  ].reduce(
    (acc, current) => ({
      ...acc,
      [current.socialId]: current
    }),
    {}
  )

  const friendIds = friendsSocial.map($ => $.userId)
  const requestedFromIds = fromFriendRequestsSocial.map($ => $.userId)
  const requestedToIds = toFriendRequestsSocial.map($ => $.userId)

  yield put(
    updatePrivateMessagingState({
      client,
      socialInfo,
      friends: friendIds,
      fromFriendRequests: requestedFromIds,
      toFriendRequests: requestedToIds
    })
  )

  // ensure friend profiles are sent to renderer

  yield call(ensureRenderer)

  const profileIds = Object.values(socialInfo).map(socialData => socialData.userId)

  const profiles = yield Promise.all(profileIds.map(userId => ProfileAsPromise(userId)))
  DEBUG && logger.info(`profiles`, profiles)

  for (const userId of profileIds) {
    while (!(yield select(isAddedToCatalog, userId))) {
      yield take(ADDED_PROFILE_TO_CATALOG)
    }
  }

  const initMessage = {
    currentFriends: friendIds,
    requestedTo: requestedToIds,
    requestedFrom: requestedFromIds
  }
  DEBUG && logger.info(`unityInterface.InitializeFriends`, initMessage)
  unityInterface.InitializeFriends(initMessage)

  return { friendsSocial, ownId }
}

function initializeReceivedMessagesCleanUp() {
  setInterval(() => {
    const now = Date.now()

    Object.entries(receivedMessages)
      .filter(([, timestamp]) => now - timestamp > MESSAGE_LIFESPAN_MILLIS)
      .forEach(([id]) => delete receivedMessages[id])
  }, MESSAGE_LIFESPAN_MILLIS)
}

function sendUpdateUserStatus(id: string, status: CurrentUserStatus) {
  const presence: PresenceStatus =
    status.presence === PresenceType.ONLINE ? PresenceStatus.ONLINE : PresenceStatus.OFFLINE

  let matches = id.match(/@(\w.+):matrix.decentraland.zone/i)

  const updateMessage = {
    userId: matches !== null ? matches[1] : id,
    realm: status.realm,
    position: status.position,
    presence
  }

  DEBUG && logger.info(`unityInterface.UpdateUserStatus`, updateMessage)
  unityInterface.UpdateUserStatus(updateMessage)
}

function initializeStatusUpdateInterval(client: SocialAPI) {
  let friends = globalThis.globalStore.getState().chat.privateMessaging.friends.map(x => {
    return `@${x}:matrix.decentraland.zone`
  })
  let statuses = client.getUserStatuses(...friends)

  statuses.forEach((value, key) => {
    sendUpdateUserStatus(key, value)
  })

  client.onStatusChange((socialId, status) => {
    const user: SocialData | undefined = globalThis.globalStore.getState().chat.privateMessaging.socialInfo[socialId]

    if (!user) {
      logger.error(`user not found for status change with social id`, socialId)
      return
    }

    sendUpdateUserStatus(user.userId, status)
  })

  setInterval(() => {
    const realm = getRealm(globalThis.globalStore.getState())
    const worldPosition = lastPlayerPosition

    const position = worldToGrid(worldPosition)

    if (!realm) {
      // if no realm is initialized yet, cannot set status
      DEBUG && logger.info(`update status with no realm, skipping`)
      return
    }

    const updateStatus = {
      realm: {
        layer: realm.layer,
        serverName: realm.catalystName
      },
      position,
      presence: PresenceType.ONLINE
    }
    DEBUG && logger.info(`sending update status`, updateStatus)
    client.setStatus(updateStatus).catch(e => logger.error(`error while setting status`, e))
  }, SEND_STATUS_INTERVAL_MILLIS)
}

/**
 * The social id for the time being should always be of the form `@ethAddress:server`
 *
 * @param socialId a string with the aforementioned pattern
 */
function parseUserId(socialId: string) {
  const result = socialId.match(/@(\w+):.*/)
  if (!result || result.length < 2) {
    logger.warn(`Could not match social id with ethereum address, this should not happen`)
    return null
  }
  return result[1]
}

function addNewChatMessage(chatMessage: ChatMessage) {
  DEBUG && logger.info(`unityInterface.AddMessageToChatWindow`, chatMessage)
  unityInterface.AddMessageToChatWindow(chatMessage)
}

function* handleSendPrivateMessage(action: SendPrivateMessage, debug: boolean = false) {
  DEBUG && logger.info(`handleSendPrivateMessage`, action)
  const { message, userId } = action.payload

  const client: SocialAPI | null = yield select(getClient)

  if (!client) {
    logger.error(`Social client should be initialized by now`)
    return
  }

  let socialId: string
  if (!debug) {
    const userData: ReturnType<typeof findByUserId> = yield select(findByUserId, userId)
    if (!userData) {
      logger.error(`User not found ${userId}`)
      return
    }

    const _isFriend: ReturnType<typeof isFriend> = yield select(isFriend, userId)
    if (!_isFriend) {
      logger.error(`Trying to send a message to a non friend ${userId}`)
      return
    }

    socialId = userData.socialId
  } else {
    // used only for debugging purposes
    socialId = userId
  }

  const conversation: Conversation = yield client.createDirectConversation(socialId)

  const messageId: string = yield client.sendMessageTo(conversation.id, message)

  if (debug) {
    logger.info(`message sent with id `, messageId)
  }
}

function* handleUpdateFriendship({ payload, meta }: UpdateFriendship) {
  const { action, userId } = payload
  const { incoming } = meta

  const state: ReturnType<typeof getPrivateMessaging> = yield select(getPrivateMessaging)

  let newState: ChatState['privateMessaging'] | undefined

  const client: SocialAPI = yield select(getClient)

  switch (action) {
    case FriendshipAction.NONE: {
      // do nothing
      break
    }
    case FriendshipAction.APPROVED:
    case FriendshipAction.REJECTED: {
      const selector = incoming ? 'toFriendRequests' : 'fromFriendRequests'
      const requests = [...state[selector]]

      const index = requests.indexOf(userId)

      if (index !== -1) {
        requests.splice(index, 1)

        newState = { ...state, [selector]: requests }

        if (action === FriendshipAction.APPROVED && !state.friends.includes(userId)) {
          newState.friends.push(userId)

          const socialData: SocialData = yield select(findByUserId, userId)
          const conversationId = yield client.createDirectConversation(socialData.socialId)

          yield put(updateUserData(userId, socialData.socialId, conversationId))
        }
      }

      break
    }
    case FriendshipAction.CANCELED: {
      const selector = incoming ? 'fromFriendRequests' : 'toFriendRequests'
      const requests = [...state[selector]]

      const index = requests.indexOf(userId)

      if (index !== -1) {
        requests.splice(index, 1)

        newState = { ...state, [selector]: requests }
      }

      break
    }
    case FriendshipAction.REQUESTED_FROM: {
      const exists = state.fromFriendRequests.includes(userId)

      if (!exists) {
        newState = { ...state, fromFriendRequests: [...state.fromFriendRequests, userId] }
      }

      break
    }
    case FriendshipAction.REQUESTED_TO: {
      const exists = state.toFriendRequests.includes(userId)

      if (!exists) {
        newState = { ...state, toFriendRequests: [...state.toFriendRequests, userId] }
      }

      break
    }
    case FriendshipAction.DELETED: {
      const index = state.friends.indexOf(userId)

      if (index !== -1) {
        const friends = [...state.friends]
        friends.splice(index, 1)

        newState = { ...state, friends }
      }

      break
    }
  }

  if (newState) {
    yield put(updatePrivateMessagingState(newState))

    if (incoming) {
      DEBUG && logger.info(`unityInterface.UpdateFriendshipStatus`, payload)
      unityInterface.UpdateFriendshipStatus(payload)
    } else {
      yield call(handleOutgoingUpdateFriendshipStatus, payload)
    }
  }

  if (!incoming) {
    // refresh self & renderer friends status if update was triggered by renderer
    yield call(initializeFriends, client)
  }
}

function* handleOutgoingUpdateFriendshipStatus(update: UpdateFriendship['payload']) {
  DEBUG && logger.info(`handleOutgoingFriendshipUpdateStatus`, update)

  const client: SocialAPI = yield select(getClient)
  const socialData: SocialData = yield select(findByUserId, update.userId)

  if (!socialData) {
    logger.error(`could not find social data for`, update.userId)
    return
  }

  const { socialId } = socialData

  switch (update.action) {
    case FriendshipAction.NONE: {
      // do nothing in this case
      break
    }
    case FriendshipAction.APPROVED: {
      yield client.addAsFriend(socialId)
      break
    }
    case FriendshipAction.REJECTED: {
      yield client.rejectFriendshipRequestFrom(socialId)
      break
    }
    case FriendshipAction.CANCELED: {
      yield client.cancelFriendshipRequestTo(socialId)
      break
    }
    case FriendshipAction.REQUESTED_FROM: {
      // do nothing in this case
      break
    }
    case FriendshipAction.REQUESTED_TO: {
      yield client.addAsFriend(socialId)
      break
    }
    case FriendshipAction.DELETED: {
      yield client.deleteFriendshipWith(socialId)
      break
    }
  }
}

function toSocialData(socialIds: string[]) {
  return socialIds
    .map(socialId => ({
      userId: parseUserId(socialId),
      socialId
    }))
    .filter(({ userId }) => !!userId) as SocialData[]
}

globalThis.sendPrivateMessage = (userId: string, message: string) =>
  handleSendPrivateMessage(sendPrivateMessage(userId, message), true)