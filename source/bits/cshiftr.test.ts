import { Bits } from '../types'
import cshiftr from './cshiftr'

test('CSHIFTR', () => {
    const bits1: Bits = [1, 0, 0, 0, 1, 1, 0, 1]
    const expected1: Bits = [1, 1, 0, 0, 0, 1, 1, 0]
    expect(cshiftr(bits1)).toEqual(expected1)

    const bits2: Bits = [0, 0, 0, 1, 1, 1, 1, 1]
    const expected2: Bits = [1, 0, 0, 0, 1, 1, 1, 1]
    expect(cshiftr(bits2)).toEqual(expected2)
})