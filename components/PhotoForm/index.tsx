import React from 'react'
import { useMutation } from 'react-query'
import { useForm } from '@hooks'
import { uploadPhotoRequest } from '@request'
import { Button } from '@components/Button'
import { Dropdown } from '@components/Dropdown'
import { photoFormProperties } from 'constants/photoForm'
import { renderForm } from './renderForm'
import { PhotoFormState } from '@types'
import { createInitialFormState } from './createInitialFormState'

const formInitialState: PhotoFormState = createInitialFormState<PhotoFormState>({formProperties: photoFormProperties})

export const PhotoForm = () => {
	const { formState, setFormState, handleChangeFile, handleChange} = useForm<PhotoFormState>({ initialState: formInitialState })
	
	const mutation = useMutation(async ({ formData }: { formData: FormData } ) => {
		const response = await uploadPhotoRequest({ formData })
		return response.data;
	})

	const handleSubmit = async () => {
		const formData = new FormData();

		Array.from(formState.theFiles).forEach((file: any) => {
      formData.append('theFiles', file);
    });

		formData.set('name', formState.name);
		console.log(formState)

		// mutation.mutate({ formData })
	}

	const handleFileAndSaveName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const photoName = event.target.files[0].name
		setFormState(prevState => ({
			...prevState,
			name: photoName
		}))
		handleChangeFile(event)
	}

	return (
		<div className='column justify-between h-full'>
			<h3>Photo form</h3>
			<div className='column flex-grow p-8'>
					<input type="file" name="theFiles" onChange={handleFileAndSaveName} />
					<input type="text" name="name" onChange={handleChange} value={formState.name} />

					{photoFormProperties.map(property => renderForm[property.type]({
						...property,
						value: formState[property.name],
						handleChange: handleChange
					}))}

					<Button handleClick={handleSubmit}>Upload</Button>
			</div>
		</div>
	)
}