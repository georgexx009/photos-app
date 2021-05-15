import cloudinary from '@lib/cloudinary'
import { CloudinaryRes, File } from '@types'

export class Cloudinary {
	private service
	private directoryName = 'photo_app'

	constructor() {
		this.service = cloudinary
	}

	async uploadFiles({ files, name = null }: {files: File[], name?: string}): Promise<CloudinaryRes['UploadSuccess'][]> {
		const values = Object.values(files)
		const promises = values.map(async (image) => {
			const res = await this.service.uploader.upload(image.path, {
				folder: this.directoryName,
				public_id: name ?? image.filename
			})
			return res
		})
		
		return await Promise.all(promises)
	}
}