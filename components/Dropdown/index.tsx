import React, { useState, ChangeEvent } from 'react';
import { createOptions } from './createOptions';
import { DropdownProps } from './types';

export const Dropdown = ({ options, handleChange, value, name }: DropdownProps) => {	 
	return (
		<select value={value} onChange={handleChange} name={name} className="form-select mt-1 block w-full select-border">
			{createOptions(options)}
		</select>
	)
}