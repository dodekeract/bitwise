import { Bit, Bits } from '../types'

/**
 * Applies the NAND operation, expects two arrays of the same size and returns a new one.
 *
 * @example
 * nand([1,0,0,0,1,1,0,1], [0,1,1,0,0,1,0,0]) => [1,1,1,1,1,0,1,1]
 *
 * @param {Array} bits1 input data
 * @param {Array} bits2 input data
 * @return {Array} [bits1 NAND bits2]
 */
export default (bits1: Bits, bits2: Bits): Bits => {
	const result: Bits = []

	for (let i: number = 0; i < bits1.length; i++)
		result[i] = <Bit>((bits1[i] & bits2[i]) ^ 1)

	return result
}
