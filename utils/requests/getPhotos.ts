import { Photo, ApiResponse } from '@types'
import axios from 'axios'

export const getPhotos = async (): Promise<Photo[]> => {
	const { data } = await axios.get<ApiResponse<Photo[]>>('/api/photos')
	return data.data
}