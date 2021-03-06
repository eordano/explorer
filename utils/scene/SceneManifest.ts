import { jsonStringify } from 'dcl/jslibs/stableStringify'
import { sha256 } from 'ethereum-cryptography/sha256'
import { decideFloat } from './decideFloat'
import { getMinimum } from './getMinimum'
import { ISceneManifest } from './ISceneManifest'
import { encodeParcelPosition } from './parcel'
import { parseCoordinate } from './parseCoordinate'
import {
  AssetDefinition,
  AssetTagDefinition,
  Coordinate,
  NamedAsset,
  NonEmptyCoordinateArray,
  ReferenceSystem,
  SpawnPointDefinition,
  UnsanitizedSceneManifest,
  URIAsset
} from './SceneManifestTypes'
import { getInvalidReason, isValidSceneInput } from './validation'
import { parcelLimits } from './world'

export class SceneManifest implements ISceneManifest {
  raw: UnsanitizedSceneManifest
  private _id: string
  private _cannonicalRepresentation?: string
  private _requiredAssets?: AssetDefinition[]
  private _legacyMappings?: { file: string; hash: string }[]
  private _referenceSystem?: ReferenceSystem
  private _requiredTags?: string[]
  private _spawnPoints?: [SpawnPointDefinition, ...SpawnPointDefinition[]]
  private _parcels?: NonEmptyCoordinateArray
  private _positionStrings?: string[]
  private _baseParcel?: Coordinate
  private _version?: number
  private _mapping?: Record<string, string>
  private _cannonicalCID?: string

  constructor(raw: any) {
    if (!isValidSceneInput(raw)) {
      throw new Error('Invalid input: ' + getInvalidReason(raw))
    }
    this.raw = raw
  }

  get id(): string {
    if (!this._id) {
      this._id = this.raw['id']
      this.cannonicalCID().then(id => (this._id = id))
    }
    return this._id
  }
  set id(value: string) {
    this._id = value
  }

  get sceneCID(): string {
    return this.cannonicalSerialization
  }

  get positionStrings(): string[] {
    if (!this._positionStrings) {
      this._positionStrings = this.raw.parcels.map(parseCoordinate).map(encodeParcelPosition) as string[]
    }
    return this._positionStrings
  }

  get parcels(): NonEmptyCoordinateArray {
    if (!this._parcels) {
      this._parcels = this.raw.parcels.map(parseCoordinate) as NonEmptyCoordinateArray
    }
    return this._parcels
  }

  get baseParcel(): Coordinate {
    if (!this._baseParcel) {
      this._baseParcel = getMinimum(this.parcels)
    }
    return this._baseParcel
  }

  get version(): number {
    if (!this._version) {
      this._version = this.raw.version
    }
    return this._version
  }

  get title(): string {
    return (this.raw.display && this.raw.display['title']) || 'Untitled scene'
  }

  get screenshot(): string {
    return (this.raw.display && this.raw.display['snapshot']) || ''
  }

  get main(): string {
    return this.raw.main
  }

  get assets(): AssetDefinition[] {
    return this.raw.assets
  }

  get assetTags(): AssetTagDefinition[] {
    return this.raw.assetTags || []
  }

  get requiredTags(): string[] {
    if (!this._requiredTags) {
      this._requiredTags = this.raw.requiredTags || ['required', 'userRequired']
    }
    return this._requiredTags
  }

  get requiredAssets(): AssetDefinition[] {
    if (!this._requiredAssets) {
      const filteredTags = this.assetTags.filter(assetTag => this.requiredTags.includes(assetTag.name))
      const mappedTags = filteredTags.map(assetTag => assetTag.assets as string[])
      const reducedTags = mappedTags.reduce((a, b) => a.concat(b), [])
      const requiredAssetNames = reducedTags.concat([this.main])
      this._requiredAssets = this.raw.assets.filter(asset => requiredAssetNames.includes(asset.name))
    }
    return this._requiredAssets
  }

  /** @deprecated */
  get legacyMappings(): { file: string; hash: string }[] {
    if (!this._legacyMappings) {
      this._legacyMappings = this.assets.map((asset: any) => ({ file: asset.name, hash: asset.hash || asset.uri }))
    }
    return this._legacyMappings
  }

  get spawnPoints(): [SpawnPointDefinition, ...SpawnPointDefinition[]] {
    if (!this._spawnPoints) {
      if (!this.raw.spawnPoints) {
        this._spawnPoints = [
          {
            camera: { x: 0, y: 0, z: 1 },
            position: { x: 0, y: 0, z: 0 }
          }
        ]
      } else {
        this._spawnPoints = this.raw.spawnPoints
      }
    }
    return this._spawnPoints
  }

  pickSpawnPoint() {
    const allSpawnPoints = this.spawnPoints
    const spawnArea = allSpawnPoints[Math.floor(Math.random() * allSpawnPoints.length)]
    return {
      name: spawnArea.name,
      position: {
        x: decideFloat(spawnArea.position.x) + this.baseParcel.x * parcelLimits.parcelSize,
        y: decideFloat(spawnArea.position.y),
        z: decideFloat(spawnArea.position.z) + this.baseParcel.y * parcelLimits.parcelSize
      },
      camera: spawnArea.camera
    }
  }

  getCIDForFilePath(path: string) {
    if (!this._mapping) {
      this._mapping = {}
      for (let asset of this.assets) {
        this._mapping[asset.name] = (asset as NamedAsset).hash || (asset as URIAsset).uri
      }
    }
    return this._mapping[path]
  }

  get referenceSystem(): ReferenceSystem {
    if (!this._referenceSystem) {
      this._referenceSystem = {
        position: { x: 0, y: 0, z: 0 },
        rotation: { y: 0 }
      }
    }
    return this._referenceSystem
  }

  get cannonicalSerialization(): string {
    if (!this._cannonicalRepresentation) {
      this._cannonicalRepresentation = jsonStringify({
        obj: {
          parcels: this.parcels,
          version: this.version,
          display: this.raw.display || {},
          main: this.main,
          assets: this.assets,
          assetTags: this.assetTags,
          spawnPoints: this.spawnPoints,
          referenceSystem: this.referenceSystem
        }
      } as any)
    }
    return this._cannonicalRepresentation
  }

  async cannonicalCID(): Promise<string> {
    if (!this._cannonicalCID) {
      // TODO: Use CIDv0 encoding
      this._cannonicalCID = sha256(Buffer.from(this.cannonicalSerialization)).toString('hex')
    }
    return Promise.resolve(this._cannonicalCID)
  }
}
