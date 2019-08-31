import { ScriptingTransport } from '@dcl/rpc/common/json-rpc/types'
import { ISceneManifest } from '@dcl/utils'

import { ISceneWorker } from './interface/ISceneWorker'

export abstract class SceneWorkersManager {
  loadedSceneWorkers = new Map<string, ISceneWorker>()
  sceneManifests = new Map<string, ISceneManifest>()

  constructor(public bootstrapScene: (scene: ISceneManifest, transport: ScriptingTransport) => ISceneWorker) {}

  getSceneWorkerBySceneID(sceneId: string) {
    return this.loadedSceneWorkers.get(sceneId)
  }

  stopSceneWorker(scene: string | ISceneManifest) {
    const worker = this.loadedSceneWorkers.get(typeof scene === 'string' ? scene : scene.cannonicalCID)
    if (worker && !worker.persistent) {
      this._forceStopSceneWorker(worker)
    }
  }

  forceStopSceneWorker(scene: string | ISceneManifest) {
    const worker = this.loadedSceneWorkers.get(typeof scene === 'string' ? scene : scene.cannonicalCID)
    this._forceStopSceneWorker(worker)
  }

  private _forceStopSceneWorker(worker: ISceneWorker) {
    worker.dispose()
  }

  loadScene(scene: ISceneManifest, transport: ScriptingTransport) {
    const sceneId = scene.cannonicalCID

    let worker = this.loadedSceneWorkers.get(sceneId)
    if (!worker) {
      worker = this.bootstrapScene(scene, transport)
      this.loadedSceneWorkers.set(sceneId, worker)
      worker.onDisposeObservable.addOnce(() => {
        this.loadedSceneWorkers.delete(sceneId)
      })
    }
    return worker
  }

  abstract onSceneAwake(scene: ISceneManifest)
  abstract onSceneWillStart(scene: ISceneManifest)
  abstract onSceneRunning(scene: ISceneManifest)
  abstract onSceneWillUnload(scene: ISceneManifest)
  abstract onSceneDidUnload(scene: ISceneManifest)
}