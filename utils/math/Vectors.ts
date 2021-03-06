import { buildArray } from '../pure/buildArray'
import { FloatArray, Epsilon, Nullable, DEG2RAD, RAD2DEG } from './types'
import { Plane } from './Plane'
import { Scalar } from './Scalar'

/** @public */
export type ReadOnlyVector2 = {
  readonly x: number
  readonly y: number
}

/**
 * Class representing a vector containing 2 coordinates
 * @public
 */
export class MVector2 {
  /**
   * Creates a new Vector2 from the given x and y coordinates
   * @param x - defines the first coordinate
   * @param y - defines the second coordinate
   */
  constructor(
    /** defines the first coordinate */
    public x: number = 0,
    /** defines the second coordinate */
    public y: number = 0
  ) {}

  /**
   * Gets a new Vector2(0, 0)
   * @returns a new Vector2
   */
  public static Zero(): MVector2 {
    return new MVector2(0, 0)
  }

  /**
   * Gets a new Vector2(1, 1)
   * @returns a new Vector2
   */
  public static One(): MVector2 {
    return new MVector2(1, 1)
  }

  /**
   * Returns a new Vector2 as the result of the addition of the two given vectors.
   * @param vector1 - the first vector
   * @param vector2 - the second vector
   * @returns the resulting vector
   */
  public static Add(vector1: ReadOnlyVector2, vector2: ReadOnlyVector2): MVector2 {
    return new MVector2(vector1.x, vector1.y).addInPlace(vector2)
  }

  /**
   * Gets a new Vector2 set from the given index element of the given array
   * @param array - defines the data source
   * @param offset - defines the offset in the data source
   * @returns a new Vector2
   */
  public static FromArray(array: ArrayLike<number>, offset: number = 0): MVector2 {
    return new MVector2(array[offset], array[offset + 1])
  }

  /**
   * Sets "result" from the given index element of the given array
   * @param array - defines the data source
   * @param offset - defines the offset in the data source
   * @param result - defines the target vector
   */
  public static FromArrayToRef(array: ArrayLike<number>, offset: number, result: MVector2): void {
    result.x = array[offset]
    result.y = array[offset + 1]
  }

  /**
   * Gets a new Vector2 located for "amount" (float) on the CatmullRom spline defined by the given four Vector2
   * @param value1 - defines 1st point of control
   * @param value2 - defines 2nd point of control
   * @param value3 - defines 3rd point of control
   * @param value4 - defines 4th point of control
   * @param amount - defines the interpolation factor
   * @returns a new Vector2
   */
  public static CatmullRom(
    value1: ReadOnlyVector2,
    value2: ReadOnlyVector2,
    value3: ReadOnlyVector2,
    value4: ReadOnlyVector2,
    amount: number
  ): MVector2 {
    let squared = amount * amount
    let cubed = amount * squared

    let x =
      0.5 *
      (2.0 * value2.x +
        (-value1.x + value3.x) * amount +
        (2.0 * value1.x - 5.0 * value2.x + 4.0 * value3.x - value4.x) * squared +
        (-value1.x + 3.0 * value2.x - 3.0 * value3.x + value4.x) * cubed)

    let y =
      0.5 *
      (2.0 * value2.y +
        (-value1.y + value3.y) * amount +
        (2.0 * value1.y - 5.0 * value2.y + 4.0 * value3.y - value4.y) * squared +
        (-value1.y + 3.0 * value2.y - 3.0 * value3.y + value4.y) * cubed)

    return new MVector2(x, y)
  }

  /**
   * Returns a new Vector2 set with same the coordinates than "value" ones if the vector "value" is in the square defined by "min" and "max".
   * If a coordinate of "value" is lower than "min" coordinates, the returned Vector2 is given this "min" coordinate.
   * If a coordinate of "value" is greater than "max" coordinates, the returned Vector2 is given this "max" coordinate
   * @param value - defines the value to clamp
   * @param min - defines the lower limit
   * @param max - defines the upper limit
   * @returns a new Vector2
   */
  public static Clamp(value: ReadOnlyVector2, min: ReadOnlyVector2, max: ReadOnlyVector2): MVector2 {
    let x = value.x
    x = x > max.x ? max.x : x
    x = x < min.x ? min.x : x

    let y = value.y
    y = y > max.y ? max.y : y
    y = y < min.y ? min.y : y

    return new MVector2(x, y)
  }

  /**
   * Returns a new Vector2 located for "amount" (float) on the Hermite spline defined by the vectors "value1", "value3", "tangent1", "tangent2"
   * @param value1 - defines the 1st control point
   * @param tangent1 - defines the outgoing tangent
   * @param value2 - defines the 2nd control point
   * @param tangent2 - defines the incoming tangent
   * @param amount - defines the interpolation factor
   * @returns a new Vector2
   */
  public static Hermite(
    value1: ReadOnlyVector2,
    tangent1: ReadOnlyVector2,
    value2: ReadOnlyVector2,
    tangent2: ReadOnlyVector2,
    amount: number
  ): MVector2 {
    let squared = amount * amount
    let cubed = amount * squared
    let part1 = 2.0 * cubed - 3.0 * squared + 1.0
    let part2 = -2.0 * cubed + 3.0 * squared
    let part3 = cubed - 2.0 * squared + amount
    let part4 = cubed - squared

    let x = value1.x * part1 + value2.x * part2 + tangent1.x * part3 + tangent2.x * part4
    let y = value1.y * part1 + value2.y * part2 + tangent1.y * part3 + tangent2.y * part4

    return new MVector2(x, y)
  }

  /**
   * Returns a new Vector2 located for "amount" (float) on the linear interpolation between the vector "start" adn the vector "end".
   * @param start - defines the start vector
   * @param end - defines the end vector
   * @param amount - defines the interpolation factor
   * @returns a new Vector2
   */
  public static Lerp(start: ReadOnlyVector2, end: ReadOnlyVector2, amount: number): MVector2 {
    let x = start.x + (end.x - start.x) * amount
    let y = start.y + (end.y - start.y) * amount
    return new MVector2(x, y)
  }

  /**
   * Gets the dot product of the vector "left" and the vector "right"
   * @param left - defines first vector
   * @param right - defines second vector
   * @returns the dot product (float)
   */
  public static Dot(left: ReadOnlyVector2, right: ReadOnlyVector2): number {
    return left.x * right.x + left.y * right.y
  }

  /**
   * Returns a new Vector2 equal to the normalized given vector
   * @param vector - defines the vector to normalize
   * @returns a new Vector2
   */
  public static Normalize(vector: ReadOnlyVector2): MVector2 {
    let newVector = new MVector2(vector.x, vector.y)
    newVector.normalize()
    return newVector
  }

  /**
   * Gets a new Vector2 set with the minimal coordinate values from the "left" and "right" vectors
   * @param left - defines 1st vector
   * @param right - defines 2nd vector
   * @returns a new Vector2
   */
  public static Minimize(left: ReadOnlyVector2, right: ReadOnlyVector2): MVector2 {
    let x = left.x < right.x ? left.x : right.x
    let y = left.y < right.y ? left.y : right.y
    return new MVector2(x, y)
  }

  /**
   * Gets a new Vecto2 set with the maximal coordinate values from the "left" and "right" vectors
   * @param left - defines 1st vector
   * @param right - defines 2nd vector
   * @returns a new Vector2
   */
  public static Maximize(left: ReadOnlyVector2, right: ReadOnlyVector2): MVector2 {
    let x = left.x > right.x ? left.x : right.x
    let y = left.y > right.y ? left.y : right.y
    return new MVector2(x, y)
  }

  /**
   * Gets a new Vector2 set with the transformed coordinates of the given vector by the given transformation matrix
   * @param vector - defines the vector to transform
   * @param transformation - defines the matrix to apply
   * @returns a new Vector2
   */
  public static Transform(vector: MVector2, transformation: Matrix): MVector2 {
    let r = MVector2.Zero()
    MVector2.TransformToRef(vector, transformation, r)
    return r
  }

  /**
   * Transforms the given vector coordinates by the given transformation matrix and stores the result in the vector "result" coordinates
   * @param vector - defines the vector to transform
   * @param transformation - defines the matrix to apply
   * @param result - defines the target vector
   */
  public static TransformToRef(vector: ReadOnlyVector2, transformation: Matrix, result: MVector2) {
    const m = transformation.m
    let x = vector.x * m[0] + vector.y * m[4] + m[12]
    let y = vector.x * m[1] + vector.y * m[5] + m[13]
    result.x = x
    result.y = y
  }

  /**
   * Determines if a given vector is included in a triangle
   * @param p - defines the vector to test
   * @param p0 - defines 1st triangle point
   * @param p1 - defines 2nd triangle point
   * @param p2 - defines 3rd triangle point
   * @returns true if the point "p" is in the triangle defined by the vertors "p0", "p1", "p2"
   */
  public static PointInTriangle(p: ReadOnlyVector2, p0: ReadOnlyVector2, p1: ReadOnlyVector2, p2: ReadOnlyVector2) {
    let a = (1 / 2) * (-p1.y * p2.x + p0.y * (-p1.x + p2.x) + p0.x * (p1.y - p2.y) + p1.x * p2.y)
    let sign = a < 0 ? -1 : 1
    let s = (p0.y * p2.x - p0.x * p2.y + (p2.y - p0.y) * p.x + (p0.x - p2.x) * p.y) * sign
    let t = (p0.x * p1.y - p0.y * p1.x + (p0.y - p1.y) * p.x + (p1.x - p0.x) * p.y) * sign

    return s > 0 && t > 0 && s + t < 2 * a * sign
  }

  /**
   * Gets the distance between the vectors "value1" and "value2"
   * @param value1 - defines first vector
   * @param value2 - defines second vector
   * @returns the distance between vectors
   */
  public static Distance(value1: MVector2, value2: MVector2): number {
    return Math.sqrt(MVector2.DistanceSquared(value1, value2))
  }

  /**
   * Returns the squared distance between the vectors "value1" and "value2"
   * @param value1 - defines first vector
   * @param value2 - defines second vector
   * @returns the squared distance between vectors
   */
  public static DistanceSquared(value1: ReadOnlyVector2, value2: ReadOnlyVector2): number {
    let x = value1.x - value2.x
    let y = value1.y - value2.y
    return x * x + y * y
  }

  /**
   * Gets a new Vector2 located at the center of the vectors "value1" and "value2"
   * @param value1 - defines first vector
   * @param value2 - defines second vector
   * @returns a new Vector2
   */
  public static Center(value1: ReadOnlyVector2, value2: ReadOnlyVector2): MVector2 {
    let center = MVector2.Add(value1, value2)
    center.scaleInPlace(0.5)
    return center
  }

  /**
   * Gets the shortest distance (float) between the point "p" and the segment defined by the two points "segA" and "segB".
   * @param p - defines the middle point
   * @param segA - defines one point of the segment
   * @param segB - defines the other point of the segment
   * @returns the shortest distance
   */
  public static DistanceOfPointFromSegment(p: MVector2, segA: MVector2, segB: MVector2): number {
    let l2 = MVector2.DistanceSquared(segA, segB)
    if (l2 === 0.0) {
      return MVector2.Distance(p, segA)
    }
    let v = segB.subtract(segA)
    let t = Math.max(0, Math.min(1, MVector2.Dot(p.subtract(segA), v) / l2))
    let proj = segA.add(v.multiplyByFloats(t, t))
    return MVector2.Distance(p, proj)
  }

  /**
   * Gets a string with the Vector2 coordinates
   * @returns a string with the Vector2 coordinates
   */
  public toString(): string {
    return '{X: ' + this.x + ' Y:' + this.y + '}'
  }

  /**
   * Gets class name
   * @returns the string "Vector2"
   */
  public getClassName(): string {
    return 'Vector2'
  }

  /**
   * Gets current vector hash code
   * @returns the Vector2 hash code as a number
   */
  public getHashCode(): number {
    let hash = this.x || 0
    hash = (hash * 397) ^ (this.y || 0)
    return hash
  }

  // Operators

  /**
   * Sets the Vector2 coordinates in the given array or FloatArray from the given index.
   * @param array - defines the source array
   * @param index - defines the offset in source array
   * @returns the current Vector2
   */
  public toArray(array: FloatArray, index: number = 0): MVector2 {
    array[index] = this.x
    array[index + 1] = this.y
    return this
  }

  /**
   * Copy the current vector to an array
   * @returns a new array with 2 elements: the Vector2 coordinates.
   */
  public asArray(): number[] {
    let result = new Array<number>()
    this.toArray(result, 0)
    return result
  }

  /**
   * Sets the Vector2 coordinates with the given Vector2 coordinates
   * @param source - defines the source Vector2
   * @returns the current updated Vector2
   */
  public copyFrom(source: ReadOnlyVector2): MVector2 {
    this.x = source.x
    this.y = source.y
    return this
  }

  /**
   * Sets the Vector2 coordinates with the given floats
   * @param x - defines the first coordinate
   * @param y - defines the second coordinate
   * @returns the current updated Vector2
   */
  public copyFromFloats(x: number, y: number): MVector2 {
    this.x = x
    this.y = y
    return this
  }

  /**
   * Sets the Vector2 coordinates with the given floats
   * @param x - defines the first coordinate
   * @param y - defines the second coordinate
   * @returns the current updated Vector2
   */
  public set(x: number, y: number): MVector2 {
    return this.copyFromFloats(x, y)
  }
  /**
   * Add another vector with the current one
   * @param otherVector - defines the other vector
   * @returns a new Vector2 set with the addition of the current Vector2 and the given one coordinates
   */
  public add(otherVector: ReadOnlyVector2): MVector2 {
    return new MVector2(this.x + otherVector.x, this.y + otherVector.y)
  }

  /**
   * Sets the "result" coordinates with the addition of the current Vector2 and the given one coordinates
   * @param otherVector - defines the other vector
   * @param result - defines the target vector
   * @returns the unmodified current Vector2
   */
  public addToRef(otherVector: ReadOnlyVector2, result: MVector2): MVector2 {
    result.x = this.x + otherVector.x
    result.y = this.y + otherVector.y
    return this
  }

  /**
   * Set the Vector2 coordinates by adding the given Vector2 coordinates
   * @param otherVector - defines the other vector
   * @returns the current updated Vector2
   */
  public addInPlace(otherVector: ReadOnlyVector2): MVector2 {
    this.x += otherVector.x
    this.y += otherVector.y
    return this
  }

  /**
   * Gets a new Vector2 by adding the current Vector2 coordinates to the given Vector3 x, y coordinates
   * @param otherVector - defines the other vector
   * @returns a new Vector2
   */
  public addVector3(otherVector: ReadOnlyVector2): MVector2 {
    return new MVector2(this.x + otherVector.x, this.y + otherVector.y)
  }

  /**
   * Gets a new Vector2 set with the subtracted coordinates of the given one from the current Vector2
   * @param otherVector - defines the other vector
   * @returns a new Vector2
   */
  public subtract(otherVector: ReadOnlyVector2): MVector2 {
    return new MVector2(this.x - otherVector.x, this.y - otherVector.y)
  }

  /**
   * Sets the "result" coordinates with the subtraction of the given one from the current Vector2 coordinates.
   * @param otherVector - defines the other vector
   * @param result - defines the target vector
   * @returns the unmodified current Vector2
   */
  public subtractToRef(otherVector: ReadOnlyVector2, result: MVector2): MVector2 {
    result.x = this.x - otherVector.x
    result.y = this.y - otherVector.y
    return this
  }
  /**
   * Sets the current Vector2 coordinates by subtracting from it the given one coordinates
   * @param otherVector - defines the other vector
   * @returns the current updated Vector2
   */
  public subtractInPlace(otherVector: ReadOnlyVector2): MVector2 {
    this.x -= otherVector.x
    this.y -= otherVector.y
    return this
  }

  /**
   * Multiplies in place the current Vector2 coordinates by the given ones
   * @param otherVector - defines the other vector
   * @returns the current updated Vector2
   */
  public multiplyInPlace(otherVector: ReadOnlyVector2): MVector2 {
    this.x *= otherVector.x
    this.y *= otherVector.y
    return this
  }

  /**
   * Returns a new Vector2 set with the multiplication of the current Vector2 and the given one coordinates
   * @param otherVector - defines the other vector
   * @returns a new Vector2
   */
  public multiply(otherVector: ReadOnlyVector2): MVector2 {
    return new MVector2(this.x * otherVector.x, this.y * otherVector.y)
  }

  /**
   * Sets "result" coordinates with the multiplication of the current Vector2 and the given one coordinates
   * @param otherVector - defines the other vector
   * @param result - defines the target vector
   * @returns the unmodified current Vector2
   */
  public multiplyToRef(otherVector: ReadOnlyVector2, result: MVector2): MVector2 {
    result.x = this.x * otherVector.x
    result.y = this.y * otherVector.y
    return this
  }

  /**
   * Gets a new Vector2 set with the Vector2 coordinates multiplied by the given floats
   * @param x - defines the first coordinate
   * @param y - defines the second coordinate
   * @returns a new Vector2
   */
  public multiplyByFloats(x: number, y: number): MVector2 {
    return new MVector2(this.x * x, this.y * y)
  }

  /**
   * Returns a new Vector2 set with the Vector2 coordinates divided by the given one coordinates
   * @param otherVector - defines the other vector
   * @returns a new Vector2
   */
  public divide(otherVector: ReadOnlyVector2): MVector2 {
    return new MVector2(this.x / otherVector.x, this.y / otherVector.y)
  }

  /**
   * Sets the "result" coordinates with the Vector2 divided by the given one coordinates
   * @param otherVector - defines the other vector
   * @param result - defines the target vector
   * @returns the unmodified current Vector2
   */
  public divideToRef(otherVector: ReadOnlyVector2, result: MVector2): MVector2 {
    result.x = this.x / otherVector.x
    result.y = this.y / otherVector.y
    return this
  }

  /**
   * Divides the current Vector2 coordinates by the given ones
   * @param otherVector - defines the other vector
   * @returns the current updated Vector2
   */
  public divideInPlace(otherVector: ReadOnlyVector2): MVector2 {
    return this.divideToRef(otherVector, this)
  }

  /**
   * Gets a new Vector2 with current Vector2 negated coordinates
   * @returns a new Vector2
   */
  public negate(): MVector2 {
    return new MVector2(-this.x, -this.y)
  }

  /**
   * Multiply the Vector2 coordinates by scale
   * @param scale - defines the scaling factor
   * @returns the current updated Vector2
   */
  public scaleInPlace(scale: number): MVector2 {
    this.x *= scale
    this.y *= scale
    return this
  }

  /**
   * Returns a new Vector2 scaled by "scale" from the current Vector2
   * @param scale - defines the scaling factor
   * @returns a new Vector2
   */
  public scale(scale: number): MVector2 {
    let result = new MVector2(0, 0)
    this.scaleToRef(scale, result)
    return result
  }

  /**
   * Scale the current Vector2 values by a factor to a given Vector2
   * @param scale - defines the scale factor
   * @param result - defines the Vector2 object where to store the result
   * @returns the unmodified current Vector2
   */
  public scaleToRef(scale: number, result: MVector2): MVector2 {
    result.x = this.x * scale
    result.y = this.y * scale
    return this
  }

  /**
   * Scale the current Vector2 values by a factor and add the result to a given Vector2
   * @param scale - defines the scale factor
   * @param result - defines the Vector2 object where to store the result
   * @returns the unmodified current Vector2
   */
  public scaleAndAddToRef(scale: number, result: MVector2): MVector2 {
    result.x += this.x * scale
    result.y += this.y * scale
    return this
  }

  /**
   * Gets a boolean if two vectors are equals
   * @param otherVector - defines the other vector
   * @returns true if the given vector coordinates strictly equal the current Vector2 ones
   */
  public equals(otherVector: ReadOnlyVector2): boolean {
    return otherVector && this.x === otherVector.x && this.y === otherVector.y
  }

  /**
   * Gets a boolean if two vectors are equals (using an epsilon value)
   * @param otherVector - defines the other vector
   * @param epsilon - defines the minimal distance to consider equality
   * @returns true if the given vector coordinates are close to the current ones by a distance of epsilon.
   */
  public equalsWithEpsilon(otherVector: ReadOnlyVector2, epsilon: number = Epsilon): boolean {
    return (
      otherVector &&
      Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
      Scalar.WithinEpsilon(this.y, otherVector.y, epsilon)
    )
  }

  /**
   * Gets a new Vector2 from current Vector2 floored values
   * @returns a new Vector2
   */
  public floor(): MVector2 {
    return new MVector2(Math.floor(this.x), Math.floor(this.y))
  }

