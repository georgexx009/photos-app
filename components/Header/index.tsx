import React from 'react'
import { Profile } from '@components'

export const Header = ({ username = 'not logged', imgUrl }: { username?: string, imgUrl: string }) => {
	return (
		<header className='p-4 lg:p-8 flex flex-col lg:flex-row justify-between items-center bottom-divider' >
			<div></div>
			<h1>Photo list</h1>
			<Profile username={username} imgUrl={imgUrl} />
		</header>
	)
}