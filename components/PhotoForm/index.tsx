import React, { useContext } from 'react'
import { useMutation } from 'react-query'
import { useForm, useRenderForm } from '@hooks'
import { uploadPhotoRequest } from '@request'
import { Button } from '@components/Button'
import { photoFormProperties } from 'constants/photoForm'
import { PhotoFormState } from '@types'
import { createInitialFormState } from './createInitialFormState'
import ModalContext from 'context/modalCtx'

const formInitialState: PhotoFormState = createInitialFormState<PhotoFormState>({formProperties: photoFormProperties})

export const PhotoForm = () => {
	const { formState, setFormState, handleChangeFile, handleChange} = useForm<PhotoFormState>({ initialState: formInitialState })
	const { closeModal } = useContext(ModalContext)
	const renderForm = useRenderForm()

	const mutation = useMutation(async ({ formData }: { formData: FormData } ) => {
		const response = await uploadPhotoRequest({ formData })
		return response.data
	}, {
		onSuccess: () => {
			closeModal()
		}
	})

	const handleSubmit = async () => {
		const formData = new FormData()

		Array.from(formState.theFiles).forEach((file: any) => {
      formData.append('theFiles', file)
    })

		formData.set('name', formState.name)
		mutation.mutate({ formData })
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
		<div className='grid max-h-full' style={{ gridTemplateRows: 'auto 1fr auto'}}>
			<h2 className="m-4">Photo form</h2>
			<div className='column flex-grow p-4 lg:p-8 overflow-y-auto'>
					<div className="py-2">
						<div className="mb-6">
							<input type="file" name="theFiles" onChange={handleFileAndSaveName} />
						</div>
					
						{photoFormProperties.map(property => renderForm[property.type]({
							...property,
							value: formState[property.name],
							handleChange: handleChange
						}))}
					</div>
			</div>
			<div className="w-full lg:w-2/3 flex justify-between mx-auto mt-4">
				<Button variant="secondary" handleClick={closeModal}>Close</Button>
				<Button handleClick={handleSubmit} disabled={!formState.theFiles || formState.name === ''}>Upload</Button>
				</div>
		</div>
	)
}