  /**
   * Gets a new Vector2 from current Vector2 floored values
   * @returns a new Vector2
   */
  public fract(): MVector2 {
    return new MVector2(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
  }

  // Properties

  /**
   * Gets the length of the vector
   * @returns the vector length (float)
   */
  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  /**
   * Gets the vector squared length
   * @returns the vector squared length (float)
   */
  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y
  }

  // Methods

  /**
   * Normalize the vector
   * @returns the current updated Vector2
   */
  public normalize(): MVector2 {
    let len = this.length()

    if (len === 0) {
      return this
    }

    let num = 1.0 / len

    this.x *= num
    this.y *= num

    return this
  }

  /**
   * Gets a new Vector2 copied from the Vector2
   * @returns a new Vector2
   */
  public clone(): MVector2 {
    return new MVector2(this.x, this.y)
  }
}


/** @public */
export type ReadOnlyVector3 = {
  readonly y: number
  readonly x: number
  readonly z: number
}

/**
 * Classed used to store (x,y,z) vector representation
 * A Vector3 is the main object used in 3D geometry
 * It can represent etiher the coordinates of a point the space, either a direction
 * Reminder: Babylon.js uses a left handed forward facing system
 * @public
 */
export class MVector3 {
  /**
   * Gets a boolean indicating that the vector is non uniform meaning x, y or z are not all the same
   */
  public get isNonUniform(): boolean {
    let absX = Math.abs(this.x)
    let absY = Math.abs(this.y)
    if (absX !== absY) {
      return true
    }

    let absZ = Math.abs(this.z)
    if (absX !== absZ) {
      return true
    }

    if (absY !== absZ) {
      return true
    }

    return false
  }
  /**
   * Creates a new Vector3 object from the given x, y, z (floats) coordinates.
   * @param x - defines the first coordinates (on X axis)
   * @param y - defines the second coordinates (on Y axis)
   * @param z - defines the third coordinates (on Z axis)
   */
  constructor(
    /**
     * Defines the first coordinates (on X axis)
     */
    public x: number = 0,
    /**
     * Defines the second coordinates (on Y axis)
     */
    public y: number = 0,
    /**
     * Defines the third coordinates (on Z axis)
     */
    public z: number = 0
  ) {}

  // Statics

  /**
   * Returns a new Vector3 as the result of the addition of the two given vectors.
   * @param vector1 - the first vector
   * @param vector2 - the second vector
   * @returns the resulting vector
   */
  public static Add(vector1: ReadOnlyVector3, vector2: ReadOnlyVector3): MVector3 {
    return new MVector3(vector1.x, vector1.y, vector1.z).addInPlace(vector2)
  }

  /**
   * Get the clip factor between two vectors
   * @param vector0 - defines the first operand
   * @param vector1 - defines the second operand
   * @param axis - defines the axis to use
   * @param size - defines the size along the axis
   * @returns the clip factor
   */
  public static GetClipFactor(vector0: ReadOnlyVector3, vector1: ReadOnlyVector3, axis: ReadOnlyVector3, size: number) {
    let d0 = MVector3.Dot(vector0, axis) - size
    let d1 = MVector3.Dot(vector1, axis) - size

    let s = d0 / (d0 - d1)

    return s
  }

  /**
   * Get angle between two vectors
   * @param vector0 - angle between vector0 and vector1
   * @param vector1 - angle between vector0 and vector1
   * @param normal - direction of the normal
   * @returns the angle between vector0 and vector1
   */
  public static GetAngleBetweenVectors(vector0: MVector3, vector1: MVector3, normal: ReadOnlyVector3): number {
    const v0: MVector3 = vector0.normalizeToRef(MathTmp.Vector3[1])
    const v1: MVector3 = vector1.normalizeToRef(MathTmp.Vector3[2])
    const dot: number = MVector3.Dot(v0, v1)
    const n = MathTmp.Vector3[3]
    MVector3.CrossToRef(v0, v1, n)
    if (MVector3.Dot(n, normal) > 0) {
      return Math.acos(dot)
    }
    return -Math.acos(dot)
  }

  /**
   * Returns a new Vector3 set from the index "offset" of the given array
   * @param array - defines the source array
   * @param offset - defines the offset in the source array
   * @returns the new Vector3
   */
  public static FromArray(array: ArrayLike<number>, offset: number = 0): MVector3 {
    return new MVector3(array[offset], array[offset + 1], array[offset + 2])
  }

  /**
   * Returns a new Vector3 set from the index "offset" of the given FloatArray
   * This function is deprecated.  Use FromArray instead
   * @param array - defines the source array
   * @param offset - defines the offset in the source array
   * @returns the new Vector3
   */
  public static FromFloatArray(array: FloatArray, offset?: number): MVector3 {
    return MVector3.FromArray(array, offset)
  }

  /**
   * Sets the given vector "result" with the element values from the index "offset" of the given array
   * @param array - defines the source array
   * @param offset - defines the offset in the source array
   * @param result - defines the Vector3 where to store the result
   */
  public static FromArrayToRef(array: ArrayLike<number>, offset: number, result: MVector3): void {
    result.x = array[offset]
    result.y = array[offset + 1]
    result.z = array[offset + 2]
  }

  /**
   * Sets the given vector "result" with the element values from the index "offset" of the given FloatArray
   * This function is deprecated.  Use FromArrayToRef instead.
   * @param array - defines the source array
   * @param offset - defines the offset in the source array
   * @param result - defines the Vector3 where to store the result
   */
  public static FromFloatArrayToRef(array: FloatArray, offset: number, result: MVector3): void {
    return MVector3.FromArrayToRef(array, offset, result)
  }

  /**
   * Sets the given vector "result" with the given floats.
   * @param x - defines the x coordinate of the source
   * @param y - defines the y coordinate of the source
   * @param z - defines the z coordinate of the source
   * @param result - defines the Vector3 where to store the result
   */
  public static FromFloatsToRef(x: number, y: number, z: number, result: MVector3): void {
    result.copyFromFloats(x, y, z)
  }

