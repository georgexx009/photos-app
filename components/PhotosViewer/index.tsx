import React from 'react'
import { Image } from '@components'

export const PhotosViewer = () => {
	return (
		<div className="flex flex-wrap">
			<div style={{ position: 'relative', width: '300px', height: '300px' }}>
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
			</div>
		</div>
	)
}