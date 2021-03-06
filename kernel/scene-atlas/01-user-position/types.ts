import { Vector2, Vector3, ReadOnlyQuaternion } from 'dcl/utils'

export type WorldPosition = Vector3
export type GridPosition = Vector2

/**
 * A `GridPosition` encoded as a string of form `x,y`
 * @example "5,-6"
 */
export type StringPosition = string

export type UserPosition = {
  world: WorldPosition
  grid: GridPosition
  stringGrid: StringPosition
  rotation: ReadOnlyQuaternion
}

export type RootUserPosition = {
  userPosition: UserPosition
}

export const SET_WORLD_POSITION = 'Set user position in the 3D world'
export const USER_ENTERED_COORDINATE = 'User entered a new parcel'
