import React from 'react'
import { Image } from '@components'

export default function ImagePage() {
	return (
		<div className="center h-screen">
			<div style={{ position: 'relative', width: '300px', height: '500px' }}>
				<Image />
			</div>
		</div>
	)
}