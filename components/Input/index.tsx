import React from 'react'

type DefaultInputProps = JSX.IntrinsicElements['input'];

interface InputProps extends DefaultInputProps {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

export const Input = ({ value, handleChange, name, ...restProps }: InputProps) => {
	return (
		<input
			name={name}
			value={value}
			onChange={handleChange}
			{...restProps}
			className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
		/>
	)
}