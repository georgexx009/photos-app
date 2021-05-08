import { ChangeEvent, useState } from 'react'

interface UseFormProps<T> {
	initialState: T
}

export const useForm = <T>({ initialState }: UseFormProps<T>) => {
	const [formState, setFormState] = useState<T>(initialState)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('event: ', event.target.value)
		console.log('name: ', event.target.name)
		setFormState(prevState => ({
			...prevState,
			[event.target.name]: event.target.value
		}))
	}

	const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) {
      return;
    }
		
		setFormState(prevState => ({
			...prevState,
			[event.target.name]: event.target.files
		}))
	}

	return {
		formState,
		setFormState,
		handleChange,
		handleChangeFile
	}
}