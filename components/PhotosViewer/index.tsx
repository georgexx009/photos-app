import React from 'react'
import { Image } from '@components'
import { Photo } from '@types'

interface PhotosViewerProps {
	photos: Photo[]
}

const PhotoContainer = ({ url }: { url: string }) => {
	return (
		<div style={{ position: 'relative', width: '300px', height: '300px' }}>
			<Image url={url} />
		</div>
	)
}

const LoadingPhotos = () => {
	return <h4>Loading Photos</h4>
}

export const PhotosViewer = ({ photos = [] }: PhotosViewerProps) => {
	return (
		<div className="flex flex-wrap">
			{photos.length === 0 ? <LoadingPhotos /> : (
				photos.map(photo => (
					<PhotoContainer key={photo.id} url={photo.url} />
				))
			)}
			{/* <div style={{ position: 'relative', width: '300px', height: '300px' }}>
				<Image />
			</div>
			<div style={{ position: 'relative', width: '300px', height: '300px' }}>
				<Image />
			</div>
			<div style={{ position: 'relative', width: '300px', height: '300px' }}>
				<Image />
			</div>
			<div style={{ position: 'relative', width: '300px', height: '300px' }}>
				<Image />
			</div> */}
		</div>
	)
}