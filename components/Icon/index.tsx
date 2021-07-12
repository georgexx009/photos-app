import React from 'react'
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope, FaEdit } from 'react-icons/fa'

const iconsMenu = {
	instagram: <FaInstagram />,
	twitter: <FaTwitter />,
	facebook: <FaFacebookF />,
	email: <FaEnvelope />,
	edit: <FaEdit />
}

export interface IconProps {
	type: keyof typeof iconsMenu 
}

export const Icon = ({ type }: IconProps) => {
	return iconsMenu[type]
}