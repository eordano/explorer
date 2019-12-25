import { checkWeb3Presence } from './checkWeb3'
import { Web3Results } from './Web3Results'
import { window } from './web3Window'

export async function enableWeb3() {
  if ((await checkWeb3Presence()) === Web3Results.Missing) {
    return Web3Results.Missing
  }
  if (window.web3) {
    return Web3Results.Unlocked
  }
  if (window.ethereum) {
    try {
      await window.ethereum.enable()
      return Web3Results.Unlocked
    } catch (e) {
      return Web3Results.Unauthorized
    }
  }
  return Web3Results.Unauthorized
}
