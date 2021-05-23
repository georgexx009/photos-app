import Head from 'next/head'
import Link from 'next/link'
import { PhotosViewer } from '@components'
import { GetServerSideProps } from 'next'
import { PhotoService } from '@services'
import { Photo } from '@types'

interface HomeProps {
  photos: Photo[]
}

export default function Home({ photos }: HomeProps) {
  return (
    <div className='flex flex-col justify-between'>
      <Head>
        <title>Pictures</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='center pt-4'>
        <h3>
          Kiara
        </h3>
      </header>

      <main className='main mb-4 items-center'>
        <div className="flex justify-center">
          <PhotosViewer photos={photos} />
        </div>
      </main>

      <footer className="footer py-6">
        <Link href='/photos'>
          Add a photo
        </Link>
      </footer>

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const photoService = new PhotoService()
  const photos = await photoService.getPhotos()
  console.log(photos)

  return {
    props: {
      photos
    }
  }
}
