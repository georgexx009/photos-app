import React from 'react'
import NextImage from 'next/image'

const fullUrl = 'https://res.cloudinary.com/dtwkxgaag/image/upload/v1621309389/photo_app/Test%20from%20cell.jpg'

interface ImageProps {
	url?: string
	objectFill?: 'cover' | 'contain'
	alt?: string
}

export const Image = ({ url, objectFill = 'cover', alt = 'image' }: ImageProps) => {
	return (
		<NextImage
			src={url}
			alt={alt}
			// layout="fill"
			layout="fill"
			// objectFit={objectFill}
			objectFit="cover" // parent size, but only look what it can from center
			// objectFit="contain" // fits in the parent size but without loosing proportions
			// width={1000}
			// height={1000}
		/>
	)
}
