import React from 'react'
import { Image } from '@components'
import { Photo } from '@types'

interface PhotosViewerProps {
	photos: Photo[]
}

const PhotoContainer = ({ url, alt }: { url: string, alt: string }) => {
	return (
		<div className='m-1 lg:m-12 relative rounded-md overflow-hidden photo-height' style={{
			// height: '700px'
		}} >
			<Image url={url} alt={alt} />
		</div>
	)
}

const LoadingPhotos = () => {
	return <h4>Loading Photos</h4>
}

export const PhotosLargeViewer = ({ photos = [] }: PhotosViewerProps) => {
	return (
		<div className="flex flex-col lg:flex-row flex-wrap justify-center items-center w-full">
			<div className='grid w-full lg:grid-cols-2'>
				{photos.length === 0 ? <LoadingPhotos /> : (
					photos.map(photo => (
						<PhotoContainer key={photo.id} url={photo.url} alt={photo.name} />
					))
				)}
			</div>
		</div>
	)
}