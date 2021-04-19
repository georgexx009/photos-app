import { NextApiRequest, NextApiResponse } from 'next'
import { postPhoto } from '@controllers/photo'

export default async (req: NextApiRequest & { files: any }, res: NextApiResponse) => {
  console.log('endpoint hit')
	if (req.method === 'POST') {
		
		const uploaded = await postPhoto(req.files, 'test')
		res.send(uploaded)
	}

	res.status(404).send('endpoint not found')
}