import React from 'react'
import styles from './PhotoForm.module.scss'
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

export const PhotoForm = () => {
	const { formState, handleChangeFile, handleChange} = useForm<PhotoForm>({ initialState: formInitialState })

	const handleSubmit = () => {
		console.log(formState)
	}

	return (
		<div className={styles.container}>
			<h3>Photo form</h3>
			<div className={styles.body}>
				<input type="file" name="photoFile" onChange={handleChangeFile} />
				<input type="text" name="name" onChange={handleChange} value={formState.name} />

				<Button handleClick={handleSubmit}>Upload</Button>
			</div>
		</div>
	)
}