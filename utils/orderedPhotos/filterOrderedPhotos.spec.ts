import { getPosition } from './filterOrderedPhotos'

describe('filter ordered photos', () => {
	test('get position', () => {
		const result = getPosition('1-fasd')
		expect(result).toBe(1)
	})

	test('get position, big number', () => {
		const result = getPosition('1000-fasd-dsfas')
		expect(result).toBe(1000)
	})

	test('get position, no number', () => {
		const result = getPosition('asd-fasd-dsfas')
		expect(result).toBe(null)
	})
})