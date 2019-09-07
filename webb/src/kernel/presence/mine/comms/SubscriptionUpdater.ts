import { ProtocolConnection } from '../../../comms/brokers/ProtocolConnection'
import { MyPresence } from '../myPresence'
import { sendUpdateSubscriptions } from './sendUpdateSubscriptions'
import { getTopicForPosition } from '../getTopicForPosition'
import { createLogger } from '@dcl/utils'

export const POSITION_BEACON_INTERVAL = 100

const logger = createLogger('Topic Subscriptions')

export class SubscriptionUpdater {
  comms: ProtocolConnection

  constructor(public myPresence: MyPresence) {}

  positionListener = (pos: { x: number; y: number }) => {
    const topic = getTopicForPosition({ x: pos.x, y: 0, z: pos.y })
    sendUpdateSubscriptions(this.comms, topic)
    logger.info(`Registering on topic ${topic} (${pos.x},${pos.y})`)
  }

  activate(comms: ProtocolConnection) {
    this.comms = comms
    this.myPresence.parcelPositionObservable.add(this.positionListener)
  }

  deactivate() {
    this.comms = null
    this.myPresence.parcelPositionObservable.removeCallback(this.positionListener)
  }
}