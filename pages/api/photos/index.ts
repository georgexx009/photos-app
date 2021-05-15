import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, Photo } from '@types'
import { PhotoService } from '@services'

export default async (req: NextApiRequest, res: NextApiResponse<ApiResponse<Photo[]>>) => {
	const photoService = new PhotoService()
	const photoList = await photoService.getPhotos()
	
	res.send({
		data: photoList
	})
}