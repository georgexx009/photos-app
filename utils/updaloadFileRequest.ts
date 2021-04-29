import axios, { AxiosRequestConfig } from 'axios';
type SuccessfulResponse<T> = { data: T; error?: never; statusCode?: number };
type UnsuccessfulResponse<E> = { data?: never; error: E; statusCode?: number };

type ApiResponse<T, E = unknown> = SuccessfulResponse<T> | UnsuccessfulResponse<E>;

export const uploadFileRequest = async (
  formData: FormData,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string[]>> => {
  const config: AxiosRequestConfig = {
    headers: { 'content-type': 'multipart/form-data' },
    //onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  const response = await axios.post('/api/photos', formData, config);

  return response.data;
};
