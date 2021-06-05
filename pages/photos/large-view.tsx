import Head from 'next/head'
import Link from 'next/link'
import { PhotosLargeViewer, SideBar } from '@components'
import { GetServerSideProps } from 'next'
import { PhotoService } from '@services'
import { Photo } from '@types'

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
          Kiara Photos
        </span>
      </header>

      <main className='flex flex-col flex-1 mb-4 items-center p-2 lg:p-2'>
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