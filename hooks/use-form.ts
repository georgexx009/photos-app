import { ChangeEvent, useState } from 'react'

interface UseFormProps<T> {
	initialState: T
}

export const useForm = <T>({ initialState }: UseFormProps<T>) => {
	const [formState, setFormState] = useState<T>(initialState)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormState(prevState => ({
			...prevState,
			[event.target.name]: event.target.value
		}))
	}

	const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.files)
		setFormState(prevState => ({
			...prevState,
			[event.target.name]: event.target.files
		}))
		console.log('handle finish')
	}

	return {
		formState,
		handleChange,
		handleChangeFile
	}
}