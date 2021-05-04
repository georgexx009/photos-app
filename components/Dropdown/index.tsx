import React, { useState, ChangeEvent } from 'react';
import { createOptions } from './createOptions';
import { DropdownProps } from './types';

export const Dropdown = ({ options, setSelected, defaultValue }: DropdownProps) => {	

	const handleOnChange = (value: string) => {
		setSelected(value);
	}

	return (
		<select className="form-select mt-1 block w-full select-border">
			{createOptions(options)}
		</select>
	)
}