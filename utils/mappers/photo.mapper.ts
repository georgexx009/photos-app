import { PhotoPrisma, Photo as IPhoto } from '@types'
import { CLOUDINARY_BASE_URL } from '../../constants/photo-metadata'

class PhotoMapper {
	constructor() {}

	private cleanUrl(photoUrl: string) {
		return photoUrl.replace(CLOUDINARY_BASE_URL, '')
	}

	fromPrisma(photo: PhotoPrisma): IPhoto {
		return {
			id: photo.id,
			name: photo.name,
			height: photo.height,
			width: photo.width,
			url: this.cleanUrl(photo.url),
			imagePosition: photo.image_position,
			adjustmentView: photo.adjustment_view,
			photoOrientation: photo.photo_orientation
		}
	}
}

export const photoMapper = new PhotoMapper()
