import Head from 'next/head'
import Link from 'next/link'
import { PhotosLargeViewer, SideBar } from '@components'
import { GetServerSideProps } from 'next'
import { PhotoService } from '@services'
import { Photo } from '@types'
import { SocialMedia, SocialMediaProps } from '@components/SocialMedia'

interface HomeProps {
  photos: Photo[]
}

const socialMediasList: SocialMediaProps['socialMediaList'] = [
  {
    icon: 'email',
    url: 'mailto:ivangaxiolaphoto@gmail.com',
    position: 1
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/ivangaaxiola/',
    position: 2
  },
  {
    icon: 'facebook',
    url: '',
    position: 3
  },
  {
    icon: 'twitter',
    url: 'https://twitter.com/iaga_4',
    position: 4
  }
]

export default function LargeView({ photos }: HomeProps) {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>Photos app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='center py-4 lg:py-8'>
        <span className='text-3xl lg:text-4xl'>
          Kiara Photos
        </span>
      </header>

      <main className='flex flex-col flex-1 mb-4 items-center p-2 lg:p-2'>
        <div className='flex justify-end w-full px-16'>
          <SocialMedia socialMediaList={socialMediasList} />
        </div>
        <div className="flex justify-center w-full">
          <PhotosLargeViewer photos={photos} />
        </div>
      </main>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const photoService = new PhotoService()
  const photos = await photoService.getPhotos()

  return {
    props: {
      photos
    }
  }
}