import React from 'react'
import { Image } from '@components'
import { Photo } from '@types'
import { getPosition } from 'utils/orderedPhotos/filterOrderedPhotos'
import useDimensions from 'react-cool-dimensions'
import NextImage from 'next/image'

interface PhotosViewerProps {
	photos: Photo[]
}

const PhotoContainer = ({ url, alt }: { url: string, alt: string }) => {
	return (
		<div className='m-1 lg:my-4 lg:mx-8 relative overflow-hidden photo-height test' style={{
			// height: '700px'
		}} >
			<Image url={url} alt={alt} />
		</div>
	)
}

const PhotoContainerV2 = ({ url, alt }: { url: string, alt: string }) => {
	const horizontal = alt.includes('horizontal')

	return horizontal ? (
		<div className='m-4 relative overflow-hidden' style={{
			height: '400px'
		}} >
			<Image url={url} alt={alt} />
		</div>
	) : (
		<div className='m-4 relative overflow-hidden' style={{
			height: '700px'
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
			<div className='grid w-full lg:grid-cols-2 lg:mx-24'>
				<div className='hidden lg:flex lg:flex-col'>
					{photos.length === 0 ? <LoadingPhotos /> : (
						photos.map(photo => (getPosition(photo.name) % 2) !== 0 && (
							<PhotoContainerV2 key={getPosition(photo.name)} url={photo.url} alt={photo.name} />
						))
					)}
				</div>
				<div className='hidden lg:flex lg:flex-col'>
					{photos.length === 0 ? <LoadingPhotos /> : (
						photos.map(photo => (getPosition(photo.name) % 2) === 0 && (
							<PhotoContainerV2 key={getPosition(photo.name)} url={photo.url} alt={photo.name} />
						))
					)}
				</div>
				<div className='lg:hidden flex flex-col'>
					{photos.length === 0 ? <LoadingPhotos /> : (
						photos.map(photo => (
							<PhotoContainerV2 key={getPosition(photo.name)} url={photo.url} alt={photo.name} />
						))
					)}
				</div>
			</div>
		</div>
	)
}