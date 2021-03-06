import {
  AssetDefinition,
  AssetTagDefinition,
  ReferenceSystem,
  NonEmptyCoordinateArray,
  Coordinate,
  SpawnPointSelection,
  SpawnPointDefinition
} from './SceneManifestTypes'

export interface ISceneManifest {
  version: number
  id: string
  assets: AssetDefinition[]
  legacyMappings: { file: string; hash: string }[]
  assetTags: AssetTagDefinition[]
  requiredAssets: AssetDefinition[]
  main: string
  referenceSystem: ReferenceSystem
  parcels: NonEmptyCoordinateArray
  positionStrings: string[]
  baseParcel: Coordinate
  spawnPoints: SpawnPointDefinition[]
  pickSpawnPoint: () => SpawnPointSelection
  getCIDForFilePath: (path: string) => string
  title: string
  screenshot: string
}
