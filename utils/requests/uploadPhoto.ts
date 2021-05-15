import axios from 'axios'

export const uploadPhotoRequest = async ({ formData }: { formData: FormData}) => {
	const config = {
		headers: { 'content-type': 'multipart/form-data' }
	};
	return await axios.post('/api/photos/upload', formData, config);
}