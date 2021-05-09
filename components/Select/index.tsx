import React, { useState, ChangeEvent } from 'react';
import { createOptions } from './createOptions';
import { SelectProps } from './types';

export const Select = ({ options, handleChange, value, name }: SelectProps) => {	 
	return (
		<select value={value} onChange={handleChange} name={name} className="form-select mt-1 block w-full select-border focus:outline-none focus:border-gray-900 text-sm px-3 py-2">
			{createOptions(options)}
		</select>
	)
}