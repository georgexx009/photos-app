import React, { createContext } from 'react'

const ModalContext = createContext({
	closeModal: () => {},
	openModal: () => {},
	showModal: false
})

export const ModalProvider = ModalContext.Provider
export const ModalConsumer = ModalContext.Consumer

export default ModalContext
