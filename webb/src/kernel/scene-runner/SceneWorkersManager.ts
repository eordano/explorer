import { ScriptingTransport } from '@dcl/rpc/common/json-rpc/types'
import { WebWorkerTransport } from '@dcl/rpc/common/transports/WebWorker'
import { ISceneManifest } from '@dcl/utils'

import { ISceneWorker } from './interface/ISceneWorker'
import { SceneWorker } from './SceneWorker'
import { MemoryRendererParcelScene } from '../renderer/mockRendererParcelScene'

export class SceneWorkersManager {
  loadedSceneWorkers = new Map<string, ISceneWorker>()
  sceneManifests = new Map<string, ISceneManifest>()

  newSceneWorker(scene: ISceneManifest, transport?: ScriptingTransport) {
    return new SceneWorker(new MemoryRendererParcelScene(scene), transport || new WebWorkerTransport(), './gamekit.js')
  }

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

  loadScene(scene: ISceneManifest, transport?: ScriptingTransport): ISceneWorker {
    const sceneId = scene.cannonicalCID

    let worker = this.loadedSceneWorkers.get(sceneId)
    if (!worker) {
      worker = this.newSceneWorker(scene, transport)
      this.loadedSceneWorkers.set(sceneId, worker)
      worker.onDisposeObservable.addOnce(() => {
        this.loadedSceneWorkers.delete(sceneId)
      })
    }
    return worker
  }

  onSceneLoadRequest(scene: ISceneManifest) {
    this.loadScene(scene)
  }
  onSceneStartRequest(scene: ISceneManifest) {
    throw new Error('Method not implemented.')
  }
  onSceneRunRequest(scene: ISceneManifest) {
    throw new Error('Method not implemented.')
  }
  onSceneStopRequest(scene: ISceneManifest) {
    throw new Error('Method not implemented.')
  }
}
