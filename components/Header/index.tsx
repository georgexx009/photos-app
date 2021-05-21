import React from 'react'
import Link from 'next/link'

export const Header = ({ username = 'not logged'}: { username?: string}) => {
	return (
		<header className='test p-8 flex justify-between items-center' >
			<h1>Photo list</h1>
			<div>
				<span className="mr-12">{ username }</span>
				<Link href="/log-out">
					<a>Log out</a>
				</Link>
			</div>
		</header>
	)
}