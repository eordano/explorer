import { MVector2 } from './Vectors'

/**
 * Defines angle representation
 * @public
 */
export class Angle {
  private _radians: number

  /**
   * Creates an Angle object of "radians" radians (float).
   */
  constructor(radians: number) {
    this._radians = radians
    if (this._radians < 0.0) {
      this._radians += 2.0 * Math.PI
    }
  }

  /**
   * Gets a new Angle object valued with the angle value in radians between the two given vectors
   * @param a - defines first vector
   * @param b - defines second vector
   * @returns a new Angle
   */
  public static BetweenTwoPoints(a: MVector2, b: MVector2): Angle {
    let delta = b.subtract(a)
    let theta = Math.atan2(delta.y, delta.x)
    return new Angle(theta)
  }

  /**
   * Gets a new Angle object from the given float in radians
   * @param radians - defines the angle value in radians
   * @returns a new Angle
   */
  public static FromRadians(radians: number): Angle {
    return new Angle(radians)
  }
  /**
   * Gets a new Angle object from the given float in degrees
   * @param degrees - defines the angle value in degrees
   * @returns a new Angle
   */
  public static FromDegrees(degrees: number): Angle {
    return new Angle((degrees * Math.PI) / 180.0)
  }

  /**
   * Get value in degrees
   * @returns the Angle value in degrees (float)
   */
  public degrees() {
    return (this._radians * 180.0) / Math.PI
  }

  /**
   * Get value in radians
   * @returns the Angle value in radians (float)
   */
  public radians() {
    return this._radians
  }
}
