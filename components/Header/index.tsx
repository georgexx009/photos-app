import React from 'react'
import { useSession } from 'next-auth/client'

export const Header = ({ username = 'not logged'}: { username?: string}) => {
	return (
		<header className='test p-8 flex justify-between items-center' >
			<h1>Photo list</h1>
			<span>{ username }</span>
		</header>
	)
}