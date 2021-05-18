import React, { useContext } from 'react'
import { useMutation } from 'react-query'
import { useForm, useRenderForm } from '@hooks'
import { uploadPhotoRequest } from '@request'
import { Button, Spinner } from '@components'
import { photoFormProperties } from 'constants/photoForm'
import { PhotoFormState } from '@types'
import { createInitialFormState } from './createInitialFormState'
import ModalContext from 'context/modalCtx'

interface IRes {
	data: any
}

interface IError {
	response: {
		data: {
			error: string
		}
	}
}

const formInitialState: PhotoFormState = createInitialFormState<PhotoFormState>({formProperties: photoFormProperties})

export const PhotoForm = ({ enableUpload = false, handleSubmitSuccess = () => {} }: { enableUpload?: boolean, handleSubmitSuccess?: () => void }) => {
	const { formState, setFormState, handleChangeFile, handleChange} = useForm<PhotoFormState>({ initialState: formInitialState })
	const { closeModal } = useContext(ModalContext)
	const renderForm = useRenderForm()

	const mutation = useMutation(async ({ formData }: { formData: FormData } ) => {
		const response = await uploadPhotoRequest({ formData })
		return response.data
	}, {
		onSuccess: () => {
			closeModal()
			handleSubmitSuccess()
		}
	})

	const handleSubmit = async () => {
		const formData = new FormData()

		Array.from(formState.theFiles).forEach((file: any) => {
      formData.append('theFiles', file)
    })

		for (const [key, value] of Object.entries(formState)){
			if (key !== 'theFiles') {
				formData.set(key, value)
			}
		}

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
			<div className="flex justify-between">
				<h2 className="m-4">Photo form</h2>
				{mutation.isLoading && <Spinner />}
				{mutation.isError && (
					<span className='text-red-500'>{(mutation.error as IError).response.data.error}</span>
				)}
			</div>
			<div className='column flex-grow p-4 lg:p-8 overflow-y-auto overflow-x-hidden'>
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
				{enableUpload && <Button handleClick={handleSubmit} disabled={!formState.theFiles || formState.name === ''}>Upload</Button>}
				</div>
		</div>
	)
}