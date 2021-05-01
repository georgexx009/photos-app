import multer from 'multer'

export class Multer {
	private oneMegabyteInBytes = 1000000
	outputFolderName = './public/uploads'
	private multer

	constructor() {
		this.multer = multer({
			limits: { fileSize: this.oneMegabyteInBytes * 2 },
			storage: multer.diskStorage({
				destination: this.outputFolderName,
				filename: (req, file, cb) => cb(null, file.originalname),
			}),
		});
	}

	saveMultipleFiles(key: string) {
		return this.multer.array(key)
	}
}