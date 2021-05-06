import React from 'react';
import { PhotoForm } from '@types';
import { Dropdown } from '@components/Dropdown';

export const renders = {
  text: ({
    name,
    label,
    placeholder,
    value,
    handleChange
  }: PhotoForm & { register: any }) => (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full text-sm px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
      />
    </div>
  ),
  dropdown: ({
    options,
    value,
    name,
    handleChange,
    label
  }: PhotoForm & { control: any }) => (
    <div className="mb-6">
      <label className="lbl" htmlFor={name}>
        {label}
      </label>
        <Dropdown
          options={options.map(option => ({
            value: option,
            label: option
          }))}
          value={value}
          handleChange={handleChange}
        />
    </div>
  )
};
