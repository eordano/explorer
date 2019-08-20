import { future, IFuture } from 'fp-future'
import { IScene, ILand, createLogger, jsonFetch, ParcelInfoResponse } from 'dcl/utils'

const logger = createLogger('DownloadManager')
const { error } = logger

export type DeployedScene = {
  parcel_id: string
  root_cid: string
  scene_cid: ''
}

export type SceneMappingResponse = {
  data: Array<DeployedScene>
}

function getSceneIdFromSceneMappingResponse(scene: DeployedScene) {
  return scene.root_cid
}

export class SceneDataDownloadManager {
  positionToSceneId: Map<string, IFuture<string | null>> = new Map()
  sceneIdToLandData: Map<string, IFuture<ILand | null>> = new Map()
  rootIdToLandData: Map<string, IFuture<ILand | null>> = new Map()

  constructor(public options: { contentServer: string }) {
    // stub
  }

  async resolveSceneSceneId(pos: string): Promise<string | null> {
    if (this.positionToSceneId.has(pos)) {
      return this.positionToSceneId.get(pos)!
    }
    const promised = future<string | null>()
    this.positionToSceneId.set(pos, promised)
    const nw = pos.split(',').map($ => parseInt($, 10))

    try {
      const responseContent = await jsonFetch(
        this.options.contentServer + `/scenes?x1=${nw[0]}&x2=${nw[0]}&y1=${nw[1]}&y2=${nw[1]}`
      )
      const contents = responseContent as SceneMappingResponse
      if (!contents.data.length) {
        promised.resolve(null)
        return null
      }
      this.setSceneRoots(contents)
      return promised
    } catch (err) {
      error(`Error in ${this.options.contentServer}/scenes response!`, err.message)
      const ret = new Error(`Error in ${this.options.contentServer}/scenes response!`)
      promised.reject(ret)
      throw ret
    }
  }

  setSceneRoots(contents: SceneMappingResponse) {
    for (let result of contents.data) {
      const sceneId = getSceneIdFromSceneMappingResponse(result)
      const promised = this.positionToSceneId.has(result.parcel_id)
        ? this.positionToSceneId.get(result.parcel_id)
        : future<string | null>()

      if (promised.isPending) {
        promised.resolve(sceneId)
      }

      this.positionToSceneId.set(result.parcel_id, promised)
    }
  }

  async resolveLandData(sceneId: string): Promise<ILand | null> {
    if (this.sceneIdToLandData.has(sceneId)) {
      return this.sceneIdToLandData.get(sceneId)!
    }

    const promised = future<ILand | null>()
    this.sceneIdToLandData.set(sceneId, promised)

    try {
      const actualResponse = await jsonFetch(this.options.contentServer + `/parcel_info?cids=${sceneId}`)
      const mappings = actualResponse as { data: ParcelInfoResponse[] }
      if (!promised.isPending) {
        return promised
      }
      const content = mappings.data[0]
      if (!content || !content.content || !content.content.contents) {
        logger.info(`Resolved ${sceneId} to null -- no contents`, content)
        promised.resolve(null)
        return null
      }
      const sceneJsonMapping = content.content.contents.find($ => $.file === 'scene.json')

      if (!sceneJsonMapping) {
        logger.info(`Resolved ${sceneId} to null -- no sceneJsonMapping`)
        promised.resolve(null)
        return null
      }

      const baseUrl = this.options.contentServer + '/contents/'

      const scene = (await jsonFetch(baseUrl + sceneJsonMapping.hash)) as IScene

      if (!promised.isPending) {
        return promised
      }

      const data: ILand = {
        sceneId: sceneId,
        baseUrl,
        scene,
        mappingsResponse: content.content
      }

      const pendingSceneData = this.sceneIdToLandData.has(sceneId)
        ? this.sceneIdToLandData.get(sceneId)
        : future<ILand | null>()

      if (pendingSceneData.isPending) {
        pendingSceneData.resolve(data)
      }

      if (!this.sceneIdToLandData.has(sceneId)) {
        this.sceneIdToLandData.set(sceneId, pendingSceneData)
      }
      const resolvedSceneId = future<string | null>()
      resolvedSceneId.resolve(sceneId)

      scene.scene.parcels.forEach($ => {
        this.positionToSceneId.set($, resolvedSceneId)
      })
      promised.resolve(data)

      return data
    } catch (err) {
      error(`Error in ${this.options.contentServer}/parcel_info response!`, err.message)
      const ret = new Error(`Error in ${this.options.contentServer}/parcel_info response!`)
      promised.reject(ret)
      throw ret
    }
  }

  async getParcelDataBySceneId(sceneId: string): Promise<ILand | null> {
    return this.sceneIdToLandData.get(sceneId)!
  }

  async getParcelData(position: string): Promise<ILand | null> {
    const sceneId = await this.resolveSceneSceneId(position)
    if (sceneId === null) {
      return null
    }
    return this.resolveLandData(sceneId)
  }
}
