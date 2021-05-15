import { PhotoPrisma, Photo as IPhoto } from '@types'

class PhotoMapper {
	constructor() {}

	fromPrisma(photo: PhotoPrisma): IPhoto {
		return {
			name: photo.name,
			height: photo.height,
			width: photo.width,
			url: photo.url,
			imagePosition: photo.image_position,
			adjustmentView: photo.adjustment_view,
			photoOrientation: photo.photo_orientation
		}
	}
}

export const photoMapper = new PhotoMapper()