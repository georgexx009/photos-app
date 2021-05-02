interface UploadSuccess {
	created_at: string,
	format: string,
	original_filename: string,
	url: string,
	width: number,
	height: number
}

export interface CloudinaryRes {
	UploadSuccess: UploadSuccess
}