  /**
   * Returns a new Vector3 set to (0.0, 0.0, 0.0)
   * @returns a new empty Vector3
   */
  public static Zero(): MVector3 {
    return new MVector3(0.0, 0.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (1.0, 1.0, 1.0)
   * @returns a new unit Vector3
   */
  public static One(): MVector3 {
    return new MVector3(1.0, 1.0, 1.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, 1.0, 0.0)
   * @returns a new up Vector3
   */
  public static Up(): MVector3 {
    return new MVector3(0.0, 1.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, -1.0, 0.0)
   * @returns a new down Vector3
   */
  public static Down(): MVector3 {
    return new MVector3(0.0, -1.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, 0.0, 1.0)
   * @returns a new forward Vector3
   */
  public static Forward(): MVector3 {
    return new MVector3(0.0, 0.0, 1.0)
  }
  /**
   * Returns a new Vector3 set to (0.0, 0.0, -1.0)
   * @returns a new forward Vector3
   */
  public static Backward(): MVector3 {
    return new MVector3(0.0, 0.0, -1.0)
  }
  /**
   * Returns a new Vector3 set to (1.0, 0.0, 0.0)
   * @returns a new right Vector3
   */
  public static Right(): MVector3 {
    return new MVector3(1.0, 0.0, 0.0)
  }
  /**
   * Returns a new Vector3 set to (-1.0, 0.0, 0.0)
   * @returns a new left Vector3
   */
  public static Left(): MVector3 {
    return new MVector3(-1.0, 0.0, 0.0)
  }

  /**
   * Returns a new Vector3 set with the result of the transformation by the given matrix of the given vector.
   * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
   * @param vector - defines the Vector3 to transform
   * @param transformation - defines the transformation matrix
   * @returns the transformed Vector3
   */
  public static TransformCoordinates(vector: ReadOnlyVector3, transformation: Matrix): MVector3 {
    let result = MVector3.Zero()
    MVector3.TransformCoordinatesToRef(vector, transformation, result)
    return result
  }

  /**
   * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
   * This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
   * @param vector - defines the Vector3 to transform
   * @param transformation - defines the transformation matrix
   * @param result - defines the Vector3 where to store the result
   */
  public static TransformCoordinatesToRef(
    vector: ReadOnlyVector3,
    transformation: Readonly<Matrix>,
    result: MVector3
  ): void {
    return MVector3.TransformCoordinatesFromFloatsToRef(vector.x, vector.y, vector.z, transformation, result)
  }

  /**
   * Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
   * This method computes tranformed coordinates only, not transformed direction vectors
   * @param x - define the x coordinate of the source vector
   * @param y - define the y coordinate of the source vector
   * @param z - define the z coordinate of the source vector
   * @param transformation - defines the transformation matrix
   * @param result - defines the Vector3 where to store the result
   */
  public static TransformCoordinatesFromFloatsToRef(
    x: number,
    y: number,
    z: number,
    transformation: Readonly<Matrix>,
    result: MVector3
  ): void {
    const m = transformation.m
    let rx = x * m[0] + y * m[4] + z * m[8] + m[12]
    let ry = x * m[1] + y * m[5] + z * m[9] + m[13]
    let rz = x * m[2] + y * m[6] + z * m[10] + m[14]
    let rw = 1 / (x * m[3] + y * m[7] + z * m[11] + m[15])

    result.x = rx * rw
    result.y = ry * rw
    result.z = rz * rw
  }

  /**
   * Returns a new Vector3 set with the result of the normal transformation by the given matrix of the given vector
   * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
   * @param vector - defines the Vector3 to transform
   * @param transformation - defines the transformation matrix
   * @returns the new Vector3
   */
  public static TransformNormal(vector: ReadOnlyVector3, transformation: Matrix): MVector3 {
    let result = MVector3.Zero()
    MVector3.TransformNormalToRef(vector, transformation, result)
    return result
  }

  /**
   * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector
   * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
   * @param vector - defines the Vector3 to transform
   * @param transformation - defines the transformation matrix
   * @param result - defines the Vector3 where to store the result
   */
  public static TransformNormalToRef(
    vector: ReadOnlyVector3,
    transformation: Readonly<Matrix>,
    result: MVector3
  ): void {
    this.TransformNormalFromFloatsToRef(vector.x, vector.y, vector.z, transformation, result)
  }

  /**
   * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z)
   * This methods computes transformed normalized direction vectors only (ie. it does not apply translation)
   * @param x - define the x coordinate of the source vector
   * @param y - define the y coordinate of the source vector
   * @param z - define the z coordinate of the source vector
   * @param transformation - defines the transformation matrix
   * @param result - defines the Vector3 where to store the result
   */
  public static TransformNormalFromFloatsToRef(
    x: number,
    y: number,
    z: number,
    transformation: Readonly<Matrix>,
    result: MVector3
  ): void {
    const m = transformation.m
    result.x = x * m[0] + y * m[4] + z * m[8]
    result.y = x * m[1] + y * m[5] + z * m[9]
    result.z = x * m[2] + y * m[6] + z * m[10]
  }

  /**
   * Returns a new Vector3 located for "amount" on the CatmullRom interpolation spline defined by the vectors "value1", "value2", "value3", "value4"
   * @param value1 - defines the first control point
   * @param value2 - defines the second control point
   * @param value3 - defines the third control point
   * @param value4 - defines the fourth control point
   * @param amount - defines the amount on the spline to use
   * @returns the new Vector3
   */
  public static CatmullRom(
    value1: ReadOnlyVector3,
    value2: ReadOnlyVector3,
    value3: ReadOnlyVector3,
    value4: ReadOnlyVector3,
    amount: number
  ): MVector3 {
    let squared = amount * amount
    let cubed = amount * squared

    let x =
      0.5 *
      (2.0 * value2.x +
        (-value1.x + value3.x) * amount +
        (2.0 * value1.x - 5.0 * value2.x + 4.0 * value3.x - value4.x) * squared +
        (-value1.x + 3.0 * value2.x - 3.0 * value3.x + value4.x) * cubed)

    let y =
      0.5 *
      (2.0 * value2.y +
        (-value1.y + value3.y) * amount +
        (2.0 * value1.y - 5.0 * value2.y + 4.0 * value3.y - value4.y) * squared +
        (-value1.y + 3.0 * value2.y - 3.0 * value3.y + value4.y) * cubed)

    let z =
      0.5 *
      (2.0 * value2.z +
        (-value1.z + value3.z) * amount +
        (2.0 * value1.z - 5.0 * value2.z + 4.0 * value3.z - value4.z) * squared +
        (-value1.z + 3.0 * value2.z - 3.0 * value3.z + value4.z) * cubed)

    return new MVector3(x, y, z)
  }

  /**
   * Returns a new Vector3 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
   * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
   * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
   * @param value - defines the current value
   * @param min - defines the lower range value
   * @param max - defines the upper range value
   * @returns the new Vector3
   */
  public static Clamp(value: ReadOnlyVector3, min: ReadOnlyVector3, max: ReadOnlyVector3): MVector3 {
    const v = new MVector3()
    MVector3.ClampToRef(value, min, max, v)
    return v
  }
  /**
   * Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
   * If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
   * If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one
   * @param value - defines the current value
   * @param min - defines the lower range value
   * @param max - defines the upper range value
   * @param result - defines the Vector3 where to store the result
   */
  public static ClampToRef(value: ReadOnlyVector3, min: ReadOnlyVector3, max: ReadOnlyVector3, result: MVector3): void {
    let x = value.x
    x = x > max.x ? max.x : x
    x = x < min.x ? min.x : x

    let y = value.y
    y = y > max.y ? max.y : y
    y = y < min.y ? min.y : y

    let z = value.z
    z = z > max.z ? max.z : z
    z = z < min.z ? min.z : z

    result.copyFromFloats(x, y, z)
  }

  /**
   * Returns a new Vector3 located for "amount" (float) on the Hermite interpolation spline defined by the vectors "value1", "tangent1", "value2", "tangent2"
   * @param value1 - defines the first control point
   * @param tangent1 - defines the first tangent vector
   * @param value2 - defines the second control point
   * @param tangent2 - defines the second tangent vector
   * @param amount - defines the amount on the interpolation spline (between 0 and 1)
   * @returns the new Vector3
   */
  public static Hermite(
    value1: ReadOnlyVector3,
    tangent1: ReadOnlyVector3,
    value2: ReadOnlyVector3,
    tangent2: ReadOnlyVector3,
    amount: number
  ): MVector3 {
    let squared = amount * amount
    let cubed = amount * squared
    let part1 = 2.0 * cubed - 3.0 * squared + 1.0
    let part2 = -2.0 * cubed + 3.0 * squared
    let part3 = cubed - 2.0 * squared + amount
    let part4 = cubed - squared

    let x = value1.x * part1 + value2.x * part2 + tangent1.x * part3 + tangent2.x * part4
    let y = value1.y * part1 + value2.y * part2 + tangent1.y * part3 + tangent2.y * part4
    let z = value1.z * part1 + value2.z * part2 + tangent1.z * part3 + tangent2.z * part4
    return new MVector3(x, y, z)
  }

  /**
   * Returns a new Vector3 located for "amount" (float) on the linear interpolation between the vectors "start" and "end"
   * @param start - defines the start value
   * @param end - defines the end value
   * @param amount - max defines amount between both (between 0 and 1)
   * @returns the new Vector3
   */
  public static Lerp(start: ReadOnlyVector3, end: ReadOnlyVector3, amount: number): MVector3 {
    let result = new MVector3(0, 0, 0)
    MVector3.LerpToRef(start, end, amount, result)
    return result
  }

  /**
   * Sets the given vector "result" with the result of the linear interpolation from the vector "start" for "amount" to the vector "end"
   * @param start - defines the start value
   * @param end - defines the end value
   * @param amount - max defines amount between both (between 0 and 1)
   * @param result - defines the Vector3 where to store the result
   */
  public static LerpToRef(start: ReadOnlyVector3, end: ReadOnlyVector3, amount: number, result: MVector3): void {
    result.x = start.x + (end.x - start.x) * amount
    result.y = start.y + (end.y - start.y) * amount
    result.z = start.z + (end.z - start.z) * amount
  }

  /**
   * Returns the dot product (float) between the vectors "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @returns the dot product
   */
  public static Dot(left: ReadOnlyVector3, right: ReadOnlyVector3): number {
    return left.x * right.x + left.y * right.y + left.z * right.z
  }

  /**
   * Returns a new Vector3 as the cross product of the vectors "left" and "right"
   * The cross product is then orthogonal to both "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @returns the cross product
   */
  public static Cross(left: ReadOnlyVector3, right: ReadOnlyVector3): MVector3 {
    let result = MVector3.Zero()
    MVector3.CrossToRef(left, right, result)
    return result
  }

  /**
   * Sets the given vector "result" with the cross product of "left" and "right"
   * The cross product is then orthogonal to both "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @param result - defines the Vector3 where to store the result
   */
  public static CrossToRef(left: ReadOnlyVector3, right: ReadOnlyVector3, result: MVector3): void {
    const x = left.y * right.z - left.z * right.y
    const y = left.z * right.x - left.x * right.z
    const z = left.x * right.y - left.y * right.x
    result.copyFromFloats(x, y, z)
  }

  /**
   * Returns a new Vector3 as the normalization of the given vector
   * @param vector - defines the Vector3 to normalize
   * @returns the new Vector3
   */
  public static Normalize(vector: MVector3): MVector3 {
    let result = MVector3.Zero()
    MVector3.NormalizeToRef(vector, result)
    return result
  }

  /**
   * Sets the given vector "result" with the normalization of the given first vector
   * @param vector - defines the Vector3 to normalize
   * @param result - defines the Vector3 where to store the result
   */
  public static NormalizeToRef(vector: MVector3, result: MVector3): void {
    vector.normalizeToRef(result)
  }

  /**
   * Gets the minimal coordinate values between two Vector3
   * @param left - defines the first operand
   * @param right - defines the second operand
   * @returns the new Vector3
   */
  public static Minimize(left: ReadOnlyVector3, right: ReadOnlyVector3): MVector3 {
    let min = new MVector3(left.x, left.y, left.z)
    min.minimizeInPlace(right)
    return min
  }

  /**
   * Gets the maximal coordinate values between two Vector3
   * @param left - defines the first operand
   * @param right - defines the second operand
   * @returns the new Vector3
   */
  public static Maximize(left: MVector3, right: MVector3): MVector3 {
    let max = new MVector3(left.x, left.y, left.z)
    max.maximizeInPlace(right)
    return max
  }

  /**
   * Returns the distance between the vectors "value1" and "value2"
   * @param value1 - defines the first operand
   * @param value2 - defines the second operand
   * @returns the distance
   */
  public static Distance(value1: ReadOnlyVector3, value2: ReadOnlyVector3): number {
    return Math.sqrt(MVector3.DistanceSquared(value1, value2))
  }

  /**
   * Returns the squared distance between the vectors "value1" and "value2"
   * @param value1 - defines the first operand
   * @param value2 - defines the second operand
   * @returns the squared distance
   */
  public static DistanceSquared(value1: ReadOnlyVector3, value2: ReadOnlyVector3): number {
    let x = value1.x - value2.x
    let y = value1.y - value2.y
    let z = value1.z - value2.z

    return x * x + y * y + z * z
  }

  /**
   * Returns a new Vector3 located at the center between "value1" and "value2"
   * @param value1 - defines the first operand
   * @param value2 - defines the second operand
   * @returns the new Vector3
   */
  public static Center(value1: ReadOnlyVector3, value2: ReadOnlyVector3): MVector3 {
    let center = MVector3.Add(value1, value2)
    center.scaleInPlace(0.5)
    return center
  }

  /**
   * Given three orthogonal normalized left-handed oriented Vector3 axis in space (target system),
   * RotationFromAxis() returns the rotation Euler angles (ex : rotation.x, rotation.y, rotation.z) to apply
   * to something in order to rotate it from its local system to the given target system
   * Note: axis1, axis2 and axis3 are normalized during this operation
   * @param axis1 - defines the first axis
   * @param axis2 - defines the second axis
   * @param axis3 - defines the third axis
   * @returns a new Vector3
   */
  public static RotationFromAxis(axis1: MVector3, axis2: MVector3, axis3: MVector3): MVector3 {
    let rotation = MVector3.Zero()
    MVector3.RotationFromAxisToRef(axis1, axis2, axis3, rotation)
    return rotation
  }

  /**
   * The same than RotationFromAxis but updates the given ref Vector3 parameter instead of returning a new Vector3
   * @param axis1 - defines the first axis
   * @param axis2 - defines the second axis
   * @param axis3 - defines the third axis
   * @param ref - defines the Vector3 where to store the result
   */
  public static RotationFromAxisToRef(axis1: MVector3, axis2: MVector3, axis3: MVector3, ref: MVector3): void {
    let quat = MathTmp.Quaternion[0]
    MQuaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat)
    ref.copyFrom(quat.eulerAngles)
  }

  /**
   * Creates a string representation of the Vector3
   * @returns a string with the Vector3 coordinates.
   */
  public toString(): string {
    return `(${this.x}, ${this.y}, ${this.z})`
  }

  /**
   * Gets the class name
   * @returns the string "Vector3"
   */
  public getClassName(): string {
    return 'Vector3'
  }

  /**
   * Creates the Vector3 hash code
   * @returns a number which tends to be unique between Vector3 instances
   */
  public getHashCode(): number {
    let hash = this.x || 0
    hash = (hash * 397) ^ (this.y || 0)
    hash = (hash * 397) ^ (this.z || 0)
    return hash
  }

  // Operators

  /**
   * Creates an array containing three elements : the coordinates of the Vector3
   * @returns a new array of numbers
   */
  public asArray(): number[] {
    let result: number[] = []
    this.toArray(result, 0)
    return result
  }

  /**
   * Populates the given array or FloatArray from the given index with the successive coordinates of the Vector3
   * @param array - defines the destination array
   * @param index - defines the offset in the destination array
   * @returns the current Vector3
   */
  public toArray(array: FloatArray, index: number = 0): MVector3 {
    array[index] = this.x
    array[index + 1] = this.y
    array[index + 2] = this.z
    return this
  }

  /**
   * Converts the current Vector3 into a quaternion (considering that the Vector3 contains Euler angles representation of a rotation)
   * @returns a new Quaternion object, computed from the Vector3 coordinates
   */
  public toQuaternion(): MQuaternion {
    return MQuaternion.Identity.setEuler(this.y, this.x, this.z)
  }

  /**
   * Adds the given vector to the current Vector3
   * @param otherVector - defines the second operand
   * @returns the current updated Vector3
   */
  public addInPlace(otherVector: ReadOnlyVector3): MVector3 {
    return this.addInPlaceFromFloats(otherVector.x, otherVector.y, otherVector.z)
  }

  /**
   * Adds the given coordinates to the current Vector3
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the current updated Vector3
   */
  public addInPlaceFromFloats(x: number, y: number, z: number): MVector3 {
    this.x += x
    this.y += y
    this.z += z
    return this
  }

  /**
   * Gets a new Vector3, result of the addition the current Vector3 and the given vector
   * @param otherVector - defines the second operand
   * @returns the resulting Vector3
   */
  public add(otherVector: ReadOnlyVector3): MVector3 {
    return new MVector3(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z)
  }

  /**
   * Adds the current Vector3 to the given one and stores the result in the vector "result"
   * @param otherVector - defines the second operand
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public addToRef(otherVector: ReadOnlyVector3, result: MVector3): MVector3 {
    return result.copyFromFloats(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z)
  }

  /**
   * Subtract the given vector from the current Vector3
   * @param otherVector - defines the second operand
   * @returns the current updated Vector3
   */
  public subtractInPlace(otherVector: ReadOnlyVector3): MVector3 {
    this.x -= otherVector.x
    this.y -= otherVector.y
    this.z -= otherVector.z
    return this
  }

  /**
   * Returns a new Vector3, result of the subtraction of the given vector from the current Vector3
   * @param otherVector - defines the second operand
   * @returns the resulting Vector3
   */
  public subtract(otherVector: ReadOnlyVector3): MVector3 {
    return new MVector3(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z)
  }

  /**
   * Subtracts the given vector from the current Vector3 and stores the result in the vector "result".
   * @param otherVector - defines the second operand
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public subtractToRef(otherVector: ReadOnlyVector3, result: MVector3): MVector3 {
    return this.subtractFromFloatsToRef(otherVector.x, otherVector.y, otherVector.z, result)
  }

  /**
   * Returns a new Vector3 set with the subtraction of the given floats from the current Vector3 coordinates
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the resulting Vector3
   */
  public subtractFromFloats(x: number, y: number, z: number): MVector3 {
    return new MVector3(this.x - x, this.y - y, this.z - z)
  }

  /**
   * Subtracts the given floats from the current Vector3 coordinates and set the given vector "result" with this result
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public subtractFromFloatsToRef(x: number, y: number, z: number, result: MVector3): MVector3 {
    return result.copyFromFloats(this.x - x, this.y - y, this.z - z)
  }

  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective
   * @param matrix - The transformation matrix
   */
  public applyMatrix4(matrix: Matrix) {
    this.applyMatrix4ToRef(matrix, this)
  }

  /**
   * Multiplies this vector (with an implicit 1 in the 4th dimension) and m, and divides by perspective and set the given vector "result" with this result
   * @param matrix - The transformation matrix
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public applyMatrix4ToRef(matrix: Matrix, result: MVector3) {
    const { x, y, z } = this
    const { m } = matrix
    const w = 1 / (m[3] * x + m[7] * y + m[11] * z + m[15])

    result.x = (m[0] * x + m[4] * y + m[8] * z + m[12]) * w
    result.y = (m[1] * x + m[5] * y + m[9] * z + m[13]) * w
    result.z = (m[2] * x + m[6] * y + m[10] * z + m[14]) * w

    return result
  }

  /**
   * Rotates the current Vector3 based on the given quaternion
   * @param q - defines the Quaternion
   * @returns the current Vector3
   */
  public rotate(q: MQuaternion) {
    return this.rotateToRef(q, this)
  }

  /**
   * Rotates current Vector3 based on the given quaternion, but applies the rotation to target Vector3.
   * @param q - defines the Quaternion
   * @param result - defines the target Vector3
   * @returns the current Vector3
   */
  public rotateToRef(q: MQuaternion, result: MVector3) {
    const { x, y, z } = this
    const { x: qx, y: qy, z: qz, w: qw } = q

    // calculate quat * vector

    const ix = qw * x + qy * z - qz * y
    const iy = qw * y + qz * x - qx * z
    const iz = qw * z + qx * y - qy * x
    const iw = -qx * x - qy * y - qz * z

    // calculate result * inverse quat

    result.x = ix * qw + iw * -qx + iy * -qz - iz * -qy
    result.y = iy * qw + iw * -qy + iz * -qx - ix * -qz
    result.z = iz * qw + iw * -qz + ix * -qy - iy * -qx

    return result
  }

  /**
   * Gets a new Vector3 set with the current Vector3 negated coordinates
   * @returns a new Vector3
   */
  public negate(): MVector3 {
    return new MVector3(-this.x, -this.y, -this.z)
  }

  /**
   * Multiplies the Vector3 coordinates by the float "scale"
   * @param scale - defines the multiplier factor
   * @returns the current updated Vector3
   */
  public scaleInPlace(scale: number): MVector3 {
    this.x *= scale
    this.y *= scale
    this.z *= scale
    return this
  }

  /**
   * Returns a new Vector3 set with the current Vector3 coordinates multiplied by the float "scale"
   * @param scale - defines the multiplier factor
   * @returns a new Vector3
   */
  public scale(scale: number): MVector3 {
    return new MVector3(this.x * scale, this.y * scale, this.z * scale)
  }

  /**
   * Multiplies the current Vector3 coordinates by the float "scale" and stores the result in the given vector "result" coordinates
   * @param scale - defines the multiplier factor
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public scaleToRef(scale: number, result: MVector3): MVector3 {
    return result.copyFromFloats(this.x * scale, this.y * scale, this.z * scale)
  }

  /**
   * Scale the current Vector3 values by a factor and add the result to a given Vector3
   * @param scale - defines the scale factor
   * @param result - defines the Vector3 object where to store the result
   * @returns the unmodified current Vector3
   */
  public scaleAndAddToRef(scale: number, result: MVector3): MVector3 {
    return result.addInPlaceFromFloats(this.x * scale, this.y * scale, this.z * scale)
  }

  /**
   * Returns true if the current Vector3 and the given vector coordinates are strictly equal
   * @param otherVector - defines the second operand
   * @returns true if both vectors are equals
   */
  public equals(otherVector: ReadOnlyVector3): boolean {
    return otherVector && this.x === otherVector.x && this.y === otherVector.y && this.z === otherVector.z
  }

  /**
   * Returns true if the current Vector3 and the given vector coordinates are distant less than epsilon
   * @param otherVector - defines the second operand
   * @param epsilon - defines the minimal distance to define values as equals
   * @returns true if both vectors are distant less than epsilon
   */
  public equalsWithEpsilon(otherVector: ReadOnlyVector3, epsilon: number = Epsilon): boolean {
    return (
      otherVector &&
      Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
      Scalar.WithinEpsilon(this.y, otherVector.y, epsilon) &&
      Scalar.WithinEpsilon(this.z, otherVector.z, epsilon)
    )
  }

  /**
   * Returns true if the current Vector3 coordinates equals the given floats
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns true if both vectors are equals
   */
  public equalsToFloats(x: number, y: number, z: number): boolean {
    return this.x === x && this.y === y && this.z === z
  }

  /**
   * Multiplies the current Vector3 coordinates by the given ones
   * @param otherVector - defines the second operand
   * @returns the current updated Vector3
   */
  public multiplyInPlace(otherVector: ReadOnlyVector3): MVector3 {
    this.x *= otherVector.x
    this.y *= otherVector.y
    this.z *= otherVector.z
    return this
  }

  /**
   * Returns a new Vector3, result of the multiplication of the current Vector3 by the given vector
   * @param otherVector - defines the second operand
   * @returns the new Vector3
   */
  public multiply(otherVector: ReadOnlyVector3): MVector3 {
    return this.multiplyByFloats(otherVector.x, otherVector.y, otherVector.z)
  }

  /**
   * Multiplies the current Vector3 by the given one and stores the result in the given vector "result"
   * @param otherVector - defines the second operand
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public multiplyToRef(otherVector: ReadOnlyVector3, result: MVector3): MVector3 {
    return result.copyFromFloats(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z)
  }

  /**
   * Returns a new Vector3 set with the result of the mulliplication of the current Vector3 coordinates by the given floats
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the new Vector3
   */
  public multiplyByFloats(x: number, y: number, z: number): MVector3 {
    return new MVector3(this.x * x, this.y * y, this.z * z)
  }

  /**
   * Returns a new Vector3 set with the result of the division of the current Vector3 coordinates by the given ones
   * @param otherVector - defines the second operand
   * @returns the new Vector3
   */
  public divide(otherVector: ReadOnlyVector3): MVector3 {
    return new MVector3(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z)
  }

  /**
   * Divides the current Vector3 coordinates by the given ones and stores the result in the given vector "result"
   * @param otherVector - defines the second operand
   * @param result - defines the Vector3 object where to store the result
   * @returns the current Vector3
   */
  public divideToRef(otherVector: ReadOnlyVector3, result: MVector3): MVector3 {
    return result.copyFromFloats(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z)
  }

  /**
   * Divides the current Vector3 coordinates by the given ones.
   * @param otherVector - defines the second operand
   * @returns the current updated Vector3
   */
  public divideInPlace(otherVector: ReadOnlyVector3): MVector3 {
    return this.divideToRef(otherVector, this)
  }

  /**
   * Updates the current Vector3 with the minimal coordinate values between its and the given vector ones
   * @param other - defines the second operand
   * @returns the current updated Vector3
   */
  public minimizeInPlace(other: ReadOnlyVector3): MVector3 {
    return this.minimizeInPlaceFromFloats(other.x, other.y, other.z)
  }

  /**
   * Updates the current Vector3 with the maximal coordinate values between its and the given vector ones.
   * @param other - defines the second operand
   * @returns the current updated Vector3
   */
  public maximizeInPlace(other: ReadOnlyVector3): MVector3 {
    return this.maximizeInPlaceFromFloats(other.x, other.y, other.z)
  }

  /**
   * Updates the current Vector3 with the minimal coordinate values between its and the given coordinates
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the current updated Vector3
   */
  public minimizeInPlaceFromFloats(x: number, y: number, z: number): MVector3 {
    if (x < this.x) {
      this.x = x
    }
    if (y < this.y) {
      this.y = y
    }
    if (z < this.z) {
      this.z = z
    }
    return this
  }

  /**
   * Updates the current Vector3 with the maximal coordinate values between its and the given coordinates.
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the current updated Vector3
   */
  public maximizeInPlaceFromFloats(x: number, y: number, z: number): MVector3 {
    if (x > this.x) {
      this.x = x
    }
    if (y > this.y) {
      this.y = y
    }
    if (z > this.z) {
      this.z = z
    }
    return this
  }

  /**
   * Gets a new Vector3 from current Vector3 floored values
   * @returns a new Vector3
   */
  public floor(): MVector3 {
    return new MVector3(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z))
  }

  /**
   * Gets a new Vector3 from current Vector3 floored values
   * @returns a new Vector3
   */
  public fract(): MVector3 {
    return new MVector3(this.x - Math.floor(this.x), this.y - Math.floor(this.y), this.z - Math.floor(this.z))
  }

  // Properties
  /**
   * Gets the length of the Vector3
   * @returns the length of the Vecto3
   */
  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }

  /**
   * Gets the squared length of the Vector3
   * @returns squared length of the Vector3
   */
  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z
  }

  /**
   * Normalize the current Vector3.
   * Please note that this is an in place operation.
   * @returns the current updated Vector3
   */
  public normalize(): MVector3 {
    return this.normalizeFromLength(this.length())
  }

  /**
   * Normalize the current Vector3 with the given input length.
   * Please note that this is an in place operation.
   * @param len - the length of the vector
   * @returns the current updated Vector3
   */
  public normalizeFromLength(len: number): MVector3 {
    if (len === 0 || len === 1.0) {
      return this
    }

    return this.scaleInPlace(1.0 / len)
  }

  /**
   * Normalize the current Vector3 to a new vector
   * @returns the new Vector3
   */
  public normalizeToNew(): MVector3 {
    const normalized = new MVector3(0, 0, 0)
    this.normalizeToRef(normalized)
    return normalized
  }

  /**
   * Normalize the current Vector3 to the reference
   * @param reference - define the Vector3 to update
   * @returns the updated Vector3
   */
  public normalizeToRef(reference: MVector3): MVector3 {
    let len = this.length()
    if (len === 0 || len === 1.0) {
      return reference.copyFromFloats(this.x, this.y, this.z)
    }

    return this.scaleToRef(1.0 / len, reference)
  }

  /**
   * Creates a new Vector3 copied from the current Vector3
   * @returns the new Vector3
   */
  public clone(): MVector3 {
    return new MVector3(this.x, this.y, this.z)
  }

  /**
   * Copies the given vector coordinates to the current Vector3 ones
   * @param source - defines the source Vector3
   * @returns the current updated Vector3
   */
  public copyFrom(source: ReadOnlyVector3): MVector3 {
    return this.copyFromFloats(source.x, source.y, source.z)
  }

  /**
   * Copies the given floats to the current Vector3 coordinates
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the current updated Vector3
   */
  public copyFromFloats(x: number, y: number, z: number): MVector3 {
    this.x = x
    this.y = y
    this.z = z
    return this
  }

  /**
   * Copies the given floats to the current Vector3 coordinates
   * @param x - defines the x coordinate of the operand
   * @param y - defines the y coordinate of the operand
   * @param z - defines the z coordinate of the operand
   * @returns the current updated Vector3
   */
  public set(x: number, y: number, z: number): MVector3 {
    return this.copyFromFloats(x, y, z)
  }

  /**
   * Copies the given float to the current Vector3 coordinates
   * @param v - defines the x, y and z coordinates of the operand
   * @returns the current updated Vector3
   */
  public setAll(v: number): MVector3 {
    this.x = this.y = this.z = v
    return this
  }
}

/** @public */
export type ReadOnlyVector4 = {
  readonly y: number
  readonly x: number
  readonly z: number
  readonly w: number
}

/**
 * Vector4 class created for EulerAngle class conversion to Quaternion
 * @public
 */
export class MVector4 {
  /**
   * Creates a Vector4 object from the given floats.
   * @param x - x value of the vector
   * @param y - y value of the vector
   * @param z - z value of the vector
   * @param w - w value of the vector
   */
  constructor(
    /** x value of the vector */
    public x: number,
    /** y value of the vector */
    public y: number,
    /** z value of the vector */
    public z: number,
    /** w value of the vector */
    public w: number
  ) {}

  // Statics

  /**
   * Returns a new Vector4 as the result of the addition of the two given vectors.
   * @param vector1 - the first vector
   * @param vector2 - the second vector
   * @returns the resulting vector
   */
  public static Add(vector1: ReadOnlyVector4, vector2: ReadOnlyVector4): MVector4 {
    return new MVector4(vector1.x, vector1.y, vector1.z, vector1.w).addInPlace(vector2)
  }

