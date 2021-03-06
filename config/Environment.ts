var scope: any = typeof window !== 'undefined' && window || global
if (!scope.location) {
  scope.location = { search: '', hostname: '' }
}
const location = scope.location

// Entry points
export const PREVIEW: boolean = scope.preview
export const EDITOR: boolean = scope.isEditor

// Development
export const AVOID_WEB3: boolean = scope.avoidWeb3 || EDITOR
export const DEBUG = location.search.indexOf('DEBUG_MODE') !== -1 || scope.mocha || PREVIEW || EDITOR
export const USE_LOCAL_COMMS = location.search.indexOf('LOCAL_COMMS') !== -1 || PREVIEW
export const DEBUG_ANALYTICS = location.search.indexOf('DEBUG_ANALYTICS') !== -1
export const DEBUG_MOBILE = location.search.indexOf('DEBUG_MOBILE') !== -1
export const DEBUG_MESSAGES = location.search.indexOf('DEBUG_MESSAGES') !== -1
export const DEBUG_REDUX = location.search.indexOf('DEBUG_REDUX') !== -1

export const DISABLE_AUTH = location.search.indexOf('DISABLE_AUTH') !== -1 || DEBUG
export const ENGINE_DEBUG_PANEL = location.search.indexOf('ENGINE_DEBUG_PANEL') !== -1
export const SCENE_DEBUG_PANEL = location.search.indexOf('SCENE_DEBUG_PANEL') !== -1 && !ENGINE_DEBUG_PANEL

export const isRunningTest: boolean = scope['isRunningTests'] === true

export function getTLD() {
  const tld = scope.location.hostname.match(/(\w+)$/)
  if (tld) {
      return tld[0]
  } else {
      return 'org'
  }
}

export const knownTLDs = ['zone', 'org', 'today']

function getDefaultTLD() {
  const TLD = getTLD()
  if (!TLD || !knownTLDs.includes(TLD)) {
    return 'org'
  }
  return TLD
}

export function getServerConfigurations() {
  const TLDDefault = getDefaultTLD()
  return {
    auth: `https://auth.decentraland.${TLDDefault}/api/v1`,
    landApi: `https://api.decentraland.${TLDDefault}/v1`,
    content: `http://localhost:1338`, // `https://content.decentraland.${TLDDefault === 'today' ? 'org' : TLDDefault}`,
    worldInstanceUrl: `wss://world-comm.decentraland.${TLDDefault}/connect`,
    profile: `https://profile.decentraland.${TLDDefault}/api/v1`,
    wearablesApi: `https://wearable-api.decentraland.org/v1`,
    avatar: {
      // avatars-api.decentraland.zone is down
      snapshotStorage: `https://avatars-storage.decentraland.${TLDDefault}/`,
      server: `https://avatars-api.decentraland.${TLDDefault === 'zone' ? 'today' : TLDDefault}/`,
      catalog: 'https://avatar-assets.now.sh',
      contents: `https://s3.amazonaws.com/content-service.decentraland.org/`,
      presets: `https://avatars-storage.decentraland.org/mobile-avatars`
    },
    darApi:
      TLDDefault === 'zone' || TLDDefault === 'today'
        ? 'https://schema-api-v2.now.sh/dar'
        : 'https://schema.decentraland.org/dar'
  }
}
