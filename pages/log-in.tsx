import React from 'react'
import { Button } from '@components'
import { signIn, getSession } from 'next-auth/client'
import { GetServerSideProps } from 'next'

export default function LogIn() {
	const handleSignin = async () => {
		signIn()
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<Button handleClick={handleSignin}>Log In with github</Button>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)

	if (session) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return { props: {} }
}
