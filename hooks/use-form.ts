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
		handleChange,
		handleChangeFile
	}
}