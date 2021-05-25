import { Avatar } from '@components'
import Link from 'next/link'
import React from 'react'

interface ProfileProps {
	imgUrl: string
	username: string
}

export const Profile = ({ imgUrl, username }: ProfileProps) => {
	return (
		<div className="w-full lg:w-auto flex justify-between lg:justify-end items-center">
			<Avatar imgUrl={imgUrl} />
			<div className='flex flex-col ml-4'>
				<span>{ username }</span>
				<Link href="/log-out">
					<a>Log out</a>
				</Link>
			</div>
		</div>
	)
}