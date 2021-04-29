import cloudinary from '@lib/cloudinary'

export const postPhoto = async (filesObj, fileName: string) => {
	const filesValues = Object.values(filesObj)
	const promises = filesValues.map(image => cloudinary.uploader.upload(image.path, {
    folder: 'photo_app',
    public_id: fileName
  }))
  
  const uploadedFiles = await Promise.all(promises)
	return true
}