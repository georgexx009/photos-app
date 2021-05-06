import React from 'react'

type DefaultInputProps = JSX.IntrinsicElements['input'];

interface InputProps extends DefaultInputProps {
	value: string;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, handleChange, ...restProps }: InputProps) => {
	return <input value={value} onChange={handleChange} {...restProps} />
}