  /**
   * Returns a new Vector4 set from the starting index of the given array.
   * @param array - the array to pull values from
   * @param offset - the offset into the array to start at
   * @returns the new vector
   */
  public static FromArray(array: ArrayLike<number>, offset: number = 0): MVector4 {
    return new MVector4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3])
  }
  /**
   * Updates the given vector "result" from the starting index of the given array.
   * @param array - the array to pull values from
   * @param offset - the offset into the array to start at
   * @param result - the vector to store the result in
   */
  public static FromArrayToRef(array: ArrayLike<number>, offset: number, result: MVector4): void {
    result.x = array[offset]
    result.y = array[offset + 1]
    result.z = array[offset + 2]
    result.w = array[offset + 3]
  }
  /**
   * Updates the given vector "result" from the starting index of the given FloatArray.
   * @param array - the array to pull values from
   * @param offset - the offset into the array to start at
   * @param result - the vector to store the result in
   */
  public static FromFloatArrayToRef(array: FloatArray, offset: number, result: MVector4): void {
    MVector4.FromArrayToRef(array, offset, result)
  }
  /**
   * Updates the given vector "result" coordinates from the given floats.
   * @param x - float to set from
   * @param y - float to set from
   * @param z - float to set from
   * @param w - float to set from
   * @param result - the vector to the floats in
   */
  public static FromFloatsToRef(x: number, y: number, z: number, w: number, result: MVector4): void {
    result.x = x
    result.y = y
    result.z = z
    result.w = w
  }
  /**
   * Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)
   * @returns the new vector
   */
  public static Zero(): MVector4 {
    return new MVector4(0.0, 0.0, 0.0, 0.0)
  }
  /**
   * Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)
   * @returns the new vector
   */
  public static One(): MVector4 {
    return new MVector4(1.0, 1.0, 1.0, 1.0)
  }
  /**
   * Returns a new normalized Vector4 from the given one.
   * @param vector - the vector to normalize
   * @returns the vector
   */
  public static Normalize(vector: ReadOnlyVector4): MVector4 {
    let result = MVector4.Zero()
    MVector4.NormalizeToRef(vector, result)
    return result
  }
  /**
   * Updates the given vector "result" from the normalization of the given one.
   * @param vector - the vector to normalize
   * @param result - the vector to store the result in
   */
  public static NormalizeToRef(vector: ReadOnlyVector4, result: MVector4): void {
    result.copyFrom(vector)
    result.normalize()
  }

  /**
   * Returns a vector with the minimum values from the left and right vectors
   * @param left - left vector to minimize
   * @param right - right vector to minimize
   * @returns a new vector with the minimum of the left and right vector values
   */
  public static Minimize(left: ReadOnlyVector4, right: ReadOnlyVector4): MVector4 {
    let min = new MVector4(left.x, left.y, left.z, left.w)
    min.minimizeInPlace(right)
    return min
  }

  /**
   * Returns a vector with the maximum values from the left and right vectors
   * @param left - left vector to maximize
   * @param right - right vector to maximize
   * @returns a new vector with the maximum of the left and right vector values
   */
  public static Maximize(left: ReadOnlyVector4, right: ReadOnlyVector4): MVector4 {
    let max = new MVector4(left.x, left.y, left.z, left.w)
    max.maximizeInPlace(right)
    return max
  }
  /**
   * Returns the distance (float) between the vectors "value1" and "value2".
   * @param value1 - value to calulate the distance between
   * @param value2 - value to calulate the distance between
   * @returns the distance between the two vectors
   */
  public static Distance(value1: ReadOnlyVector4, value2: ReadOnlyVector4): number {
    return Math.sqrt(MVector4.DistanceSquared(value1, value2))
  }
  /**
   * Returns the squared distance (float) between the vectors "value1" and "value2".
   * @param value1 - value to calulate the distance between
   * @param value2 - value to calulate the distance between
   * @returns the distance between the two vectors squared
   */
  public static DistanceSquared(value1: ReadOnlyVector4, value2: ReadOnlyVector4): number {
    let x = value1.x - value2.x
    let y = value1.y - value2.y
    let z = value1.z - value2.z
    let w = value1.w - value2.w

    return x * x + y * y + z * z + w * w
  }
  /**
   * Returns a new Vector4 located at the center between the vectors "value1" and "value2".
   * @param value1 - value to calulate the center between
   * @param value2 - value to calulate the center between
   * @returns the center between the two vectors
   */
  public static Center(value1: ReadOnlyVector4, value2: ReadOnlyVector4): MVector4 {
    let center = MVector4.Add(value1, value2)
    center.scaleInPlace(0.5)
    return center
  }

  /**
   * Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
   * This methods computes transformed normalized direction vectors only.
   * @param vector - the vector to transform
   * @param transformation - the transformation matrix to apply
   * @returns the new vector
   */
  public static TransformNormal(vector: ReadOnlyVector4, transformation: Matrix): MVector4 {
    let result = MVector4.Zero()
    MVector4.TransformNormalToRef(vector, transformation, result)
    return result
  }

  /**
   * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
   * This methods computes transformed normalized direction vectors only.
   * @param vector - the vector to transform
   * @param transformation - the transformation matrix to apply
   * @param result - the vector to store the result in
   */
  public static TransformNormalToRef(vector: ReadOnlyVector4, transformation: Matrix, result: MVector4): void {
    const m = transformation.m
    let x = vector.x * m[0] + vector.y * m[4] + vector.z * m[8]
    let y = vector.x * m[1] + vector.y * m[5] + vector.z * m[9]
    let z = vector.x * m[2] + vector.y * m[6] + vector.z * m[10]
    result.x = x
    result.y = y
    result.z = z
    result.w = vector.w
  }

  /**
   * Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
   * This methods computes transformed normalized direction vectors only.
   * @param x - value to transform
   * @param y - value to transform
   * @param z - value to transform
   * @param w - value to transform
   * @param transformation - the transformation matrix to apply
   * @param result - the vector to store the results in
   */
  public static TransformNormalFromFloatsToRef(
    x: number,
    y: number,
    z: number,
    w: number,
    transformation: Matrix,
    result: MVector4
  ): void {
    const m = transformation.m
    result.x = x * m[0] + y * m[4] + z * m[8]
    result.y = x * m[1] + y * m[5] + z * m[9]
    result.z = x * m[2] + y * m[6] + z * m[10]
    result.w = w
  }

  /**
   * Returns the string with the Vector4 coordinates.
   * @returns a string containing all the vector values
   */
  public toString(): string {
    return '{X: ' + this.x + ' Y:' + this.y + ' Z:' + this.z + ' W:' + this.w + '}'
  }

  /**
   * Returns the string "Vector4".
   * @returns "Vector4"
   */
  public getClassName(): string {
    return 'Vector4'
  }

  /**
   * Returns the Vector4 hash code.
   * @returns a unique hash code
   */
  public getHashCode(): number {
    let hash = this.x || 0
    hash = (hash * 397) ^ (this.y || 0)
    hash = (hash * 397) ^ (this.z || 0)
    hash = (hash * 397) ^ (this.w || 0)
    return hash
  }

  // Operators
  /**
   * Returns a new array populated with 4 elements : the Vector4 coordinates.
   * @returns the resulting array
   */
  public asArray(): number[] {
    let result = new Array<number>()

    this.toArray(result, 0)

    return result
  }

  /**
   * Populates the given array from the given index with the Vector4 coordinates.
   * @param array - array to populate
   * @param index - index of the array to start at (default: 0)
   * @returns the Vector4.
   */
  public toArray(array: FloatArray, index: number = 0): MVector4 {
    array[index] = this.x
    array[index + 1] = this.y
    array[index + 2] = this.z
    array[index + 3] = this.w
    return this
  }

  /**
   * Adds the given vector to the current Vector4.
   * @param otherVector - the vector to add
   * @returns the updated Vector4.
   */
  public addInPlace(otherVector: ReadOnlyVector4): MVector4 {
    this.x += otherVector.x
    this.y += otherVector.y
    this.z += otherVector.z
    this.w += otherVector.w
    return this
  }

  /**
   * Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.
   * @param otherVector - the vector to add
   * @returns the resulting vector
   */
  public add(otherVector: ReadOnlyVector4): MVector4 {
    return new MVector4(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z, this.w + otherVector.w)
  }

  /**
   * Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.
   * @param otherVector - the vector to add
   * @param result - the vector to store the result
   * @returns the current Vector4.
   */
  public addToRef(otherVector: ReadOnlyVector4, result: MVector4): MVector4 {
    result.x = this.x + otherVector.x
    result.y = this.y + otherVector.y
    result.z = this.z + otherVector.z
    result.w = this.w + otherVector.w
    return this
  }

  /**
   * Subtract in place the given vector from the current Vector4.
   * @param otherVector - the vector to subtract
   * @returns the updated Vector4.
   */
  public subtractInPlace(otherVector: ReadOnlyVector4): MVector4 {
    this.x -= otherVector.x
    this.y -= otherVector.y
    this.z -= otherVector.z
    this.w -= otherVector.w
    return this
  }

  /**
   * Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.
   * @param otherVector - the vector to add
   * @returns the new vector with the result
   */
  public subtract(otherVector: ReadOnlyVector4): MVector4 {
    return new MVector4(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z, this.w - otherVector.w)
  }

  /**
   * Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.
   * @param otherVector - the vector to subtract
   * @param result - the vector to store the result
   * @returns the current Vector4.
   */
  public subtractToRef(otherVector: ReadOnlyVector4, result: MVector4): MVector4 {
    result.x = this.x - otherVector.x
    result.y = this.y - otherVector.y
    result.z = this.z - otherVector.z
    result.w = this.w - otherVector.w
    return this
  }

  /**
   * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
   */
  /**
   * Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.
   * @param x - value to subtract
   * @param y - value to subtract
   * @param z - value to subtract
   * @param w - value to subtract
   * @returns new vector containing the result
   */
  public subtractFromFloats(x: number, y: number, z: number, w: number): MVector4 {
    return new MVector4(this.x - x, this.y - y, this.z - z, this.w - w)
  }

  /**
   * Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.
   * @param x - value to subtract
   * @param y - value to subtract
   * @param z - value to subtract
   * @param w - value to subtract
   * @param result - the vector to store the result in
   * @returns the current Vector4.
   */
  public subtractFromFloatsToRef(x: number, y: number, z: number, w: number, result: MVector4): MVector4 {
    result.x = this.x - x
    result.y = this.y - y
    result.z = this.z - z
    result.w = this.w - w
    return this
  }

  /**
   * Returns a new Vector4 set with the current Vector4 negated coordinates.
   * @returns a new vector with the negated values
   */
  public negate(): MVector4 {
    return new MVector4(-this.x, -this.y, -this.z, -this.w)
  }

  /**
   * Multiplies the current Vector4 coordinates by scale (float).
   * @param scale - the number to scale with
   * @returns the updated Vector4.
   */
  public scaleInPlace(scale: number): MVector4 {
    this.x *= scale
    this.y *= scale
    this.z *= scale
    this.w *= scale
    return this
  }

  /**
   * Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).
   * @param scale - the number to scale with
   * @returns a new vector with the result
   */
  public scale(scale: number): MVector4 {
    return new MVector4(this.x * scale, this.y * scale, this.z * scale, this.w * scale)
  }

  /**
   * Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).
   * @param scale - the number to scale with
   * @param result - a vector to store the result in
   * @returns the current Vector4.
   */
  public scaleToRef(scale: number, result: MVector4): MVector4 {
    result.x = this.x * scale
    result.y = this.y * scale
    result.z = this.z * scale
    result.w = this.w * scale
    return this
  }

  /**
   * Scale the current Vector4 values by a factor and add the result to a given Vector4
   * @param scale - defines the scale factor
   * @param result - defines the Vector4 object where to store the result
   * @returns the unmodified current Vector4
   */
  public scaleAndAddToRef(scale: number, result: MVector4): MVector4 {
    result.x += this.x * scale
    result.y += this.y * scale
    result.z += this.z * scale
    result.w += this.w * scale
    return this
  }

  /**
   * Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.
   * @param otherVector - the vector to compare against
   * @returns true if they are equal
   */
  public equals(otherVector: ReadOnlyVector4): boolean {
    return (
      otherVector &&
      this.x === otherVector.x &&
      this.y === otherVector.y &&
      this.z === otherVector.z &&
      this.w === otherVector.w
    )
  }

  /**
   * Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.
   * @param otherVector - vector to compare against
   * @param epsilon - (Default: very small number)
   * @returns true if they are equal
   */
  public equalsWithEpsilon(otherVector: ReadOnlyVector4, epsilon: number = Epsilon): boolean {
    return (
      otherVector &&
      Scalar.WithinEpsilon(this.x, otherVector.x, epsilon) &&
      Scalar.WithinEpsilon(this.y, otherVector.y, epsilon) &&
      Scalar.WithinEpsilon(this.z, otherVector.z, epsilon) &&
      Scalar.WithinEpsilon(this.w, otherVector.w, epsilon)
    )
  }

  /**
   * Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.
   * @param x - x value to compare against
   * @param y - y value to compare against
   * @param z - z value to compare against
   * @param w - w value to compare against
   * @returns true if equal
   */
  public equalsToFloats(x: number, y: number, z: number, w: number): boolean {
    return this.x === x && this.y === y && this.z === z && this.w === w
  }

  /**
   * Multiplies in place the current Vector4 by the given one.
   * @param otherVector - vector to multiple with
   * @returns the updated Vector4.
   */
  public multiplyInPlace(otherVector: ReadOnlyVector4): MVector4 {
    this.x *= otherVector.x
    this.y *= otherVector.y
    this.z *= otherVector.z
    this.w *= otherVector.w
    return this
  }

  /**
   * Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.
   * @param otherVector - vector to multiple with
   * @returns resulting new vector
   */
  public multiply(otherVector: ReadOnlyVector4): MVector4 {
    return new MVector4(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z, this.w * otherVector.w)
  }
  /**
   * Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.
   * @param otherVector - vector to multiple with
   * @param result - vector to store the result
   * @returns the current Vector4.
   */
  public multiplyToRef(otherVector: ReadOnlyVector4, result: MVector4): MVector4 {
    result.x = this.x * otherVector.x
    result.y = this.y * otherVector.y
    result.z = this.z * otherVector.z
    result.w = this.w * otherVector.w
    return this
  }
  /**
   * Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.
   * @param x - x value multiply with
   * @param y - y value multiply with
   * @param z - z value multiply with
   * @param w - w value multiply with
   * @returns resulting new vector
   */
  public multiplyByFloats(x: number, y: number, z: number, w: number): MVector4 {
    return new MVector4(this.x * x, this.y * y, this.z * z, this.w * w)
  }
  /**
   * Returns a new Vector4 set with the division result of the current Vector4 by the given one.
   * @param otherVector - vector to devide with
   * @returns resulting new vector
   */
  public divide(otherVector: ReadOnlyVector4): MVector4 {
    return new MVector4(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z, this.w / otherVector.w)
  }
  /**
   * Updates the given vector "result" with the division result of the current Vector4 by the given one.
   * @param otherVector - vector to devide with
   * @param result - vector to store the result
   * @returns the current Vector4.
   */
  public divideToRef(otherVector: ReadOnlyVector4, result: MVector4): MVector4 {
    result.x = this.x / otherVector.x
    result.y = this.y / otherVector.y
    result.z = this.z / otherVector.z
    result.w = this.w / otherVector.w
    return this
  }

  /**
   * Divides the current Vector3 coordinates by the given ones.
   * @param otherVector - vector to devide with
   * @returns the updated Vector3.
   */
  public divideInPlace(otherVector: ReadOnlyVector4): MVector4 {
    return this.divideToRef(otherVector, this)
  }

  /**
   * Updates the Vector4 coordinates with the minimum values between its own and the given vector ones
   * @param other - defines the second operand
   * @returns the current updated Vector4
   */
  public minimizeInPlace(other: ReadOnlyVector4): MVector4 {
    if (other.x < this.x) {
      this.x = other.x
    }
    if (other.y < this.y) {
      this.y = other.y
    }
    if (other.z < this.z) {
      this.z = other.z
    }
    if (other.w < this.w) {
      this.w = other.w
    }
    return this
  }
  /**
   * Updates the Vector4 coordinates with the maximum values between its own and the given vector ones
   * @param other - defines the second operand
   * @returns the current updated Vector4
   */
  public maximizeInPlace(other: ReadOnlyVector4): MVector4 {
    if (other.x > this.x) {
      this.x = other.x
    }
    if (other.y > this.y) {
      this.y = other.y
    }
    if (other.z > this.z) {
      this.z = other.z
    }
    if (other.w > this.w) {
      this.w = other.w
    }
    return this
  }

  /**
   * Gets a new Vector4 from current Vector4 floored values
   * @returns a new Vector4
   */
  public floor(): MVector4 {
    return new MVector4(Math.floor(this.x), Math.floor(this.y), Math.floor(this.z), Math.floor(this.w))
  }

  /**
   * Gets a new Vector4 from current Vector3 floored values
   * @returns a new Vector4
   */
  public fract(): MVector4 {
    return new MVector4(
      this.x - Math.floor(this.x),
      this.y - Math.floor(this.y),
      this.z - Math.floor(this.z),
      this.w - Math.floor(this.w)
    )
  }

  // Properties
  /**
   * Returns the Vector4 length (float).
   * @returns the length
   */
  public length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  }
  /**
   * Returns the Vector4 squared length (float).
   * @returns the length squared
   */
  public lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  }

  // Methods
  /**
   * Normalizes in place the Vector4.
   * @returns the updated Vector4.
   */
  public normalize(): MVector4 {
    let len = this.length()

    if (len === 0) {
      return this
    }

    return this.scaleInPlace(1.0 / len)
  }

  /**
   * Returns a new Vector3 from the Vector4 (x, y, z) coordinates.
   * @returns this converted to a new vector3
   */
  public toVector3(): MVector3 {
    return new MVector3(this.x, this.y, this.z)
  }
  /**
   * Returns a new Vector4 copied from the current one.
   * @returns the new cloned vector
   */
  public clone(): MVector4 {
    return new MVector4(this.x, this.y, this.z, this.w)
  }
  /**
   * Updates the current Vector4 with the given one coordinates.
   * @param source - the source vector to copy from
   * @returns the updated Vector4.
   */
  public copyFrom(source: ReadOnlyVector4): MVector4 {
    this.x = source.x
    this.y = source.y
    this.z = source.z
    this.w = source.w
    return this
  }
  /**
   * Updates the current Vector4 coordinates with the given floats.
   * @param x - float to copy from
   * @param y - float to copy from
   * @param z - float to copy from
   * @param w - float to copy from
   * @returns the updated Vector4.
   */
  public copyFromFloats(x: number, y: number, z: number, w: number): MVector4 {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
    return this
  }
  /**
   * Updates the current Vector4 coordinates with the given floats.
   * @param x - float to set from
   * @param y - float to set from
   * @param z - float to set from
   * @param w - float to set from
   * @returns the updated Vector4.
   */
  public set(x: number, y: number, z: number, w: number): MVector4 {
    return this.copyFromFloats(x, y, z, w)
  }

  /**
   * Copies the given float to the current Vector3 coordinates
   * @param v - defines the x, y, z and w coordinates of the operand
   * @returns the current updated Vector3
   */
  public setAll(v: number): MVector4 {
    this.x = this.y = this.z = this.w = v
    return this
  }
}

/** @public */
export type ReadOnlyQuaternion = Readonly<{
  x: number
  y: number
  z: number
  w: number
}>

/**
 * Class used to store quaternion data
 * {@link https://en.wikipedia.org/wiki/Quaternion }
 * {@link http://doc.babylonjs.com/features/position,_rotation,_scaling }
 * @public
 */
export class MQuaternion {
  /**
   * Creates a new Quaternion from the given floats
   * @param x - defines the first component (0 by default)
   * @param y - defines the second component (0 by default)
   * @param z - defines the third component (0 by default)
   * @param w - defines the fourth component (1.0 by default)
   */
  constructor(
    /** defines the first component (0 by default) */
    public x: number = 0.0,
    /** defines the second component (0 by default) */
    public y: number = 0.0,
    /** defines the third component (0 by default) */
    public z: number = 0.0,
    /** defines the fourth component (1.0 by default) */
    public w: number = 1.0
  ) {}

  // Statics

  /**
   * Creates a new quaternion from a rotation matrix
   * @param matrix - defines the source matrix
   * @returns a new quaternion created from the given rotation matrix values
   */
  public static FromRotationMatrix(matrix: Matrix): MQuaternion {
    let result = new MQuaternion()
    MQuaternion.FromRotationMatrixToRef(matrix, result)
    return result
  }

  /**
   * Updates the given quaternion with the given rotation matrix values
   * @param matrix - defines the source matrix
   * @param result - defines the target quaternion
   */
  public static FromRotationMatrixToRef(matrix: Matrix, result: MQuaternion): void {
    let data = matrix.m
    // tslint:disable:one-variable-per-declaration
    let m11 = data[0],
      m12 = data[4],
      m13 = data[8]
    let m21 = data[1],
      m22 = data[5],
      m23 = data[9]
    let m31 = data[2],
      m32 = data[6],
      m33 = data[10]
    // tslint:enable:one-variable-per-declaration
    let trace = m11 + m22 + m33
    let s

    if (trace > 0) {
      s = 0.5 / Math.sqrt(trace + 1.0)

      result.w = 0.25 / s
      result.x = (m32 - m23) * s
      result.y = (m13 - m31) * s
      result.z = (m21 - m12) * s
    } else if (m11 > m22 && m11 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33)

      result.w = (m32 - m23) / s
      result.x = 0.25 * s
      result.y = (m12 + m21) / s
      result.z = (m13 + m31) / s
    } else if (m22 > m33) {
      s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33)

