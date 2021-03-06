import { clientLog } from '../jslibs/clientLog'
import { store } from './store'
import { GlobalChrome } from '../../types/chrome'
import { setInspectedTab } from './actions/actionCreators'

export declare const chrome: GlobalChrome

function sendStoreInfo(object, path) {
  const parts = path.split('.').filter((_) => _ !== '')
  const end = parts.reduce((prev, next) => prev[next], object)
  const canExpand = end !== undefined && end !== null && typeof end === 'object'
  return {
    path: path,
    hasKeys: true,
    keys: canExpand ? Object.keys(end) : [],
    values: canExpand
      ? Object.keys(end).reduce((prev, next) => {
          prev[next] =
            typeof end[next] === 'object'
              ? { hasKeys: false }
              : typeof end[next] === 'function'
              ? 'function'
              : typeof end[next] === 'undefined'
              ? 'undefined'
              : end[next] === null
              ? 'null'
              : end[next]
          return prev
        }, {})
      : typeof end === 'function'
      ? 'function'
      : typeof end === 'undefined'
      ? 'undefined'
      : end === null
      ? 'null'
      : end,
  }
}

export function setup(connection: any, tabId: number) {
  chrome.devtools.inspectedWindow.eval(`window.__sendStoreInfo = ${sendStoreInfo.toString()}`)
  connection.onMessage.addListener((event: any) => {
    try {
      if (typeof event === 'object' && event.name === 'dcl-explorer-state') {
        const data = event.payload
        if (typeof data !== 'object') {
          throw new Error()
        }
        store.dispatch({
          type: 'Resolve',
          payload: event.payload,
        })
      }
    } catch (e) {
      clientLog(`Could not parse message from client:`, event)
    }
  })
  store.dispatch(setInspectedTab(tabId))
}
