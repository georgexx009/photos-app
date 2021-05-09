import React from 'react'
import { Button } from '@components/Button'

interface ModalProps {
	children: React.ReactNode
	handleCloseModal: () => void
}

export const Modal = ({ children, handleCloseModal }: ModalProps) => {
	return (
		<div className='column items-center full-screen bg-black bg-opacity-60 top-0 left-0 p-3 lg:p-8 fixed'>
			<div className='relative my-0 mx-auto w-full md:w-2/3 lg:w-1/2 h-full  bg-white rounded-lg border-gray-300 p-4 lg:p-8'>
				{children}
			</div>
		</div>
	)
}