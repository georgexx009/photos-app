import React from 'react'
import { Image } from '@components'
import { Photo } from '@types'

interface PhotosViewerProps {
	photos: Photo[]
}

const PhotoContainer = ({ url, alt }: { url: string, alt: string }) => {
	return (
		<div className='m-1 relative w-80 h-80 rounded-md overflow-hidden' >
			<Image url={url} alt={alt} />
		</div>
	)
}

const LoadingPhotos = () => {
	return <h4>Loading Photos</h4>
}

export const PhotosViewer = ({ photos = [] }: PhotosViewerProps) => {
	return (
		<div className="flex flex-col lg:flex-row flex-wrap justify-center items-center">
			{photos.length === 0 ? <LoadingPhotos /> : (
				photos.map(photo => (
					<PhotoContainer key={photo.id} url={photo.url} alt={photo.name} />
				))
			)}
		</div>
	)
}