import React from 'react'
import { useRouter } from 'next/router'
import { stack as Menu } from 'react-burger-menu'
import { Profile } from '@components'
import { SideBarContent } from './side-bar-content'
import { useSession } from 'next-auth/client'

export function SideBar() {
  const router = useRouter()
  const [ session, loading ] = useSession()

  return (
    <Menu>
      <a id="home" className="menu-item text-lg" href="/">Home</a>
      <a id="home" className="menu-item text-lg" href="/photos/large-view">Large View</a>
      <a id="photo-manager" className="menu-item text-lg" href="/photos">Photo Manager</a>
			<a id="contact" className="menu-item text-lg" href="/contact">Contact</a>
      {session && (
        <div className="mt-8">
          <Profile username={session.user.name} imgUrl={session.user.image} />
        </div>
      )}
    </Menu>
  );
}
