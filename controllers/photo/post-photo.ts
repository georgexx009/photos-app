import cloudinary from '@lib/cloudinary'

export const postPhoto = async (filesObj, fileName: string) => {
	const filesValues = Object.values(filesObj)
	console.log('req file: ', filesObj)
	console.log('file values: ', filesValues)
	// const promises = filesValues.map(image => cloudinary.uploader.upload(image.path, {
  //   folder: 'photo_app',
  //   public_id: fileName
  // }))
  
  // const uploadedFiles = await Promise.all(promises)
	return true
}