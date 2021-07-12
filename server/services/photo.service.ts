import prisma from "@lib/prisma"
import { photoMapper } from "@mappers"
import { filterOrderedPhotos } from 'utils/orderedPhotos/filterOrderedPhotos'

export class PhotoService {
	constructor(){}

	async getPhotos() {
		const photos = await prisma.photo.findMany()
		const photosMapped = photos.map(photo => photoMapper.fromPrisma(photo))
		return photosMapped
	}

	async getOrderedPhotos() {
		const photos = await prisma.photo.findMany()
		const photosMapped = photos.map(photo => photoMapper.fromPrisma(photo))
		const orderedPhotos = filterOrderedPhotos(photosMapped)
		return orderedPhotos
	}
}