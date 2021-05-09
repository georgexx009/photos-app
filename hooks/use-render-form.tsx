import React from 'react';
import { PhotoForm } from '@types';
import { Select, Input } from '@components'

export const useRenderForm = () => {
	return {
		text: ({
			name,
			label,
			placeholder,
			value,
			handleChange,
			clearBtn
		}: PhotoForm) => (
			<div className="mb-6" key={name}>
				<label
					htmlFor={name}
					className="block mb-2 text-sm text-gray-600"
				>
					{label}
				</label>
				<Input
					type="text"
					name={name}
					placeholder={placeholder}
					value={value}
					handleChange={handleChange}
					clearBtn={clearBtn}
				/>
			</div>
		),
		select: ({
			options,
			value,
			name,
			handleChange,
			label
		}: PhotoForm) => (
			<div className="mb-6" key={name}>
				<label className="block mb-2 text-sm text-gray-600" htmlFor={name}>
					{label}
				</label>
					<Select
						options={options.map(option => ({
							value: option,
							label: option
						}))}
						name={name}
						value={value}
						handleChange={handleChange}
					/>
			</div>
		)
	};
}