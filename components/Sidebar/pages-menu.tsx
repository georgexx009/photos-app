import React from 'react'

export const PagesMenu = () => {
	return (
		<div className='flex flex-col'>
			<a id="home" className="menu-item" href="/photos">Photo Manager</a>
			<a id="about" className="menu-item" href="/about">About</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
		</div>
	)
}