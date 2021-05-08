import { createInitialFormState } from './createInitialFormState'
import { photoFormProperties } from '../../constants/photoForm'
import { PhotoFormState } from '@types'

describe('Photo form - create initial form state', () => {
	test('returns the initial state correctly', () => {
		const result: PhotoFormState = createInitialFormState({ formProperties: photoFormProperties })

		expect(result.height).toBe('300px')
		expect(result.width).toBe('300px')
		expect(result.imagePosition).toBe('center')
		expect(result.name).toBe('')
	})
})