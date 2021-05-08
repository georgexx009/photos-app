import { PhotoForm } from "@types";

export const createInitialFormState = <T>({ formProperties }: { formProperties: PhotoForm[] }): T => {
	const initialFormState = formProperties.reduce<T>((formState, property) => {
		return {
			...formState,
			[property.name]: property?.defaultValue ?? ''
		}
	}, {} as T)

	return initialFormState
}