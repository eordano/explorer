import { ILogOpts, ScriptingTransport, EventSubscriber, WebWorkerTransport } from 'dcl/rpc'
import { inject, Script } from 'dcl/rpc'
import { IRendererParcelSceneToScript } from 'dcl/scene-api/interface/IRendererParcelSceneToScript'
import { GamekitScene } from './GamekitScene'
import { loadGamekitEntrypoint } from './loadGamekitEntrypoint'

export class APILoadedScriptGamekit extends GamekitScene {
  constructor(private factory: GamekitFactory) {
    super()
  }
  getSource(): Promise<string | void> {
    return loadGamekitEntrypoint(this.factory)
  }
}

export class GamekitFactory extends Script {
  @inject('EngineAPI')
  renderingInterface!: IRendererParcelSceneToScript

  @inject('DevTools')
  devTools: any

  eventSubscriber!: EventSubscriber

  constructor(transport: ScriptingTransport, opt?: ILogOpts) {
    super(transport, opt)
  }

  _gamekit?: GamekitScene

  get gamekit(): GamekitScene {
    if (!this._gamekit) {
      this._gamekit = new APILoadedScriptGamekit(this)
      this._gamekit.rendererInterface = this.renderingInterface
      this._gamekit.devTools = this.devTools
    }
    return this._gamekit
  }

  systemDidEnable() {
    this.eventSubscriber = new EventSubscriber(this.renderingInterface)
    return this.gamekit.setupLifecycle()
  }
}

export const factory = new GamekitFactory(WebWorkerTransport(self as any))