import React from 'react'
import { useMutation } from 'react-query'
import { useForm } from '@hooks'
import { uploadPhotoRequest } from '@request'
import { Button } from '@components/Button'

interface PhotoForm {
	theFiles: any
	name: string
}

const formInitialState: PhotoForm = {
	theFiles: [],
	name: 'dsa'
}

export const PhotoForm = () => {
	const { formState, handleChangeFile, handleChange} = useForm<PhotoForm>({ initialState: formInitialState })
	
	const mutation = useMutation(async ({ formData }: { formData: FormData } ) => {
		const response = await uploadPhotoRequest({ formData })
		return response.data;
	})

	const handleSubmit = async () => {
		const formData = new FormData();

		Array.from(formState.theFiles).forEach((file: any) => {
      formData.append('theFiles', file);
    });

		mutation.mutate({ formData })
	}

	return (
		<div className='column justify-between h-full'>
			<h3>Photo form</h3>
			<div className='column flex-grow p-8'>
					<input type="file" name="theFiles" onChange={handleChangeFile} />
					<input type="text" name="name" onChange={handleChange} value={formState.name} />

					<Button handleClick={handleSubmit}>Upload</Button>
			</div>
		</div>
	)
}