      result.w = (m13 - m31) / s
      result.x = (m12 + m21) / s
      result.y = 0.25 * s
      result.z = (m23 + m32) / s
    } else {
      s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22)

      result.w = (m21 - m12) / s
      result.x = (m13 + m31) / s
      result.y = (m23 + m32) / s
      result.z = 0.25 * s
    }
  }

  /**
   * Returns the dot product (float) between the quaternions "left" and "right"
   * @param left - defines the left operand
   * @param right - defines the right operand
   * @returns the dot product
   */
  public static Dot(left: ReadOnlyQuaternion, right: ReadOnlyQuaternion): number {
    return left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
  }

  /**
   * Checks if the two quaternions are close to each other
   * @param quat0 - defines the first quaternion to check
   * @param quat1 - defines the second quaternion to check
   * @returns true if the two quaternions are close to each other
   */
  public static AreClose(quat0: ReadOnlyQuaternion, quat1: ReadOnlyQuaternion): boolean {
    let dot = MQuaternion.Dot(quat0, quat1)

    return dot >= 0
  }

  /**
   * Creates an empty quaternion
   * @returns a new quaternion set to (0.0, 0.0, 0.0)
   */
  public static Zero(): MQuaternion {
    return new MQuaternion(0.0, 0.0, 0.0, 0.0)
  }

  /**
   * Inverse a given quaternion
   * @param q - defines the source quaternion
   * @returns a new quaternion as the inverted current quaternion
   */
  public static Inverse(q: MQuaternion): MQuaternion {
    return new MQuaternion(-q.x, -q.y, -q.z, q.w)
  }

  /**
   * Gets a boolean indicating if the given quaternion is identity
   * @param quaternion - defines the quaternion to check
   * @returns true if the quaternion is identity
   */
  public static IsIdentity(quaternion: ReadOnlyQuaternion): boolean {
    return quaternion && quaternion.x === 0 && quaternion.y === 0 && quaternion.z === 0 && quaternion.w === 1
  }

  /**
   * Creates a quaternion from a rotation around an axis
   * @param axis - defines the axis to use
   * @param angle - defines the angle to use (in Euler degrees)
   * @returns a new quaternion created from the given axis (Vector3) and angle in radians (float)
   */
  public static RotationAxis(axis: MVector3, angle: number): MQuaternion {
    const angleRad = angle * DEG2RAD
    return MQuaternion.RotationAxisToRef(axis, angleRad, new MQuaternion())
  }

  /**
   * Creates a rotation around an axis and stores it into the given quaternion
   * @param axis - defines the axis to use
   * @param angle - defines the angle to use (in Euler degrees)
   * @param result - defines the target quaternion
   * @returns the target quaternion
   */
  public static RotationAxisToRef(axis: MVector3, angle: number, result: MQuaternion): MQuaternion {
    const angleRad = angle * DEG2RAD
    let sin = Math.sin(angleRad / 2)
    axis.normalize()
    result.w = Math.cos(angleRad / 2)
    result.x = axis.x * sin
    result.y = axis.y * sin
    result.z = axis.z * sin
    return result
  }

  /**
   * Creates a new quaternion from data stored into an array
   * @param array - defines the data source
   * @param offset - defines the offset in the source array where the data starts
   * @returns a new quaternion
   */
  public static FromArray(array: ArrayLike<number>, offset: number = 0): MQuaternion {
    return new MQuaternion(array[offset], array[offset + 1], array[offset + 2], array[offset + 3])
  }

  /**
   * Creates a new quaternion from a set of euler angles and stores it in the target quaternion
   */
  public static FromEulerAnglesRef(x: number, y: number, z: number, result: MQuaternion): void {
    return MQuaternion.RotationYawPitchRollToRef(y * DEG2RAD, x * DEG2RAD, z * DEG2RAD, result)
  }

  /**
   * Creates a new quaternion from the given Euler float angles (y, x, z)
   * @param yaw - defines the rotation around Y axis
   * @param pitch - defines the rotation around X axis
   * @param roll - defines the rotation around Z axis
   * @returns the new quaternion
   */
  public static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): MQuaternion {
    let q = new MQuaternion()
    MQuaternion.RotationYawPitchRollToRef(yaw, pitch, roll, q)
    return q
  }

  /**
   * Creates a new rotation from the given Euler float angles (y, x, z) and stores it in the target quaternion
   * @param yaw - defines the rotation around Y axis
   * @param pitch - defines the rotation around X axis
   * @param roll - defines the rotation around Z axis
   * @param result - defines the target quaternion
   */
  public static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: MQuaternion): void {
    let halfRoll = roll * 0.5
    let halfPitch = pitch * 0.5
    let halfYaw = yaw * 0.5

    let c1 = Math.cos(halfPitch)
    let c2 = Math.cos(halfYaw)
    let c3 = Math.cos(halfRoll)

    let s1 = Math.sin(halfPitch)
    let s2 = Math.sin(halfYaw)
    let s3 = Math.sin(halfRoll)

    result.x = s1 * c2 * c3 + c1 * s2 * s3
    result.y = c1 * s2 * c3 - s1 * c2 * s3
    result.z = c1 * c2 * s3 + s1 * s2 * c3
    result.w = c1 * c2 * c3 - s1 * s2 * s3
  }

  /**
   * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation
   * @param alpha - defines the rotation around first axis
   * @param beta - defines the rotation around second axis
   * @param gamma - defines the rotation around third axis
   * @returns the new quaternion
   */
  public static RotationAlphaBetaGamma(alpha: number, beta: number, gamma: number): MQuaternion {
    let result = new MQuaternion()
    MQuaternion.RotationAlphaBetaGammaToRef(alpha, beta, gamma, result)
    return result
  }

  /**
   * Creates a new quaternion from the given Euler float angles expressed in z-x-z orientation and stores it in the target quaternion
   * @param alpha - defines the rotation around first axis
   * @param beta - defines the rotation around second axis
   * @param gamma - defines the rotation around third axis
   * @param result - defines the target quaternion
   */
  public static RotationAlphaBetaGammaToRef(alpha: number, beta: number, gamma: number, result: MQuaternion): void {
    // Produces a quaternion from Euler angles in the z-x-z orientation
    let halfGammaPlusAlpha = (gamma + alpha) * 0.5
    let halfGammaMinusAlpha = (gamma - alpha) * 0.5
    let halfBeta = beta * 0.5

    result.x = Math.cos(halfGammaMinusAlpha) * Math.sin(halfBeta)
    result.y = Math.sin(halfGammaMinusAlpha) * Math.sin(halfBeta)
    result.z = Math.sin(halfGammaPlusAlpha) * Math.cos(halfBeta)
    result.w = Math.cos(halfGammaPlusAlpha) * Math.cos(halfBeta)
  }

  /**
   * Creates a new quaternion containing the rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation)
   * @param axis1 - defines the first axis
   * @param axis2 - defines the second axis
   * @param axis3 - defines the third axis
   * @returns the new quaternion
   */
  public static RotationQuaternionFromAxis(axis1: MVector3, axis2: MVector3, axis3: MVector3): MQuaternion {
    let quat = new MQuaternion(0.0, 0.0, 0.0, 0.0)
    MQuaternion.RotationQuaternionFromAxisToRef(axis1, axis2, axis3, quat)
    return quat
  }

  /**
   * Creates a rotation value to reach the target (axis1, axis2, axis3) orientation as a rotated XYZ system (axis1, axis2 and axis3 are normalized during this operation) and stores it in the target quaternion
   * @param axis1 - defines the first axis
   * @param axis2 - defines the second axis
   * @param axis3 - defines the third axis
   * @param ref - defines the target quaternion
   */
  public static RotationQuaternionFromAxisToRef(
    axis1: MVector3,
    axis2: MVector3,
    axis3: MVector3,
    ref: MQuaternion
  ): void {
    let rotMat = MathTmp.Matrix[0]
    Matrix.FromXYZAxesToRef(axis1.normalize(), axis2.normalize(), axis3.normalize(), rotMat)
    MQuaternion.FromRotationMatrixToRef(rotMat, ref)
  }

  /**
   * Interpolates between two quaternions
   * @param left - defines first quaternion
   * @param right - defines second quaternion
   * @param amount - defines the gradient to use
   * @returns the new interpolated quaternion
   */
  public static Slerp(left: ReadOnlyQuaternion, right: ReadOnlyQuaternion, amount: number): MQuaternion {
    let result = MQuaternion.Identity

    MQuaternion.SlerpToRef(left, right, amount, result)

    return result
  }

  /**
   * Interpolates between two quaternions and stores it into a target quaternion
   * @param left - defines first quaternion
   * @param right - defines second quaternion
   * @param amount - defines the gradient to use
   * @param result - defines the target quaternion
   */
  public static SlerpToRef(
    left: ReadOnlyQuaternion,
    right: ReadOnlyQuaternion,
    amount: number,
    result: MQuaternion
  ): void {
    let num2
    let num3
    let num4 = left.x * right.x + left.y * right.y + left.z * right.z + left.w * right.w
    let flag = false

    if (num4 < 0) {
      flag = true
      num4 = -num4
    }

    if (num4 > 0.999999) {
      num3 = 1 - amount
      num2 = flag ? -amount : amount
    } else {
      let num5 = Math.acos(num4)
      let num6 = 1.0 / Math.sin(num5)
      num3 = Math.sin((1.0 - amount) * num5) * num6
      num2 = flag ? -Math.sin(amount * num5) * num6 : Math.sin(amount * num5) * num6
    }

    result.x = num3 * left.x + num2 * right.x
    result.y = num3 * left.y + num2 * right.y
    result.z = num3 * left.z + num2 * right.z
    result.w = num3 * left.w + num2 * right.w
  }

  /**
   * Interpolate between two quaternions using Hermite interpolation
   * @param value1 - defines first quaternion
   * @param tangent1 - defines the incoming tangent
   * @param value2 - defines second quaternion
   * @param tangent2 - defines the outgoing tangent
   * @param amount - defines the target quaternion
   * @returns the new interpolated quaternion
   */
  public static Hermite(
    value1: ReadOnlyQuaternion,
    tangent1: ReadOnlyQuaternion,
    value2: ReadOnlyQuaternion,
    tangent2: ReadOnlyQuaternion,
    amount: number
  ): MQuaternion {
    let squared = amount * amount
    let cubed = amount * squared
    let part1 = 2.0 * cubed - 3.0 * squared + 1.0
    let part2 = -2.0 * cubed + 3.0 * squared
    let part3 = cubed - 2.0 * squared + amount
    let part4 = cubed - squared

    let x = value1.x * part1 + value2.x * part2 + tangent1.x * part3 + tangent2.x * part4
    let y = value1.y * part1 + value2.y * part2 + tangent1.y * part3 + tangent2.y * part4
    let z = value1.z * part1 + value2.z * part2 + tangent1.z * part3 + tangent2.z * part4
    let w = value1.w * part1 + value2.w * part2 + tangent1.w * part3 + tangent2.w * part4
    return new MQuaternion(x, y, z, w)
  }

  /**
   * Creates an identity quaternion
   * @returns - the identity quaternion
   */
  public static get Identity(): MQuaternion {
    return new MQuaternion(0.0, 0.0, 0.0, 1.0)
  }

  /**
   * Returns the angle in degrees between two rotations a and b.
   * @param quat1 - defines the first quaternion
   * @param quat2 - defines the second quaternion
   */
  public static Angle(quat1: ReadOnlyQuaternion, quat2: ReadOnlyQuaternion): number {
    const dot = MQuaternion.Dot(quat1, quat2)
    return Math.acos(Math.min(Math.abs(dot), 1)) * 2 * RAD2DEG
  }

  /**
   * Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
   * @param x - the rotation on the x axis in euler degrees
   * @param y - the rotation on the y axis in euler degrees
   * @param z - the rotation on the z axis in euler degrees
   */
  public static Euler(x: number, y: number, z: number): MQuaternion {
    return MQuaternion.RotationYawPitchRoll(y * DEG2RAD, x * DEG2RAD, z * DEG2RAD)
  }

  /**
   * Creates a rotation with the specified forward and upwards directions.
   * @param forward - the direction to look in
   * @param up - the vector that defines in which direction up is
   */
  public static LookRotation(forward: MVector3, up: MVector3 = MathTmp.staticUp): MQuaternion {
    const forwardNew = MVector3.Normalize(forward)
    const right: MVector3 = MVector3.Normalize(MVector3.Cross(up, forwardNew))
    const upNew = MVector3.Cross(forwardNew, right)
    let m00 = right.x
    let m01 = right.y
    let m02 = right.z
    let m10 = upNew.x
    let m11 = upNew.y
    let m12 = upNew.z
    let m20 = forwardNew.x
    let m21 = forwardNew.y
    let m22 = forwardNew.z

    const num8 = m00 + m11 + m22
    let quaternion = new MQuaternion()

    if (num8 > 0) {
      let num = Math.sqrt(num8 + 1)
      quaternion.w = num * 0.5
      num = 0.5 / num
      quaternion.x = (m12 - m21) * num
      quaternion.y = (m20 - m02) * num
      quaternion.z = (m01 - m10) * num
      return quaternion
    }

    if (m00 >= m11 && m00 >= m22) {
      let num7 = Math.sqrt(1 + m00 - m11 - m22)
      let num4 = 0.5 / num7
      quaternion.x = 0.5 * num7
      quaternion.y = (m01 + m10) * num4
      quaternion.z = (m02 + m20) * num4
      quaternion.w = (m12 - m21) * num4
      return quaternion
    }

    if (m11 > m22) {
      let num6 = Math.sqrt(1 + m11 - m00 - m22)
      let num3 = 0.5 / num6
      quaternion.x = (m10 + m01) * num3
      quaternion.y = 0.5 * num6
      quaternion.z = (m21 + m12) * num3
      quaternion.w = (m20 - m02) * num3
      return quaternion
    }

    let num5 = Math.sqrt(1 + m22 - m00 - m11)
    let num2 = 0.5 / num5
    quaternion.x = (m20 + m02) * num2
    quaternion.y = (m21 + m12) * num2
    quaternion.z = 0.5 * num5
    quaternion.w = (m01 - m10) * num2
    return quaternion
  }

  /**
   * The from quaternion is rotated towards to by an angular step of maxDegreesDelta.
   * @param from - defines the first quaternion
   * @param to - defines the second quaternion
   * @param maxDegreesDelta - the interval step
   */
  public static RotateTowards(from: ReadOnlyQuaternion, to: MQuaternion, maxDegreesDelta: number): MQuaternion {
    const num: number = MQuaternion.Angle(from, to)
    if (num === 0) {
      return to
    }
    const t: number = Math.min(1, maxDegreesDelta / num)

    return MQuaternion.Slerp(from, to, t)
  }

  /**
   * Creates a rotation which rotates from fromDirection to toDirection.
   * @param from - defines the first Vector
   * @param to - defines the second Vector
   */
  public static FromToRotation(from: MVector3, to: MVector3): MQuaternion {
    const result = new MQuaternion()
    let v0 = from.normalize()
    let v1 = to.normalize()
    let d = MVector3.Dot(v0, v1)

    if (d > -1 + Epsilon) {
      let s = Math.sqrt((1 + d) * 2)
      let invs = 1 / s
      let c = MVector3.Cross(v0, v1).scaleInPlace(invs)
      result.set(c.x, c.y, c.z, s * 0.5)
    } else if (d > 1 - Epsilon) {
      return new MQuaternion(0, 0, 0, 1)
    } else {
      let axis = MVector3.Cross(MVector3.Right(), v0)

      if (axis.lengthSquared() < Epsilon) {
        axis = MVector3.Cross(MVector3.Forward(), v0)
      }

      result.set(axis.x, axis.y, axis.z, 0)
    }

    return result.normalize()
  }

  /**
   * Converts this quaternion to one with the same orientation but with a magnitude of 1.
   */
  public get normalized() {
    return this.normalize()
  }

  /**
   * Creates a rotation which rotates from fromDirection to toDirection.
   * @param from - defines the first Vector
   * @param to - defines the second Vector
   * @param up - defines the direction
   */
  public setFromToRotation(from: MVector3, to: MVector3, up: MVector3 = MathTmp.staticUp) {
    MathTmp.tmpMatrix = Matrix.Zero() // clean up preallocated matrix
    Matrix.LookAtLHToRef(from, to, up, MathTmp.tmpMatrix)
    MathTmp.tmpMatrix.invert()
    MQuaternion.FromRotationMatrixToRef(MathTmp.tmpMatrix, this)
  }

  /**
   * Gets the euler angle representation of the rotation.
   */
  public set eulerAngles(euler: MVector3) {
    this.setEuler(euler.x, euler.y, euler.z)
  }

  /**
   * Sets the euler angle representation of the rotation.
   */
  public get eulerAngles() {
    const out = new MVector3()
    const mat = new Matrix()
    this.toRotationMatrix(mat)
    const m = Matrix.GetAsMatrix3x3(mat)

    out.y = RAD2DEG * Math.asin(Math.max(-1, Math.min(1, m[6])))

    if (Math.abs(m[6]) < 0.99999) {
      out.x = RAD2DEG * Math.atan2(-m[7], m[8])
      out.z = RAD2DEG * Math.atan2(-m[3], m[0])
    } else {
      out.x = RAD2DEG * Math.atan2(m[5], m[4])
      out.z = 0
    }

    return out
  }

  /**
   * Gets a string representation for the current quaternion
   * @returns a string with the Quaternion coordinates
   */
  public toString(): string {
    return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
  }

  /**
   * Gets length of current quaternion
   * @returns the quaternion length (float)
   */
  public get length(): number {
    return Math.sqrt(this.lengthSquared)
  }

  /**
   * Gets length of current quaternion
   * @returns the quaternion length (float)
   */
  public get lengthSquared(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
  }

  /**
   * Gets the class name of the quaternion
   * @returns the string "Quaternion"
   */
  public getClassName(): string {
    return 'Quaternion'
  }

  /**
   * Gets a hash code for this quaternion
   * @returns the quaternion hash code
   */
  public getHashCode(): number {
    let hash = this.x || 0
    hash = (hash * 397) ^ (this.y || 0)
    hash = (hash * 397) ^ (this.z || 0)
    hash = (hash * 397) ^ (this.w || 0)
    return hash
  }

  /**
   * Copy the quaternion to an array
   * @returns a new array populated with 4 elements from the quaternion coordinates
   */
  public asArray(): number[] {
    return [this.x, this.y, this.z, this.w]
  }
  /**
   * Check if two quaternions are equals
   * @param otherQuaternion - defines the second operand
   * @returns true if the current quaternion and the given one coordinates are strictly equals
   */
  public equals(otherQuaternion: ReadOnlyQuaternion): boolean {
    return (
      otherQuaternion &&
      this.x === otherQuaternion.x &&
      this.y === otherQuaternion.y &&
      this.z === otherQuaternion.z &&
      this.w === otherQuaternion.w
    )
  }

  /**
   * Clone the current quaternion
   * @returns a new quaternion copied from the current one
   */
  public clone(): MQuaternion {
    return new MQuaternion(this.x, this.y, this.z, this.w)
  }

  /**
   * Copy a quaternion to the current one
   * @param other - defines the other quaternion
   * @returns the updated current quaternion
   */
  public copyFrom(other: ReadOnlyQuaternion): MQuaternion {
    this.x = other.x
    this.y = other.y
    this.z = other.z
    this.w = other.w
    return this
  }

  /**
   * Updates the current quaternion with the given float coordinates
   * @param x - defines the x coordinate
   * @param y - defines the y coordinate
   * @param z - defines the z coordinate
   * @param w - defines the w coordinate
   * @returns the updated current quaternion
   */
  public copyFromFloats(x: number, y: number, z: number, w: number): MQuaternion {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
    return this
  }

  /**
   * Updates the current quaternion from the given float coordinates
   * @param x - defines the x coordinate
   * @param y - defines the y coordinate
   * @param z - defines the z coordinate
   * @param w - defines the w coordinate
   * @returns the updated current quaternion
   */
  public set(x: number, y: number, z: number, w: number): MQuaternion {
    return this.copyFromFloats(x, y, z, w)
  }

  /**
   * Updates the current quaternion from the given euler angles
   * @returns the updated current quaternion
   */
  public setEuler(x: number, y: number, z: number): MQuaternion {
    MQuaternion.RotationYawPitchRollToRef(y * DEG2RAD, x * DEG2RAD, z * DEG2RAD, this)
    return this
  }

  /**
   * @internal
   * Adds two quaternions
   * @param other - defines the second operand
   * @returns a new quaternion as the addition result of the given one and the current quaternion
   */
  public add(other: MQuaternion): MQuaternion {
    return new MQuaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w)
  }

  /**
   * @internal
   * Add a quaternion to the current one
   * @param other - defines the quaternion to add
   * @returns the current quaternion
   */
  public addInPlace(other: MQuaternion): MQuaternion {
    this.x += other.x
    this.y += other.y
    this.z += other.z
    this.w += other.w
    return this
  }
  /**
   * Subtract two quaternions
   * @param other - defines the second operand
   * @returns a new quaternion as the subtraction result of the given one from the current one
   */
  public subtract(other: MQuaternion): MQuaternion {
    return new MQuaternion(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w)
  }

  /**
   * Multiplies the current quaternion by a scale factor
   * @param value - defines the scale factor
   * @returns a new quaternion set by multiplying the current quaternion coordinates by the float "scale"
   */
  public scale(value: number): MQuaternion {
    return new MQuaternion(this.x * value, this.y * value, this.z * value, this.w * value)
  }

  /**
   * Scale the current quaternion values by a factor and stores the result to a given quaternion
   * @param scale - defines the scale factor
   * @param result - defines the Quaternion object where to store the result
   * @returns the unmodified current quaternion
   */
  public scaleToRef(scale: number, result: MQuaternion): MQuaternion {
    result.x = this.x * scale
    result.y = this.y * scale
    result.z = this.z * scale
    result.w = this.w * scale
    return this
  }

  /**
   * Multiplies in place the current quaternion by a scale factor
   * @param value - defines the scale factor
   * @returns the current modified quaternion
   */
  public scaleInPlace(value: number): MQuaternion {
    this.x *= value
    this.y *= value
    this.z *= value
    this.w *= value

    return this
  }

  /**
   * Scale the current quaternion values by a factor and add the result to a given quaternion
   * @param scale - defines the scale factor
   * @param result - defines the Quaternion object where to store the result
   * @returns the unmodified current quaternion
   */
  public scaleAndAddToRef(scale: number, result: MQuaternion): MQuaternion {
    result.x += this.x * scale
    result.y += this.y * scale
    result.z += this.z * scale
    result.w += this.w * scale
    return this
  }

  /**
   * Multiplies two quaternions
   * @param q1 - defines the second operand
   * @returns a new quaternion set as the multiplication result of the current one with the given one "q1"
   */
  public multiply(q1: ReadOnlyQuaternion): MQuaternion {
    let result = new MQuaternion(0, 0, 0, 1.0)
    this.multiplyToRef(q1, result)
    return result
  }

  /**
   * Sets the given "result" as the the multiplication result of the current one with the given one "q1"
   * @param q1 - defines the second operand
   * @param result - defines the target quaternion
   * @returns the current quaternion
   */
  public multiplyToRef(q1: ReadOnlyQuaternion, result: MQuaternion): MQuaternion {
    let x = this.x * q1.w + this.y * q1.z - this.z * q1.y + this.w * q1.x
    let y = -this.x * q1.z + this.y * q1.w + this.z * q1.x + this.w * q1.y
    let z = this.x * q1.y - this.y * q1.x + this.z * q1.w + this.w * q1.z
    let w = -this.x * q1.x - this.y * q1.y - this.z * q1.z + this.w * q1.w
    result.copyFromFloats(x, y, z, w)
    return this
  }

  /**
   * Updates the current quaternion with the multiplication of itself with the given one "q1"
   * @param q1 - defines the second operand
   * @returns the currentupdated quaternion
   */
  public multiplyInPlace(q1: ReadOnlyQuaternion): MQuaternion {
    this.multiplyToRef(q1, this)
    return this
  }

  /**
   * Conjugates (1-q) the current quaternion and stores the result in the given quaternion
   * @param ref - defines the target quaternion
   * @returns the current quaternion
   */
  public conjugateToRef(ref: MQuaternion): MQuaternion {
    ref.copyFromFloats(-this.x, -this.y, -this.z, this.w)
    return this
  }

  /**
   * Conjugates in place (1-q) the current quaternion
   * @returns the current updated quaternion
   */
  public conjugateInPlace(): MQuaternion {
    this.x *= -1
    this.y *= -1
    this.z *= -1
    return this
  }

  /**
   * Conjugates in place (1-q) the current quaternion
   * @returns a new quaternion
   */
  public conjugate(): MQuaternion {
    let result = new MQuaternion(-this.x, -this.y, -this.z, this.w)
    return result
  }

  /**
   * Normalize in place the current quaternion
   * @returns the current updated quaternion
   */
  public normalize(): MQuaternion {
    let length = 1.0 / this.length
    this.x *= length
    this.y *= length
    this.z *= length
    this.w *= length
    return this
  }

  public angleAxis(degress: number, axis: MVector3) {
    if (axis.lengthSquared() === 0) {
      return MQuaternion.Identity
    }

    const result: MQuaternion = MQuaternion.Identity
    let radians = degress * DEG2RAD
    radians *= 0.5

    let a2 = axis.normalize()
    a2 = axis.scaleInPlace(Math.sin(radians))

    result.x = a2.x
    result.y = a2.y
    result.z = a2.z
    result.w = Math.cos(radians)

    return result.normalize()
  }

  /**
   * Updates the given rotation matrix with the current quaternion values
   * @param result - defines the target matrix
   * @returns the current unchanged quaternion
   */
  public toRotationMatrix(result: Matrix): MQuaternion {
    Matrix.FromQuaternionToRef(this, result)
    return this
  }

  /**
   * Updates the current quaternion from the given rotation matrix values
   * @param matrix - defines the source matrix
   * @returns the current updated quaternion
   */
  public fromRotationMatrix(matrix: Matrix): MQuaternion {
    MQuaternion.FromRotationMatrixToRef(matrix, this)
    return this
  }
}

