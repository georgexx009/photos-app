import prisma from "@lib/prisma"
import { photoMapper } from "@mappers"

export class PhotoService {
	constructor(){}

	async getPhotos() {
		const photos = await prisma.photo.findMany()
		const photosMapped = photos.map(photo => photoMapper.fromPrisma(photo))
		return photosMapped
	}
}