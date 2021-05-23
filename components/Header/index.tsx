import React from 'react'
import Link from 'next/link'
import { Avatar } from '@components'

export const Header = ({ username = 'not logged', imgUrl }: { username?: string, imgUrl: string }) => {
	return (
		<header className='p-4 lg:p-8 flex flex-col lg:flex-row justify-between items-center' >
			<h1>Photo list</h1>
			<div className="w-full lg:w-auto flex justify-between lg:justify-end items-center">
				<Avatar imgUrl={imgUrl} />
				<span className="lg:mx-12">{ username }</span>
				<Link href="/log-out">
					<a>Log out</a>
				</Link>
			</div>
		</header>
	)
}