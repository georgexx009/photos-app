import React from 'react'
import styles from './Modal.module.scss'
import { Button } from '@components/Button'

interface ModalProps {
	children: React.ReactNode
	handleCloseModal: () => {}
}

export const Modal = ({ children, handleCloseModal }: ModalProps) => {
	return (
		<div className={styles.backgroundlayer}>
			<div className={styles.modalContainer}>
				<div className={styles.modalBody}>
					{children}
					<Button handleClick={handleCloseModal}>Close</Button>
				</div>
			</div>
		</div>
	)
}