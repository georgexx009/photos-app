import React from 'react'
import { PagesMenu } from './pages-menu'

interface SideBarContentProps {
  currentPage?: string
}

export const SideBarContent = ({ currentPage }: SideBarContentProps) => {
	return <PagesMenu />
}