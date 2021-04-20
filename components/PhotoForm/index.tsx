import React from 'react'
import { useMutation, useQuery } from 'react-query'

import { useForm } from '@hooks'
import { Button } from '@components/Button'

interface PhotoForm {
	photoFile: any
	name: string
}

const formInitialState: PhotoForm = {
	photoFile: [],
	name: ''
}

// http://locahost/3000/api/photos

export const PhotoForm = () => {
	const { formState, handleChangeFile, handleChange} = useForm<PhotoForm>({ initialState: formInitialState })
	const mutation = useMutation((data: PhotoForm) => {
		return fetch('http://localhost:3000/api/photos', {
			method: 'POST',
			body: data as unknown as BodyInit
		})
	})

	// const { status, data, isLoading } = useQuery('testQuery', () => fetch('http://localhost:3000/api/hello'))



	const handleSubmit = async () => {
		console.log(formState)
		mutation.mutate(formState)
	}

	return (
		<div className='column justify-between h-full'>
			<h3>Photo form</h3>
			<div className='column flex-grow p-8'>
				<input type="file" name="photoFile" onChange={handleChangeFile} />
				<input type="text" name="name" onChange={handleChange} value={formState.name} />

				<Button handleClick={handleSubmit}>Upload</Button>
			</div>
		</div>
	)
}