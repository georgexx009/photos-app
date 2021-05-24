import React from 'react'
import Link from 'next/link'
import { stack as Menu } from 'react-burger-menu'

export function SideBar() {
  
  return (
    <Menu>
      <a id="home" className="menu-item" href="/photos">Photo Manager</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>
  );
}