/**
 * Class used to store matrix data (4x4)
 * @public
 */
export class Matrix {
  /**
   * Gets the internal data of the matrix
   */
  public get m(): Readonly<FloatArray> {
    return this._m
  }

  /**
   * Gets an identity matrix that must not be updated
   */
  public static get IdentityReadOnly(): Readonly<Matrix> {
    return Matrix._identityReadOnly
  }

  private static _updateFlagSeed = 0
  private static _identityReadOnly = Matrix.Identity()

  /**
   * Gets the update flag of the matrix which is an unique number for the matrix.
   * It will be incremented every time the matrix data change.
   * You can use it to speed the comparison between two versions of the same matrix.
   */
  public updateFlag!: number

  private _isIdentity = false
  private _isIdentityDirty = true
  private _isIdentity3x2 = true
  private _isIdentity3x2Dirty = true

  private readonly _m: FloatArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  /**
   * Creates an empty matrix (filled with zeros)
   */
  public constructor() {
    this._updateIdentityStatus(false)
  }

  // Statics

  /**
   * Creates a matrix from an array
   * @param array - defines the source array
   * @param offset - defines an offset in the source array
   * @returns a new Matrix set from the starting index of the given array
   */
  public static FromArray(array: ArrayLike<number>, offset: number = 0): Matrix {
    let result = new Matrix()
    Matrix.FromArrayToRef(array, offset, result)
    return result
  }

  /**
   * Copy the content of an array into a given matrix
   * @param array - defines the source array
   * @param offset - defines an offset in the source array
   * @param result - defines the target matrix
   */
  public static FromArrayToRef(array: ArrayLike<number>, offset: number, result: Matrix) {
    for (let index = 0; index < 16; index++) {
      result._m[index] = array[index + offset]
    }
    result._markAsUpdated()
  }

  /**
   * Stores an array into a matrix after having multiplied each component by a given factor
   * @param array - defines the source array
   * @param offset - defines the offset in the source array
   * @param scale - defines the scaling factor
   * @param result - defines the target matrix
   */
  public static FromFloatArrayToRefScaled(array: FloatArray, offset: number, scale: number, result: Matrix) {
    for (let index = 0; index < 16; index++) {
      result._m[index] = array[index + offset] * scale
    }
    result._markAsUpdated()
  }

  /**
   * Stores a list of values (16) inside a given matrix
   * @param initialM11 - defines 1st value of 1st row
   * @param initialM12 - defines 2nd value of 1st row
   * @param initialM13 - defines 3rd value of 1st row
   * @param initialM14 - defines 4th value of 1st row
   * @param initialM21 - defines 1st value of 2nd row
   * @param initialM22 - defines 2nd value of 2nd row
   * @param initialM23 - defines 3rd value of 2nd row
   * @param initialM24 - defines 4th value of 2nd row
   * @param initialM31 - defines 1st value of 3rd row
   * @param initialM32 - defines 2nd value of 3rd row
   * @param initialM33 - defines 3rd value of 3rd row
   * @param initialM34 - defines 4th value of 3rd row
   * @param initialM41 - defines 1st value of 4th row
   * @param initialM42 - defines 2nd value of 4th row
   * @param initialM43 - defines 3rd value of 4th row
   * @param initialM44 - defines 4th value of 4th row
   * @param result - defines the target matrix
   */
  public static FromValuesToRef(
    initialM11: number,
    initialM12: number,
    initialM13: number,
    initialM14: number,
    initialM21: number,
    initialM22: number,
    initialM23: number,
    initialM24: number,
    initialM31: number,
    initialM32: number,
    initialM33: number,
    initialM34: number,
    initialM41: number,
    initialM42: number,
    initialM43: number,
    initialM44: number,
    result: Matrix
  ): void {
    const m = result._m
    m[0] = initialM11
    m[1] = initialM12
    m[2] = initialM13
    m[3] = initialM14
    m[4] = initialM21
    m[5] = initialM22
    m[6] = initialM23
    m[7] = initialM24
    m[8] = initialM31
    m[9] = initialM32
    m[10] = initialM33
    m[11] = initialM34
    m[12] = initialM41
    m[13] = initialM42
    m[14] = initialM43
    m[15] = initialM44

    result._markAsUpdated()
  }

  /**
   * Creates new matrix from a list of values (16)
   * @param initialM11 - defines 1st value of 1st row
   * @param initialM12 - defines 2nd value of 1st row
   * @param initialM13 - defines 3rd value of 1st row
   * @param initialM14 - defines 4th value of 1st row
   * @param initialM21 - defines 1st value of 2nd row
   * @param initialM22 - defines 2nd value of 2nd row
   * @param initialM23 - defines 3rd value of 2nd row
   * @param initialM24 - defines 4th value of 2nd row
   * @param initialM31 - defines 1st value of 3rd row
   * @param initialM32 - defines 2nd value of 3rd row
   * @param initialM33 - defines 3rd value of 3rd row
   * @param initialM34 - defines 4th value of 3rd row
   * @param initialM41 - defines 1st value of 4th row
   * @param initialM42 - defines 2nd value of 4th row
   * @param initialM43 - defines 3rd value of 4th row
   * @param initialM44 - defines 4th value of 4th row
   * @returns the new matrix
   */
  public static FromValues(
    initialM11: number,
    initialM12: number,
    initialM13: number,
    initialM14: number,
    initialM21: number,
    initialM22: number,
    initialM23: number,
    initialM24: number,
    initialM31: number,
    initialM32: number,
    initialM33: number,
    initialM34: number,
    initialM41: number,
    initialM42: number,
    initialM43: number,
    initialM44: number
  ): Matrix {
    let result = new Matrix()
    const m = result._m
    m[0] = initialM11
    m[1] = initialM12
    m[2] = initialM13
    m[3] = initialM14
    m[4] = initialM21
    m[5] = initialM22
    m[6] = initialM23
    m[7] = initialM24
    m[8] = initialM31
    m[9] = initialM32
    m[10] = initialM33
    m[11] = initialM34
    m[12] = initialM41
    m[13] = initialM42
    m[14] = initialM43
    m[15] = initialM44
    result._markAsUpdated()
    return result
  }

  /**
   * Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
   * @param scale - defines the scale vector3
   * @param rotation - defines the rotation quaternion
   * @param translation - defines the translation vector3
   * @returns a new matrix
   */
  public static Compose(scale: MVector3, rotation: MQuaternion, translation: MVector3): Matrix {
    let result = new Matrix()
    Matrix.ComposeToRef(scale, rotation, translation, result)
    return result
  }

  /**
   * Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
   * @param scale - defines the scale vector3
   * @param rotation - defines the rotation quaternion
   * @param translation - defines the translation vector3
   * @param result - defines the target matrix
   */
  public static ComposeToRef(scale: MVector3, rotation: MQuaternion, translation: MVector3, result: Matrix): void {
    Matrix.ScalingToRef(scale.x, scale.y, scale.z, MathTmp.Matrix[1])
    rotation.toRotationMatrix(MathTmp.Matrix[0])
    MathTmp.Matrix[1].multiplyToRef(MathTmp.Matrix[0], result)

    result.setTranslation(translation)
  }

  /**
   * Creates a new identity matrix
   * @returns a new identity matrix
   */
  public static Identity(): Matrix {
    const identity = Matrix.FromValues(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)
    identity._updateIdentityStatus(true)
    return identity
  }

