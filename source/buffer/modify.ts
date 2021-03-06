import { Bits, Byte } from '../types'
import writeByte from '../byte/write'
import readBuffer from './read'

/**
 * Modifies the buffer's bits to equal newBits starting at bitOffset.
 *
 * @example
 * modifyBuffer(buffer, [0,0,1,0], 0) => buffer was modified
 *
 * @param {Buffer} buffer the buffer to modify
 * @param {Array} bits the bits to insert
 * @param {Number} offset where to start (in bits)
 * @returns {undefined}
 */
export default (buffer: Buffer, bits: Bits, offset: number = 0): void => {
	const start: number = Math.floor(offset / 8)
	const end: number = Math.ceil((offset + bits.length) / 8)
	const subBuffer: Buffer = buffer.slice(start, end)

	const byteData: Bits = readBuffer(subBuffer)

	let subOffset = offset % 8

	for (var i = 0; i < bits.length; i++) byteData[subOffset++] = bits[i]

	const length = end - start
	for (let i = 0; i < length; i++)
		subBuffer[i] = writeByte(<Byte>byteData.slice(i * 8, (i + 1) * 8))
}
