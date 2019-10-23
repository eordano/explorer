import fetch from 'node-fetch'
import { fetchAll } from './fetchAll'
import { configureDescartes } from './implementation'

import { targetUrl, target, mode } from './basicConfig'
export const descartes = configureDescartes(fetch as any, targetUrl, target)
{
  fetchAll(mode).catch(e => console.log(e))
}