  /**
   * Creates a new identity matrix and stores the result in a given matrix
   * @param result - defines the target matrix
   */
  public static IdentityToRef(result: Matrix): void {
    Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result)
    result._updateIdentityStatus(true)
  }

  /**
   * Creates a new zero matrix
   * @returns a new zero matrix
   */
  public static Zero(): Matrix {
    const zero = Matrix.FromValues(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)
    zero._updateIdentityStatus(false)
    return zero
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the X axis
   * @param angle - defines the angle (in radians) to use
   * @returns the new matrix
   */
  public static RotationX(angle: number): Matrix {
    let result = new Matrix()
    Matrix.RotationXToRef(angle, result)
    return result
  }

  /**
   * Creates a new matrix as the invert of a given matrix
   * @param source - defines the source matrix
   * @returns the new matrix
   */
  public static Invert(source: Matrix): Matrix {
    let result = new Matrix()
    source.invertToRef(result)
    return result
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
   * @param angle - defines the angle (in radians) to use
   * @param result - defines the target matrix
   */
  public static RotationXToRef(angle: number, result: Matrix): void {
    let s = Math.sin(angle)
    let c = Math.cos(angle)
    Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, result)

    result._updateIdentityStatus(c === 1 && s === 0)
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the Y axis
   * @param angle - defines the angle (in radians) to use
   * @returns the new matrix
   */
  public static RotationY(angle: number): Matrix {
    let result = new Matrix()
    Matrix.RotationYToRef(angle, result)
    return result
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
   * @param angle - defines the angle (in radians) to use
   * @param result - defines the target matrix
   */
  public static RotationYToRef(angle: number, result: Matrix): void {
    let s = Math.sin(angle)
    let c = Math.cos(angle)
    Matrix.FromValuesToRef(c, 0.0, -s, 0.0, 0.0, 1.0, 0.0, 0.0, s, 0.0, c, 0.0, 0.0, 0.0, 0.0, 1.0, result)

    result._updateIdentityStatus(c === 1 && s === 0)
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the Z axis
   * @param angle - defines the angle (in radians) to use
   * @returns the new matrix
   */
  public static RotationZ(angle: number): Matrix {
    let result = new Matrix()
    Matrix.RotationZToRef(angle, result)
    return result
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
   * @param angle - defines the angle (in radians) to use
   * @param result - defines the target matrix
   */
  public static RotationZToRef(angle: number, result: Matrix): void {
    let s = Math.sin(angle)
    let c = Math.cos(angle)
    Matrix.FromValuesToRef(c, s, 0.0, 0.0, -s, c, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, result)

    result._updateIdentityStatus(c === 1 && s === 0)
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the given axis
   * @param axis - defines the axis to use
   * @param angle - defines the angle (in radians) to use
   * @returns the new matrix
   */
  public static RotationAxis(axis: MVector3, angle: number): Matrix {
    let result = new Matrix()
    Matrix.RotationAxisToRef(axis, angle, result)
    return result
  }

  /**
   * Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
   * @param axis - defines the axis to use
   * @param angle - defines the angle (in radians) to use
   * @param result - defines the target matrix
   */
  public static RotationAxisToRef(axis: MVector3, angle: number, result: Matrix): void {
    let s = Math.sin(-angle)
    let c = Math.cos(-angle)
    let c1 = 1 - c

    axis.normalize()
    const m = result._m
    m[0] = axis.x * axis.x * c1 + c
    m[1] = axis.x * axis.y * c1 - axis.z * s
    m[2] = axis.x * axis.z * c1 + axis.y * s
    m[3] = 0.0

    m[4] = axis.y * axis.x * c1 + axis.z * s
    m[5] = axis.y * axis.y * c1 + c
    m[6] = axis.y * axis.z * c1 - axis.x * s
    m[7] = 0.0

    m[8] = axis.z * axis.x * c1 - axis.y * s
    m[9] = axis.z * axis.y * c1 + axis.x * s
    m[10] = axis.z * axis.z * c1 + c
    m[11] = 0.0

    m[12] = 0.0
    m[13] = 0.0
    m[14] = 0.0
    m[15] = 1.0

    result._markAsUpdated()
  }

  /**
   * Creates a rotation matrix
   * @param yaw - defines the yaw angle in radians (Y axis)
   * @param pitch - defines the pitch angle in radians (X axis)
   * @param roll - defines the roll angle in radians (X axis)
   * @returns the new rotation matrix
   */
  public static RotationYawPitchRoll(yaw: number, pitch: number, roll: number): Matrix {
    let result = new Matrix()
    Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, result)
    return result
  }

  /**
   * Creates a rotation matrix and stores it in a given matrix
   * @param yaw - defines the yaw angle in radians (Y axis)
   * @param pitch - defines the pitch angle in radians (X axis)
   * @param roll - defines the roll angle in radians (X axis)
   * @param result - defines the target matrix
   */
  public static RotationYawPitchRollToRef(yaw: number, pitch: number, roll: number, result: Matrix): void {
    MQuaternion.RotationYawPitchRollToRef(yaw, pitch, roll, MathTmp.Quaternion[0])
    MathTmp.Quaternion[0].toRotationMatrix(result)
  }

  /**
   * Creates a scaling matrix
   * @param x - defines the scale factor on X axis
   * @param y - defines the scale factor on Y axis
   * @param z - defines the scale factor on Z axis
   * @returns the new matrix
   */
  public static Scaling(x: number, y: number, z: number): Matrix {
    let result = new Matrix()
    Matrix.ScalingToRef(x, y, z, result)
    return result
  }

  /**
   * Creates a scaling matrix and stores it in a given matrix
   * @param x - defines the scale factor on X axis
   * @param y - defines the scale factor on Y axis
   * @param z - defines the scale factor on Z axis
   * @param result - defines the target matrix
   */
  public static ScalingToRef(x: number, y: number, z: number, result: Matrix): void {
    Matrix.FromValuesToRef(x, 0.0, 0.0, 0.0, 0.0, y, 0.0, 0.0, 0.0, 0.0, z, 0.0, 0.0, 0.0, 0.0, 1.0, result)

    result._updateIdentityStatus(x === 1 && y === 1 && z === 1)
  }

  /**
   * Creates a translation matrix
   * @param x - defines the translation on X axis
   * @param y - defines the translation on Y axis
   * @param z - defines the translationon Z axis
   * @returns the new matrix
   */
  public static Translation(x: number, y: number, z: number): Matrix {
    let result = new Matrix()
    Matrix.TranslationToRef(x, y, z, result)
    return result
  }

  /**
   * Creates a translation matrix and stores it in a given matrix
   * @param x - defines the translation on X axis
   * @param y - defines the translation on Y axis
   * @param z - defines the translationon Z axis
   * @param result - defines the target matrix
   */
  public static TranslationToRef(x: number, y: number, z: number, result: Matrix): void {
    Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x, y, z, 1.0, result)
    result._updateIdentityStatus(x === 0 && y === 0 && z === 0)
  }

  /**
   * Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
   * @param startValue - defines the start value
   * @param endValue - defines the end value
   * @param gradient - defines the gradient factor
   * @returns the new matrix
   */
  public static Lerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix {
    let result = new Matrix()
    Matrix.LerpToRef(startValue, endValue, gradient, result)
    return result
  }

  /**
   * Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
   * @param startValue - defines the start value
   * @param endValue - defines the end value
   * @param gradient - defines the gradient factor
   * @param result - defines the Matrix object where to store data
   */
  public static LerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix): void {
    for (let index = 0; index < 16; index++) {
      result._m[index] = startValue._m[index] * (1.0 - gradient) + endValue._m[index] * gradient
    }
    result._markAsUpdated()
  }

  /**
   * Builds a new matrix whose values are computed by:
   * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
   * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
   * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
   * @param startValue - defines the first matrix
   * @param endValue - defines the second matrix
   * @param gradient - defines the gradient between the two matrices
   * @returns the new matrix
   */
  public static DecomposeLerp(startValue: Matrix, endValue: Matrix, gradient: number): Matrix {
    let result = new Matrix()
    Matrix.DecomposeLerpToRef(startValue, endValue, gradient, result)
    return result
  }

  /**
   * Update a matrix to values which are computed by:
   * * decomposing the the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
   * * interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
   * * recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
   * @param startValue - defines the first matrix
   * @param endValue - defines the second matrix
   * @param gradient - defines the gradient between the two matrices
   * @param result - defines the target matrix
   */
  public static DecomposeLerpToRef(startValue: Matrix, endValue: Matrix, gradient: number, result: Matrix) {
    let startScale = MathTmp.Vector3[0]
    let startRotation = MathTmp.Quaternion[0]
    let startTranslation = MathTmp.Vector3[1]
    startValue.decompose(startScale, startRotation, startTranslation)

    let endScale = MathTmp.Vector3[2]
    let endRotation = MathTmp.Quaternion[1]
    let endTranslation = MathTmp.Vector3[3]
    endValue.decompose(endScale, endRotation, endTranslation)

    let resultScale = MathTmp.Vector3[4]
    MVector3.LerpToRef(startScale, endScale, gradient, resultScale)
    let resultRotation = MathTmp.Quaternion[2]
    MQuaternion.SlerpToRef(startRotation, endRotation, gradient, resultRotation)

    let resultTranslation = MathTmp.Vector3[5]
    MVector3.LerpToRef(startTranslation, endTranslation, gradient, resultTranslation)

    Matrix.ComposeToRef(resultScale, resultRotation, resultTranslation, result)
  }

  /**
   * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
   * This function works in left handed mode
   * @param eye - defines the final position of the entity
   * @param target - defines where the entity should look at
   * @param up - defines the up vector for the entity
   * @returns the new matrix
   */
  public static LookAtLH(eye: MVector3, target: MVector3, up: MVector3): Matrix {
    let result = new Matrix()
    Matrix.LookAtLHToRef(eye, target, up, result)
    return result
  }

  /**
   * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
   * This function works in left handed mode
   * @param eye - defines the final position of the entity
   * @param target - defines where the entity should look at
   * @param up - defines the up vector for the entity
   * @param result - defines the target matrix
   */
  public static LookAtLHToRef(eye: MVector3, target: MVector3, up: MVector3, result: Matrix): void {
    const xAxis = MathTmp.Vector3[0]
    const yAxis = MathTmp.Vector3[1]
    const zAxis = MathTmp.Vector3[2]

    // Z axis
    target.subtractToRef(eye, zAxis)
    zAxis.normalize()

    // X axis
    MVector3.CrossToRef(up, zAxis, xAxis)

    const xSquareLength = xAxis.lengthSquared()
    if (xSquareLength === 0) {
      xAxis.x = 1.0
    } else {
      xAxis.normalizeFromLength(Math.sqrt(xSquareLength))
    }

    // Y axis
    MVector3.CrossToRef(zAxis, xAxis, yAxis)
    yAxis.normalize()

    // Eye angles
    let ex = -MVector3.Dot(xAxis, eye)
    let ey = -MVector3.Dot(yAxis, eye)
    let ez = -MVector3.Dot(zAxis, eye)

    Matrix.FromValuesToRef(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0.0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0.0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0.0,
      ex,
      ey,
      ez,
      1.0,
      result
    )
  }

  /**
   * Gets a new rotation matrix used to rotate an entity so as it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up"
   * This function works in right handed mode
   * @param eye - defines the final position of the entity
   * @param target - defines where the entity should look at
   * @param up - defines the up vector for the entity
   * @returns the new matrix
   */
  public static LookAtRH(eye: MVector3, target: MVector3, up: MVector3): Matrix {
    let result = new Matrix()
    Matrix.LookAtRHToRef(eye, target, up, result)
    return result
  }

  /**
   * Sets the given "result" Matrix to a rotation matrix used to rotate an entity so that it looks at the target vector3, from the eye vector3 position, the up vector3 being oriented like "up".
   * This function works in right handed mode
   * @param eye - defines the final position of the entity
   * @param target - defines where the entity should look at
   * @param up - defines the up vector for the entity
   * @param result - defines the target matrix
   */
  public static LookAtRHToRef(eye: MVector3, target: MVector3, up: MVector3, result: Matrix): void {
    const xAxis = MathTmp.Vector3[0]
    const yAxis = MathTmp.Vector3[1]
    const zAxis = MathTmp.Vector3[2]

    // Z axis
    eye.subtractToRef(target, zAxis)
    zAxis.normalize()

    // X axis
    MVector3.CrossToRef(up, zAxis, xAxis)

    const xSquareLength = xAxis.lengthSquared()
    if (xSquareLength === 0) {
      xAxis.x = 1.0
    } else {
      xAxis.normalizeFromLength(Math.sqrt(xSquareLength))
    }

    // Y axis
    MVector3.CrossToRef(zAxis, xAxis, yAxis)
    yAxis.normalize()

    // Eye angles
    let ex = -MVector3.Dot(xAxis, eye)
    let ey = -MVector3.Dot(yAxis, eye)
    let ez = -MVector3.Dot(zAxis, eye)

    Matrix.FromValuesToRef(
      xAxis.x,
      yAxis.x,
      zAxis.x,
      0.0,
      xAxis.y,
      yAxis.y,
      zAxis.y,
      0.0,
      xAxis.z,
      yAxis.z,
      zAxis.z,
      0.0,
      ex,
      ey,
      ez,
      1.0,
      result
    )
  }

  /**
   * Create a left-handed orthographic projection matrix
   * @param width - defines the viewport width
   * @param height - defines the viewport height
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a left-handed orthographic projection matrix
   */
  public static OrthoLH(width: number, height: number, znear: number, zfar: number): Matrix {
    let matrix = new Matrix()
    Matrix.OrthoLHToRef(width, height, znear, zfar, matrix)
    return matrix
  }

  /**
   * Store a left-handed orthographic projection to a given matrix
   * @param width - defines the viewport width
   * @param height - defines the viewport height
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   */
  public static OrthoLHToRef(width: number, height: number, znear: number, zfar: number, result: Matrix): void {
    let n = znear
    let f = zfar

    let a = 2.0 / width
    let b = 2.0 / height
    let c = 2.0 / (f - n)
    let d = -(f + n) / (f - n)

    Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, 0.0, 0.0, d, 1.0, result)

    result._updateIdentityStatus(a === 1 && b === 1 && c === 1 && d === 0)
  }

  /**
   * Create a left-handed orthographic projection matrix
   * @param left - defines the viewport left coordinate
   * @param right - defines the viewport right coordinate
   * @param bottom - defines the viewport bottom coordinate
   * @param top - defines the viewport top coordinate
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a left-handed orthographic projection matrix
   */
  public static OrthoOffCenterLH(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number
  ): Matrix {
    let matrix = new Matrix()
    Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, matrix)
    return matrix
  }

  /**
   * Stores a left-handed orthographic projection into a given matrix
   * @param left - defines the viewport left coordinate
   * @param right - defines the viewport right coordinate
   * @param bottom - defines the viewport bottom coordinate
   * @param top - defines the viewport top coordinate
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   */
  public static OrthoOffCenterLHToRef(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number,
    result: Matrix
  ): void {
    let n = znear
    let f = zfar

    let a = 2.0 / (right - left)
    let b = 2.0 / (top - bottom)
    let c = 2.0 / (f - n)
    let d = -(f + n) / (f - n)
    let i0 = (left + right) / (left - right)
    let i1 = (top + bottom) / (bottom - top)

    Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 0.0, i0, i1, d, 1.0, result)

    result._markAsUpdated()
  }

  /**
   * Creates a right-handed orthographic projection matrix
   * @param left - defines the viewport left coordinate
   * @param right - defines the viewport right coordinate
   * @param bottom - defines the viewport bottom coordinate
   * @param top - defines the viewport top coordinate
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a right-handed orthographic projection matrix
   */
  public static OrthoOffCenterRH(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number
  ): Matrix {
    let matrix = new Matrix()
    Matrix.OrthoOffCenterRHToRef(left, right, bottom, top, znear, zfar, matrix)
    return matrix
  }

  /**
   * Stores a right-handed orthographic projection into a given matrix
   * @param left - defines the viewport left coordinate
   * @param right - defines the viewport right coordinate
   * @param bottom - defines the viewport bottom coordinate
   * @param top - defines the viewport top coordinate
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   */
  public static OrthoOffCenterRHToRef(
    left: number,
    right: number,
    bottom: number,
    top: number,
    znear: number,
    zfar: number,
    result: Matrix
  ): void {
    Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, result)
    result._m[10] *= -1 // No need to call _markAsUpdated as previous function already called it and let _isIdentityDirty to true
  }

  /**
   * Creates a left-handed perspective projection matrix
   * @param width - defines the viewport width
   * @param height - defines the viewport height
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a left-handed perspective projection matrix
   */
  public static PerspectiveLH(width: number, height: number, znear: number, zfar: number): Matrix {
    let matrix = new Matrix()

    let n = znear
    let f = zfar

    let a = (2.0 * n) / width
    let b = (2.0 * n) / height
    let c = (f + n) / (f - n)
    let d = (-2.0 * f * n) / (f - n)

    Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, matrix)

    matrix._updateIdentityStatus(false)
    return matrix
  }

  /**
   * Creates a left-handed perspective projection matrix
   * @param fov - defines the horizontal field of view
   * @param aspect - defines the aspect ratio
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a left-handed perspective projection matrix
   */
  public static PerspectiveFovLH(fov: number, aspect: number, znear: number, zfar: number): Matrix {
    let matrix = new Matrix()
    Matrix.PerspectiveFovLHToRef(fov, aspect, znear, zfar, matrix)
    return matrix
  }

  /**
   * Stores a left-handed perspective projection into a given matrix
   * @param fov - defines the horizontal field of view
   * @param aspect - defines the aspect ratio
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   * @param isVerticalFovFixed - defines it the fov is vertically fixed (default) or horizontally
   */
  public static PerspectiveFovLHToRef(
    fov: number,
    aspect: number,
    znear: number,
    zfar: number,
    result: Matrix,
    isVerticalFovFixed = true
  ): void {
    let n = znear
    let f = zfar

    let t = 1.0 / Math.tan(fov * 0.5)
    let a = isVerticalFovFixed ? t / aspect : t
    let b = isVerticalFovFixed ? t : t * aspect
    let c = (f + n) / (f - n)
    let d = (-2.0 * f * n) / (f - n)

    Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, 1.0, 0.0, 0.0, d, 0.0, result)
    result._updateIdentityStatus(false)
  }

  /**
   * Creates a right-handed perspective projection matrix
   * @param fov - defines the horizontal field of view
   * @param aspect - defines the aspect ratio
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @returns a new matrix as a right-handed perspective projection matrix
   */
  public static PerspectiveFovRH(fov: number, aspect: number, znear: number, zfar: number): Matrix {
    let matrix = new Matrix()
    Matrix.PerspectiveFovRHToRef(fov, aspect, znear, zfar, matrix)
    return matrix
  }

  /**
   * Stores a right-handed perspective projection into a given matrix
   * @param fov - defines the horizontal field of view
   * @param aspect - defines the aspect ratio
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   * @param isVerticalFovFixed - defines it the fov is vertically fixed (default) or horizontally
   */
  public static PerspectiveFovRHToRef(
    fov: number,
    aspect: number,
    znear: number,
    zfar: number,
    result: Matrix,
    isVerticalFovFixed = true
  ): void {
    /* alternatively this could be expressed as:
    //    m = PerspectiveFovLHToRef
    //    m[10] *= -1.0;
    //    m[11] *= -1.0;
    */

    let n = znear
    let f = zfar

    let t = 1.0 / Math.tan(fov * 0.5)
    let a = isVerticalFovFixed ? t / aspect : t
    let b = isVerticalFovFixed ? t : t * aspect
    let c = -(f + n) / (f - n)
    let d = (-2 * f * n) / (f - n)

    Matrix.FromValuesToRef(a, 0.0, 0.0, 0.0, 0.0, b, 0.0, 0.0, 0.0, 0.0, c, -1.0, 0.0, 0.0, d, 0.0, result)

    result._updateIdentityStatus(false)
  }

  /**
   * Stores a perspective projection for WebVR info a given matrix
   * @param fov - defines the field of view
   * @param znear - defines the near clip plane
   * @param zfar - defines the far clip plane
   * @param result - defines the target matrix
   * @param rightHanded - defines if the matrix must be in right-handed mode (false by default)
   */
  public static PerspectiveFovWebVRToRef(
    fov: { upDegrees: number; downDegrees: number; leftDegrees: number; rightDegrees: number },
    znear: number,
    zfar: number,
    result: Matrix,
    rightHanded = false
  ): void {
    let rightHandedFactor = rightHanded ? -1 : 1

    let upTan = Math.tan((fov.upDegrees * Math.PI) / 180.0)
    let downTan = Math.tan((fov.downDegrees * Math.PI) / 180.0)
    let leftTan = Math.tan((fov.leftDegrees * Math.PI) / 180.0)
    let rightTan = Math.tan((fov.rightDegrees * Math.PI) / 180.0)
    let xScale = 2.0 / (leftTan + rightTan)
    let yScale = 2.0 / (upTan + downTan)
    const m = result._m
    m[0] = xScale
    m[1] = m[2] = m[3] = m[4] = 0.0
    m[5] = yScale
    m[6] = m[7] = 0.0
    m[8] = (leftTan - rightTan) * xScale * 0.5
    m[9] = -((upTan - downTan) * yScale * 0.5)
    m[10] = -zfar / (znear - zfar)
    m[11] = 1.0 * rightHandedFactor
    m[12] = m[13] = m[15] = 0.0
    m[14] = -(2.0 * zfar * znear) / (zfar - znear)

    result._markAsUpdated()
  }

  /**
   * Extracts a 2x2 matrix from a given matrix and store the result in a FloatArray
   * @param matrix - defines the matrix to use
   * @returns a new FloatArray array with 4 elements : the 2x2 matrix extracted from the given matrix
   */
  public static GetAsMatrix2x2(matrix: Matrix): FloatArray {
    return [matrix._m[0], matrix._m[1], matrix._m[4], matrix._m[5]]
  }
  /**
   * Extracts a 3x3 matrix from a given matrix and store the result in a FloatArray
   * @param matrix - defines the matrix to use
   * @returns a new FloatArray array with 9 elements : the 3x3 matrix extracted from the given matrix
   */
  public static GetAsMatrix3x3(matrix: Matrix): FloatArray {
    return [
      matrix._m[0],
      matrix._m[1],
      matrix._m[2],
      matrix._m[4],
      matrix._m[5],
      matrix._m[6],
      matrix._m[8],
      matrix._m[9],
      matrix._m[10]
    ]
  }

  /**
   * Compute the transpose of a given matrix
   * @param matrix - defines the matrix to transpose
   * @returns the new matrix
   */
  public static Transpose(matrix: Matrix): Matrix {
    let result = new Matrix()
    Matrix.TransposeToRef(matrix, result)
    return result
  }

  /**
   * Compute the transpose of a matrix and store it in a target matrix
   * @param matrix - defines the matrix to transpose
   * @param result - defines the target matrix
   */
  public static TransposeToRef(matrix: Matrix, result: Matrix): void {
    const rm = result._m
    const mm = matrix._m
    rm[0] = mm[0]
    rm[1] = mm[4]
    rm[2] = mm[8]
    rm[3] = mm[12]

    rm[4] = mm[1]
    rm[5] = mm[5]
    rm[6] = mm[9]
    rm[7] = mm[13]

    rm[8] = mm[2]
    rm[9] = mm[6]
    rm[10] = mm[10]
    rm[11] = mm[14]

    rm[12] = mm[3]
    rm[13] = mm[7]
    rm[14] = mm[11]
    rm[15] = mm[15]
    // identity-ness does not change when transposing
    result._updateIdentityStatus(matrix._isIdentity, matrix._isIdentityDirty)
  }

  /**
   * Computes a reflection matrix from a plane
   * @param plane - defines the reflection plane
   * @returns a new matrix
   */
  public static Reflection(plane: Plane): Matrix {
    let matrix = new Matrix()
    Matrix.ReflectionToRef(plane, matrix)
    return matrix
  }

  /**
   * Computes a reflection matrix from a plane
   * @param plane - defines the reflection plane
   * @param result - defines the target matrix
   */
  public static ReflectionToRef(plane: Plane, result: Matrix): void {
    plane.normalize()
    let x = plane.normal.x
    let y = plane.normal.y
    let z = plane.normal.z
    let temp = -2 * x
    let temp2 = -2 * y
    let temp3 = -2 * z
    Matrix.FromValuesToRef(
      temp * x + 1,
      temp2 * x,
      temp3 * x,
      0.0,
      temp * y,
      temp2 * y + 1,
      temp3 * y,
      0.0,
      temp * z,
      temp2 * z,
      temp3 * z + 1,
      0.0,
      temp * plane.d,
      temp2 * plane.d,
      temp3 * plane.d,
      1.0,
      result
    )
  }

  /**
   * Sets the given matrix as a rotation matrix composed from the 3 left handed axes
   * @param xaxis - defines the value of the 1st axis
   * @param yaxis - defines the value of the 2nd axis
   * @param zaxis - defines the value of the 3rd axis
   * @param result - defines the target matrix
   */
  public static FromXYZAxesToRef(xaxis: MVector3, yaxis: MVector3, zaxis: MVector3, result: Matrix) {
    Matrix.FromValuesToRef(
      xaxis.x,
      xaxis.y,
      xaxis.z,
      0.0,
      yaxis.x,
      yaxis.y,
      yaxis.z,
      0.0,
      zaxis.x,
      zaxis.y,
      zaxis.z,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      result
    )
  }

  /**
   * Creates a rotation matrix from a quaternion and stores it in a target matrix
   * @param quat - defines the quaternion to use
   * @param result - defines the target matrix
   */
  public static FromQuaternionToRef(quat: MQuaternion, result: Matrix) {
    let xx = quat.x * quat.x
    let yy = quat.y * quat.y
    let zz = quat.z * quat.z
    let xy = quat.x * quat.y
    let zw = quat.z * quat.w
    let zx = quat.z * quat.x
    let yw = quat.y * quat.w
    let yz = quat.y * quat.z
    let xw = quat.x * quat.w

    result._m[0] = 1.0 - 2.0 * (yy + zz)
    result._m[1] = 2.0 * (xy + zw)
    result._m[2] = 2.0 * (zx - yw)
    result._m[3] = 0.0

    result._m[4] = 2.0 * (xy - zw)
    result._m[5] = 1.0 - 2.0 * (zz + xx)
    result._m[6] = 2.0 * (yz + xw)
    result._m[7] = 0.0

    result._m[8] = 2.0 * (zx + yw)
    result._m[9] = 2.0 * (yz - xw)
    result._m[10] = 1.0 - 2.0 * (yy + xx)
    result._m[11] = 0.0

    result._m[12] = 0.0
    result._m[13] = 0.0
    result._m[14] = 0.0
    result._m[15] = 1.0

    result._markAsUpdated()
  }

  /** @internal */
  public _markAsUpdated() {
    this.updateFlag = Matrix._updateFlagSeed++
    this._isIdentity = false
    this._isIdentity3x2 = false
    this._isIdentityDirty = true
    this._isIdentity3x2Dirty = true
  }

  // Properties

  /**
   * Check if the current matrix is identity
   * @returns true is the matrix is the identity matrix
   */
  public isIdentity(): boolean {
    if (this._isIdentityDirty) {
      this._isIdentityDirty = false
      const m = this._m
      this._isIdentity =
        m[0] === 1.0 &&
        m[1] === 0.0 &&
        m[2] === 0.0 &&
        m[3] === 0.0 &&
        m[4] === 0.0 &&
        m[5] === 1.0 &&
        m[6] === 0.0 &&
        m[7] === 0.0 &&
        m[8] === 0.0 &&
        m[9] === 0.0 &&
        m[10] === 1.0 &&
        m[11] === 0.0 &&
        m[12] === 0.0 &&
        m[13] === 0.0 &&
        m[14] === 0.0 &&
        m[15] === 1.0
    }

    return this._isIdentity
  }

  /**
   * Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)
   * @returns true is the matrix is the identity matrix
   */
  public isIdentityAs3x2(): boolean {
    if (this._isIdentity3x2Dirty) {
      this._isIdentity3x2Dirty = false
      if (this._m[0] !== 1.0 || this._m[5] !== 1.0 || this._m[15] !== 1.0) {
        this._isIdentity3x2 = false
      } else if (
        this._m[1] !== 0.0 ||
        this._m[2] !== 0.0 ||
        this._m[3] !== 0.0 ||
        this._m[4] !== 0.0 ||
        this._m[6] !== 0.0 ||
        this._m[7] !== 0.0 ||
        this._m[8] !== 0.0 ||
        this._m[9] !== 0.0 ||
        this._m[10] !== 0.0 ||
        this._m[11] !== 0.0 ||
        this._m[12] !== 0.0 ||
        this._m[13] !== 0.0 ||
        this._m[14] !== 0.0
      ) {
        this._isIdentity3x2 = false
      } else {
        this._isIdentity3x2 = true
      }
    }

    return this._isIdentity3x2
  }

  /**
   * Gets the determinant of the matrix
   * @returns the matrix determinant
   */
  public determinant(): number {
    if (this._isIdentity === true) {
      return 1
    }

    const m = this._m
    // tslint:disable-next-line:one-variable-per-declaration
    const m00 = m[0],
      m01 = m[1],
      m02 = m[2],
      m03 = m[3]
    // tslint:disable-next-line:one-variable-per-declaration
    const m10 = m[4],
      m11 = m[5],
      m12 = m[6],
      m13 = m[7]
    // tslint:disable-next-line:one-variable-per-declaration
    const m20 = m[8],
      m21 = m[9],
      m22 = m[10],
      m23 = m[11]
    // tslint:disable-next-line:one-variable-per-declaration
    const m30 = m[12],
      m31 = m[13],
      m32 = m[14],
      m33 = m[15]
    /*
    // https://en.wikipedia.org/wiki/Laplace_expansion
    // to compute the deterrminant of a 4x4 Matrix we compute the cofactors of any row or column,
    // then we multiply each Cofactor by its corresponding matrix value and sum them all to get the determinant
    // Cofactor(i, j) = sign(i,j) * det(Minor(i, j))
    // where
    //  - sign(i,j) = (i+j) % 2 === 0 ? 1 : -1
    //  - Minor(i, j) is the 3x3 matrix we get by removing row i and column j from current Matrix
    //
    // Here we do that for the 1st row.
    */

    // tslint:disable:variable-name
    const det_22_33 = m22 * m33 - m32 * m23
    const det_21_33 = m21 * m33 - m31 * m23
    const det_21_32 = m21 * m32 - m31 * m22
    const det_20_33 = m20 * m33 - m30 * m23
    const det_20_32 = m20 * m32 - m22 * m30
    const det_20_31 = m20 * m31 - m30 * m21
    const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32)
    const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32)
    const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31)
    const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31)
    // tslint:enable:variable-name
    return m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03
  }

  // Methods

  /**
   * Returns the matrix as a FloatArray
   * @returns the matrix underlying array
   */
  public toArray(): Readonly<FloatArray> {
    return this._m
  }
  /**
   * Returns the matrix as a FloatArray
   * @returns the matrix underlying array.
   */
  public asArray(): Readonly<FloatArray> {
    return this._m
  }

  /**
   * Inverts the current matrix in place
   * @returns the current inverted matrix
   */
  public invert(): Matrix {
    this.invertToRef(this)
    return this
  }
  /**
   * Sets all the matrix elements to zero
   * @returns the current matrix
   */
  public reset(): Matrix {
    Matrix.FromValuesToRef(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, this)
    this._updateIdentityStatus(false)
    return this
  }

  /**
   * Adds the current matrix with a second one
   * @param other - defines the matrix to add
   * @returns a new matrix as the addition of the current matrix and the given one
   */
  public add(other: Matrix): Matrix {
    let result = new Matrix()
    this.addToRef(other, result)
    return result
  }

  /**
   * Sets the given matrix "result" to the addition of the current matrix and the given one
   * @param other - defines the matrix to add
   * @param result - defines the target matrix
   * @returns the current matrix
   */
  public addToRef(other: Matrix, result: Matrix): Matrix {
    for (let index = 0; index < 16; index++) {
      result._m[index] = this._m[index] + other._m[index]
    }
    result._markAsUpdated()
    return this
  }

  /**
   * Adds in place the given matrix to the current matrix
   * @param other - defines the second operand
   * @returns the current updated matrix
   */
  public addToSelf(other: Matrix): Matrix {
    for (let index = 0; index < 16; index++) {
      this._m[index] += other._m[index]
    }
    this._markAsUpdated()
    return this
  }

  /**
   * Sets the given matrix to the current inverted Matrix
   * @param other - defines the target matrix
   * @returns the unmodified current matrix
   */
  public invertToRef(other: Matrix): Matrix {
    if (this._isIdentity === true) {
      Matrix.IdentityToRef(other)
      return this
    }

    // the inverse of a Matrix is the transpose of cofactor matrix divided by the determinant
    const m = this._m
    // tslint:disable:one-variable-per-declaration
    const m00 = m[0],
      m01 = m[1],
      m02 = m[2],
      m03 = m[3]
    const m10 = m[4],
      m11 = m[5],
      m12 = m[6],
      m13 = m[7]
    const m20 = m[8],
      m21 = m[9],
      m22 = m[10],
      m23 = m[11]
    const m30 = m[12],
      m31 = m[13],
      m32 = m[14],
      m33 = m[15]
    // tslint:enable:one-variable-per-declaration

    // tslint:disable:variable-name
    const det_22_33 = m22 * m33 - m32 * m23
    const det_21_33 = m21 * m33 - m31 * m23
    const det_21_32 = m21 * m32 - m31 * m22
    const det_20_33 = m20 * m33 - m30 * m23
    const det_20_32 = m20 * m32 - m22 * m30
    const det_20_31 = m20 * m31 - m30 * m21

    const cofact_00 = +(m11 * det_22_33 - m12 * det_21_33 + m13 * det_21_32)
    const cofact_01 = -(m10 * det_22_33 - m12 * det_20_33 + m13 * det_20_32)
    const cofact_02 = +(m10 * det_21_33 - m11 * det_20_33 + m13 * det_20_31)
    const cofact_03 = -(m10 * det_21_32 - m11 * det_20_32 + m12 * det_20_31)

    const det = m00 * cofact_00 + m01 * cofact_01 + m02 * cofact_02 + m03 * cofact_03

    if (det === 0) {
      // not invertible
      other.copyFrom(this)
      return this
    }

    const detInv = 1 / det
    const det_12_33 = m12 * m33 - m32 * m13
    const det_11_33 = m11 * m33 - m31 * m13
    const det_11_32 = m11 * m32 - m31 * m12
    const det_10_33 = m10 * m33 - m30 * m13
    const det_10_32 = m10 * m32 - m30 * m12
    const det_10_31 = m10 * m31 - m30 * m11
    const det_12_23 = m12 * m23 - m22 * m13
    const det_11_23 = m11 * m23 - m21 * m13
    const det_11_22 = m11 * m22 - m21 * m12
    const det_10_23 = m10 * m23 - m20 * m13
    const det_10_22 = m10 * m22 - m20 * m12
    const det_10_21 = m10 * m21 - m20 * m11

    const cofact_10 = -(m01 * det_22_33 - m02 * det_21_33 + m03 * det_21_32)
    const cofact_11 = +(m00 * det_22_33 - m02 * det_20_33 + m03 * det_20_32)
    const cofact_12 = -(m00 * det_21_33 - m01 * det_20_33 + m03 * det_20_31)
    const cofact_13 = +(m00 * det_21_32 - m01 * det_20_32 + m02 * det_20_31)

    const cofact_20 = +(m01 * det_12_33 - m02 * det_11_33 + m03 * det_11_32)
    const cofact_21 = -(m00 * det_12_33 - m02 * det_10_33 + m03 * det_10_32)
    const cofact_22 = +(m00 * det_11_33 - m01 * det_10_33 + m03 * det_10_31)
    const cofact_23 = -(m00 * det_11_32 - m01 * det_10_32 + m02 * det_10_31)

    const cofact_30 = -(m01 * det_12_23 - m02 * det_11_23 + m03 * det_11_22)
    const cofact_31 = +(m00 * det_12_23 - m02 * det_10_23 + m03 * det_10_22)
    const cofact_32 = -(m00 * det_11_23 - m01 * det_10_23 + m03 * det_10_21)
    const cofact_33 = +(m00 * det_11_22 - m01 * det_10_22 + m02 * det_10_21)

    Matrix.FromValuesToRef(
      cofact_00 * detInv,
      cofact_10 * detInv,
      cofact_20 * detInv,
      cofact_30 * detInv,
      cofact_01 * detInv,
      cofact_11 * detInv,
      cofact_21 * detInv,
      cofact_31 * detInv,
      cofact_02 * detInv,
      cofact_12 * detInv,
      cofact_22 * detInv,
      cofact_32 * detInv,
      cofact_03 * detInv,
      cofact_13 * detInv,
      cofact_23 * detInv,
      cofact_33 * detInv,
      other
    )
    // tslint:enable:variable-name

    return this
  }

  /**
   * add a value at the specified position in the current Matrix
   * @param index - the index of the value within the matrix. between 0 and 15.
   * @param value - the value to be added
   * @returns the current updated matrix
   */
  public addAtIndex(index: number, value: number): Matrix {
    this._m[index] += value
    this._markAsUpdated()
    return this
  }

  /**
   * mutiply the specified position in the current Matrix by a value
   * @param index - the index of the value within the matrix. between 0 and 15.
   * @param value - the value to be added
   * @returns the current updated matrix
   */
  public multiplyAtIndex(index: number, value: number): Matrix {
    this._m[index] *= value
    this._markAsUpdated()
    return this
  }

  /**
   * Inserts the translation vector (using 3 floats) in the current matrix
   * @param x - defines the 1st component of the translation
   * @param y - defines the 2nd component of the translation
   * @param z - defines the 3rd component of the translation
   * @returns the current updated matrix
   */
  public setTranslationFromFloats(x: number, y: number, z: number): Matrix {
    this._m[12] = x
    this._m[13] = y
    this._m[14] = z
    this._markAsUpdated()
    return this
  }

  /**
   * Inserts the translation vector in the current matrix
   * @param vector3 - defines the translation to insert
   * @returns the current updated matrix
   */
  public setTranslation(vector3: MVector3): Matrix {
    return this.setTranslationFromFloats(vector3.x, vector3.y, vector3.z)
  }

  /**
   * Gets the translation value of the current matrix
   * @returns a new Vector3 as the extracted translation from the matrix
   */
  public getTranslation(): MVector3 {
    return new MVector3(this._m[12], this._m[13], this._m[14])
  }

  /**
   * Fill a Vector3 with the extracted translation from the matrix
   * @param result - defines the Vector3 where to store the translation
   * @returns the current matrix
   */
  public getTranslationToRef(result: MVector3): Matrix {
    result.x = this._m[12]
    result.y = this._m[13]
    result.z = this._m[14]
    return this
  }

  /**
   * Remove rotation and scaling part from the matrix
   * @returns the updated matrix
   */
  public removeRotationAndScaling(): Matrix {
    const m = this.m
    Matrix.FromValuesToRef(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, m[12], m[13], m[14], m[15], this)
    this._updateIdentityStatus(m[12] === 0 && m[13] === 0 && m[14] === 0 && m[15] === 1)
    return this
  }

  /**
   * Multiply two matrices
   * @param other - defines the second operand
   * @returns a new matrix set with the multiplication result of the current Matrix and the given one
   */
  public multiply(other: Readonly<Matrix>): Matrix {
    let result = new Matrix()
    this.multiplyToRef(other, result)
    return result
  }

  /**
   * Copy the current matrix from the given one
   * @param other - defines the source matrix
   * @returns the current updated matrix
   */
  public copyFrom(other: Readonly<Matrix>): Matrix {
    other.copyToArray(this._m)
    const o = other as Matrix
    this._updateIdentityStatus(o._isIdentity, o._isIdentityDirty, o._isIdentity3x2, o._isIdentity3x2Dirty)
    return this
  }

  /**
   * Populates the given array from the starting index with the current matrix values
   * @param array - defines the target array
   * @param offset - defines the offset in the target array where to start storing values
   * @returns the current matrix
   */
  public copyToArray(array: FloatArray, offset: number = 0): Matrix {
    for (let index = 0; index < 16; index++) {
      array[offset + index] = this._m[index]
    }
    return this
  }

  /**
   * Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
   * @param other - defines the second operand
   * @param result - defines the matrix where to store the multiplication
   * @returns the current matrix
   */
  public multiplyToRef(other: Readonly<Matrix>, result: Matrix): Matrix {
    if (this._isIdentity) {
      result.copyFrom(other)
      return this
    }
    if ((other as Matrix)._isIdentity) {
      result.copyFrom(this)
      return this
    }

    this.multiplyToArray(other, result._m, 0)
    result._markAsUpdated()
    return this
  }

  /**
   * Sets the FloatArray "result" from the given index "offset" with the multiplication of the current matrix and the given one
   * @param other - defines the second operand
   * @param result - defines the array where to store the multiplication
   * @param offset - defines the offset in the target array where to start storing values
   * @returns the current matrix
   */
  public multiplyToArray(other: Readonly<Matrix>, result: FloatArray, offset: number): Matrix {
    const m = this._m
    const otherM = other.m

    // tslint:disable:one-variable-per-declaration
    let tm0 = m[0],
      tm1 = m[1],
      tm2 = m[2],
      tm3 = m[3]
    let tm4 = m[4],
      tm5 = m[5],
      tm6 = m[6],
      tm7 = m[7]
    let tm8 = m[8],
      tm9 = m[9],
      tm10 = m[10],
      tm11 = m[11]
    let tm12 = m[12],
      tm13 = m[13],
      tm14 = m[14],
      tm15 = m[15]

    let om0 = otherM[0],
      om1 = otherM[1],
      om2 = otherM[2],
      om3 = otherM[3]
    let om4 = otherM[4],
      om5 = otherM[5],
      om6 = otherM[6],
      om7 = otherM[7]
    let om8 = otherM[8],
      om9 = otherM[9],
      om10 = otherM[10],
      om11 = otherM[11]
    let om12 = otherM[12],
      om13 = otherM[13],
      om14 = otherM[14],
      om15 = otherM[15]
    // tslint:enable:one-variable-per-declaration
    result[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12
    result[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13
    result[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14
    result[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15

    result[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12
    result[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13
    result[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14
    result[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15

    result[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12
    result[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13
    result[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14
    result[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15

    result[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12
    result[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13
    result[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14
    result[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15
    return this
  }

  /**
   * Check equality between this matrix and a second one
   * @param value - defines the second matrix to compare
   * @returns true is the current matrix and the given one values are strictly equal
   */
  public equals(value: Matrix): boolean {
    const other = value
    if (!other) {
      return false
    }

    if (this._isIdentity || other._isIdentity) {
      if (!this._isIdentityDirty && !other._isIdentityDirty) {
        return this._isIdentity && other._isIdentity
      }
    }

    const m = this.m
    const om = other.m
    return (
      m[0] === om[0] &&
      m[1] === om[1] &&
      m[2] === om[2] &&
      m[3] === om[3] &&
      m[4] === om[4] &&
      m[5] === om[5] &&
      m[6] === om[6] &&
      m[7] === om[7] &&
      m[8] === om[8] &&
      m[9] === om[9] &&
      m[10] === om[10] &&
      m[11] === om[11] &&
      m[12] === om[12] &&
      m[13] === om[13] &&
      m[14] === om[14] &&
      m[15] === om[15]
    )
  }

  /**
   * Clone the current matrix
   * @returns a new matrix from the current matrix
   */
  public clone(): Matrix {
    const matrix = new Matrix()
    matrix.copyFrom(this)
    return matrix
  }

  /**
   * Returns the name of the current matrix class
   * @returns the string "Matrix"
   */
  public getClassName(): string {
    return 'Matrix'
  }

  /**
   * Gets the hash code of the current matrix
   * @returns the hash code
   */
  public getHashCode(): number {
    let hash = this._m[0] || 0
    for (let i = 1; i < 16; i++) {
      hash = (hash * 397) ^ (this._m[i] || 0)
    }
    return hash
  }

  /**
   * Decomposes the current Matrix into a translation, rotation and scaling components
   * @param scale - defines the scale vector3 given as a reference to update
   * @param rotation - defines the rotation quaternion given as a reference to update
   * @param translation - defines the translation vector3 given as a reference to update
   * @returns true if operation was successful
   */
  public decompose(scale?: MVector3, rotation?: MQuaternion, translation?: MVector3): boolean {
    if (this._isIdentity) {
      if (translation) {
        translation.setAll(0)
      }
      if (scale) {
        scale.setAll(1)
      }
      if (rotation) {
        rotation.copyFromFloats(0, 0, 0, 1)
      }
      return true
    }

    const m = this._m
    if (translation) {
      translation.copyFromFloats(m[12], m[13], m[14])
    }

    const usedScale = scale || MathTmp.Vector3[0]
    usedScale.x = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2])
    usedScale.y = Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6])
    usedScale.z = Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10])

    if (this.determinant() <= 0) {
      usedScale.y *= -1
    }

    if (usedScale.x === 0 || usedScale.y === 0 || usedScale.z === 0) {
      if (rotation) {
        rotation.copyFromFloats(0.0, 0.0, 0.0, 1.0)
      }
      return false
    }

    if (rotation) {
      // tslint:disable-next-line:one-variable-per-declaration
      const sx = 1 / usedScale.x,
        sy = 1 / usedScale.y,
        sz = 1 / usedScale.z
      Matrix.FromValuesToRef(
        m[0] * sx,
        m[1] * sx,
        m[2] * sx,
        0.0,
        m[4] * sy,
        m[5] * sy,
        m[6] * sy,
        0.0,
        m[8] * sz,
        m[9] * sz,
        m[10] * sz,
        0.0,
        0.0,
        0.0,
        0.0,
        1.0,
        MathTmp.Matrix[0]
      )

      MQuaternion.FromRotationMatrixToRef(MathTmp.Matrix[0], rotation)
    }

    return true
  }

  /**
   * Gets specific row of the matrix
   * @param index - defines the number of the row to get
   * @returns the index-th row of the current matrix as a new Vector4
   */
  public getRow(index: number): Nullable<MVector4> {
    if (index < 0 || index > 3) {
      return null
    }
    let i = index * 4
    return new MVector4(this._m[i + 0], this._m[i + 1], this._m[i + 2], this._m[i + 3])
  }

  /**
   * Sets the index-th row of the current matrix to the vector4 values
   * @param index - defines the number of the row to set
   * @param row - defines the target vector4
   * @returns the updated current matrix
   */
  public setRow(index: number, row: MVector4): Matrix {
    return this.setRowFromFloats(index, row.x, row.y, row.z, row.w)
  }

  /**
   * Compute the transpose of the matrix
   * @returns the new transposed matrix
   */
  public transpose(): Matrix {
    return Matrix.Transpose(this)
  }

  /**
   * Compute the transpose of the matrix and store it in a given matrix
   * @param result - defines the target matrix
   * @returns the current matrix
   */
  public transposeToRef(result: Matrix): Matrix {
    Matrix.TransposeToRef(this, result)
    return this
  }

  /**
   * Sets the index-th row of the current matrix with the given 4 x float values
   * @param index - defines the row index
   * @param x - defines the x component to set
   * @param y - defines the y component to set
   * @param z - defines the z component to set
   * @param w - defines the w component to set
   * @returns the updated current matrix
   */
  public setRowFromFloats(index: number, x: number, y: number, z: number, w: number): Matrix {
    if (index < 0 || index > 3) {
      return this
    }
    let i = index * 4
    this._m[i + 0] = x
    this._m[i + 1] = y
    this._m[i + 2] = z
    this._m[i + 3] = w

    this._markAsUpdated()
    return this
  }

  /**
   * Compute a new matrix set with the current matrix values multiplied by scale (float)
   * @param scale - defines the scale factor
   * @returns a new matrix
   */
  public scale(scale: number): Matrix {
    let result = new Matrix()
    this.scaleToRef(scale, result)
    return result
  }

  /**
   * Scale the current matrix values by a factor to a given result matrix
   * @param scale - defines the scale factor
   * @param result - defines the matrix to store the result
   * @returns the current matrix
   */
  public scaleToRef(scale: number, result: Matrix): Matrix {
    for (let index = 0; index < 16; index++) {
      result._m[index] = this._m[index] * scale
    }
    result._markAsUpdated()
    return this
  }

  /**
   * Scale the current matrix values by a factor and add the result to a given matrix
   * @param scale - defines the scale factor
   * @param result - defines the Matrix to store the result
   * @returns the current matrix
   */
  public scaleAndAddToRef(scale: number, result: Matrix): Matrix {
    for (let index = 0; index < 16; index++) {
      result._m[index] += this._m[index] * scale
    }
    result._markAsUpdated()
    return this
  }

  /**
   * Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
   * @param ref - matrix to store the result
   */
  public toNormalMatrix(ref: Matrix): void {
    const tmp = MathTmp.Matrix[0]
    this.invertToRef(tmp)
    tmp.transposeToRef(ref)
    let m = ref._m
    Matrix.FromValuesToRef(
      m[0],
      m[1],
      m[2],
      0.0,
      m[4],
      m[5],
      m[6],
      0.0,
      m[8],
      m[9],
      m[10],
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      ref
    )
  }

  /**
   * Gets only rotation part of the current matrix
   * @returns a new matrix sets to the extracted rotation matrix from the current one
   */
  public getRotationMatrix(): Matrix {
    let result = new Matrix()
    this.getRotationMatrixToRef(result)
    return result
  }

  /**
   * Extracts the rotation matrix from the current one and sets it as the given "result"
   * @param result - defines the target matrix to store data to
   * @returns the current matrix
   */
  public getRotationMatrixToRef(result: Matrix): Matrix {
    const scale = MathTmp.Vector3[0]
    if (!this.decompose(scale)) {
      Matrix.IdentityToRef(result)
      return this
    }

    const m = this._m
    // tslint:disable-next-line:one-variable-per-declaration
    const sx = 1 / scale.x,
      sy = 1 / scale.y,
      sz = 1 / scale.z
    Matrix.FromValuesToRef(
      m[0] * sx,
      m[1] * sx,
      m[2] * sx,
      0.0,
      m[4] * sy,
      m[5] * sy,
      m[6] * sy,
      0.0,
      m[8] * sz,
      m[9] * sz,
      m[10] * sz,
      0.0,
      0.0,
      0.0,
      0.0,
      1.0,
      result
    )
    return this
  }

  /**
   * Toggles model matrix from being right handed to left handed in place and vice versa
   */
  public toggleModelMatrixHandInPlace() {
    const m = this._m
    m[2] *= -1
    m[6] *= -1
    m[8] *= -1
    m[9] *= -1
    m[14] *= -1
    this._markAsUpdated()
  }

  /**
   * Toggles projection matrix from being right handed to left handed in place and vice versa
   */
  public toggleProjectionMatrixHandInPlace() {
    let m = this._m
    m[8] *= -1
    m[9] *= -1
    m[10] *= -1
    m[11] *= -1
    this._markAsUpdated()
  }

  /** @internal */
  private _updateIdentityStatus(
    isIdentity: boolean,
    isIdentityDirty: boolean = false,
    isIdentity3x2: boolean = false,
    isIdentity3x2Dirty: boolean = true
  ) {
    this.updateFlag = Matrix._updateFlagSeed++
    this._isIdentity = isIdentity
    this._isIdentity3x2 = isIdentity || isIdentity3x2
    this._isIdentityDirty = this._isIdentity ? false : isIdentityDirty
    this._isIdentity3x2Dirty = this._isIdentity3x2 ? false : isIdentity3x2Dirty
  }
}

// Temporary pre-allocated objects for engine internal use
// usage in any internal function :
// var tmp = Tmp.Vector3[0];   <= gets access to the first pre-created Vector3
// There's a Tmp array per object type : int, float, Vector2, Vector3, Vector4, Quaternion, Matrix

export const MathTmp = {
  Vector3: buildArray(6, MVector3.Zero),
  Matrix: buildArray(2, Matrix.Identity),
  Quaternion: buildArray(3, MQuaternion.Zero),
  staticUp: MVector3.Up() as Readonly<MVector3>,
  tmpMatrix: Matrix.Zero()
}
