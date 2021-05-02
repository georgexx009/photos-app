import { Cloudinary } from '@services/cloudinary'
import { Multer } from '@lib/multer'
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import { ApiResponse, File, CloudinaryRes, PhotoMetaData } from '@types'

interface NextConnectApiRequest extends NextApiRequest {
  files: File[],
  body: PhotoMetaData
}
type ResponseData = ApiResponse<CloudinaryRes['UploadSuccess']>;

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

apiRoute.use(uploadMulter.saveMultipleFiles('theFiles'));

apiRoute.post(async (req: NextConnectApiRequest, res: NextApiResponse<ResponseData>) => {
	const cloudinaryRes = await cloudinary.uploadFiles({ files: req.files, name: req.body.name });

  res.status(200).json({ data: cloudinaryRes[0] });
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default apiRoute;
