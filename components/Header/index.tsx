import React from 'react'
import Link from 'next/link'
import { Avatar } from '@components'

export const Header = ({ username = 'not logged', imgUrl }: { username?: string, imgUrl: string }) => {
	return (
		<header className='test p-8 flex justify-between items-center' >
			<h1>Photo list</h1>
			<div className="flex justify-items-end items-center">
				<Avatar imgUrl={imgUrl} />
				<span className="mx-12">{ username }</span>
				<Link href="/log-out">
					<a>Log out</a>
				</Link>
			</div>
		</header>
	)
}