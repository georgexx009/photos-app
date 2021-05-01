import { Cloudinary } from '@services/cloudinary'
import { Multer } from '@lib/multer'
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import fs from 'fs';
import { ApiResponse } from '@types'

interface NextConnectApiRequest extends NextApiRequest {
  files: any;
}
type ResponseData = ApiResponse<string[], string>;

const uploadMulter = new Multer()
const cloudinary = new Cloudinary()

const apiRoute = nextConnect({
  onError(error, req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    console.log(error.message)
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(uploadMulter.saveMultipleFiles('theFiles'))

apiRoute.post((req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
  const filenames = fs.readdirSync(uploadMulter.outputFolderName);
  const images = filenames.map((name) => name);

	cloudinary.uploadFiles(req.files)

  res.status(200).json({ data: images });
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
