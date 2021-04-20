import React from 'react'
import { Button } from '@components/Button'

interface ModalProps {
	children: React.ReactNode
	handleCloseModal: () => void
}

export const Modal = ({ children, handleCloseModal }: ModalProps) => {
	return (
		<div className='column items-center full-screen bg-black bg-opacity-60 top-0 left-0 fixed'>
			<div className='w-2/5 mt-36'>
				<div className='relative my-0 mx-auto w-full bg-white rounded-lg border-gray-300 p-8'>
					{children}
					<Button handleClick={handleCloseModal}>Close</Button>
				</div>
			</div>
		</div>
	)
}