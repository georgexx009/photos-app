import React from 'react'
import { IconProps, Icon } from '@components'

interface SocialMediaInfo {
	icon: IconProps['type']
	url: string
}

export interface SocialMediaProps {
	socialMediaList: SocialMediaInfo[]
}

export const SocialMedia = ({ socialMediaList }: SocialMediaProps) => {
	return (
		<div className='flex'>
			{socialMediaList.map(socialMedia => (
				<div className='mx-3'>
					<a href={socialMedia.url} target='_blank'>
						<Icon type={socialMedia.icon} />
					</a>
				</ div>
			))}
		</div>
	)
}