import { Photo } from '@types'

export const getPosition = (name: string): number => {
	const finishPosition = name.indexOf('-')
	const positionStr = name.slice(0, finishPosition)

	const parsedNumber = parseInt(positionStr, 10)

	return parsedNumber > 0 ? parsedNumber : null
}

export const filterOrderedPhotos = (photos: Photo[]) => {
	const photosObj = photos.reduce((photoObj, photo) => {
		const position = getPosition(photo.name)
		
		if (!position) return {
			...photoObj
		}

		return {
			...photoObj,
			[position]: photo
		}
	}, {})

	const photoArray = []
	for (const [position, photo] of Object.entries(photosObj)) {
		photoArray[position] = photo
	}

	return photoArray.filter(photo => photo)
}