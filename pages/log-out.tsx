import React from 'react'
import { Button } from '@components'
import { signout, getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

export default function LogIn() {
	const handleSignout = async () => {
		await signout()
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<Button handleClick={handleSignout}>Log Out with github</Button>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) {
		return { redirect: { destination: '/log-in', permanent: false } }
	}

	return { props: {} }
}
