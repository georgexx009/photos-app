import { useState } from 'react'

export const useToggle = ({ initialState = false }: { initialState?: boolean } = {}) => {
	const [toggleVal, setToggleVal] = useState(initialState)

	const turnOn = () => {
		setToggleVal(true)
	}

	const turnOff = () => {
		setToggleVal(false)
	}

	const swiToggle = () => {
		setToggleVal(prevState => !prevState)
	}

	return {
		toggleVal,
		turnOn,
		turnOff,
		swiToggle
	}
}