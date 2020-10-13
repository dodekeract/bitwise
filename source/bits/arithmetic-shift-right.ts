import { Bit, Bits } from '../types'

/**
 * Arithmetic Shift Right
 *
 * @example
 * ashiftr([1,0,1,1,0,1]) => [0,1,1,0,1,0]
 *
 * @param {Array} bits input data
 * @return {Array} [ASHIFTR bits]
 */
export default (bits: Bits): Bits => {
    const result: Bits = []

    for (let i: number = 1; i < bits.length; i++) result.push(bits[i])
    result.push(<Bit>0)

    return result
}