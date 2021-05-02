import cloudinary from '@lib/cloudinary'
import { CloudinaryRes } from '@types'

export class Cloudinary {
	private service
	private directoryName = 'photo_app'

	constructor() {
		this.service = cloudinary
	}

	async uploadFiles(files: any): Promise<CloudinaryRes['UploadSuccess'][]> {
		const values = Object.values(files)
		const promises = values.map(async (image: any) => {
			const res = await this.service.uploader.upload(image.path, {
				folder: this.directoryName,
				public_id: 'test'
			})
			return res
		})
		
		return await Promise.all(promises)
	}
}