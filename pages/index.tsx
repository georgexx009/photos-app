import Head from 'next/head'
import Link from 'next/link'
import { PhotosLargeViewer, SideBar } from '@components'
import { GetStaticProps } from 'next'
import { PhotoService } from '@services'
import { Photo } from '@types'
import { SocialMedia } from '@components/SocialMedia'
import { socialMediasList } from 'constants/socialMediaList'

interface HomeProps {
  photos: Photo[]
}

export default function LargeView({ photos }: HomeProps) {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>Photos app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='center py-4 lg:py-8'>
        <span className='text-3xl lg:text-4xl'>
          Ivan Gaxiola
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

export const getStaticProps: GetStaticProps = async () => {
  const photoService = new PhotoService()
  const photos = await photoService.getOrderedPhotos()
  console.log(photos)

  return {
    props: {
      photos
    }
  }
}