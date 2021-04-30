import React from 'react'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'

import { useForm } from '@hooks'
import { Button } from '@components/Button'
import { UiFileInputButton } from '@components/InputFile'
import { uploadFileRequest } from 'utils/updaloadFileRequest'

interface PhotoForm {
	theFiles: any
	name: string
}

const formInitialState: PhotoForm = {
	theFiles: [],
	name: 'dsa'
}

// http://locahost/3000/api/photos

export const PhotoForm = () => {
	const { formState, handleChangeFile, handleChange} = useForm<PhotoForm>({ initialState: formInitialState })
	const mutation = useMutation(async ({ formData }: { formData: FormData } ) => {
		const config = {
			headers: { 'content-type': 'multipart/form-data' }
		};
		const response = await axios.post('/api/photos', formData, config);
	
		return response.data;
	})

	const handleSubmit = async () => {
		const formData = new FormData();

		Array.from(formState.theFiles).forEach((file: any) => {
			console.log(file.name, file)
      formData.append('theFiles', file);
    });

		mutation.mutate({ formData })
	}
	
	const onChange = async (formData: FormData) => {
		mutation.mutate({ formData });
  };

	return (
		<div className='column justify-between h-full'>
			<h3>Photo form 2</h3>
			<div className='column flex-grow p-8'>
				<UiFileInputButton label="Upload Single File" uploadFileName="theFiles" onChange={onChange} />
				
					<input type="file" name="theFiles" onChange={handleChangeFile} />
					<input type="text" name="name" onChange={handleChange} value={formState.name} />

					<Button handleClick={handleSubmit}>Upload</Button>
				
			</div>
		</div>
	)
}