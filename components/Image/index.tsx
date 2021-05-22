import React from 'react'
import NextImage from 'next/image'

const fullUrl = 'https://res.cloudinary.com/dtwkxgaag/image/upload/v1621309389/photo_app/Test%20from%20cell.jpg'

interface ImageProps {
	url?: string
	objectFill?: 'cover' | 'contain'
}

export const Image = ({ url, objectFill = 'cover' }: ImageProps) => {
	return (
		<NextImage
			src={fullUrl}
			alt="Picture of the author"
			layout="fill"
			objectFit={objectFill}
			// objectFit="cover" // parent size, but only look what it can from center
			// objectFit="contain" // fits in the parent size but without loosing proportions
			// width={500}
			// height={500}
		/>
	)
}