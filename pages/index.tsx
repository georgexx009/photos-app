import Head from 'next/head'
import { PhotosViewer } from '@components'
import { GetServerSideProps } from 'next'
import { PhotoService } from '@services'
import { Photo } from '@types'

interface HomeProps {
  photos: Photo[]
}

export default function Home({ photos }: HomeProps) {
  return (
    <div>
      <Head>
        <title>Pictures</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='center py-12'>
        <h1>
          Photos
        </h1>
      </header>

      <main>
        <div className="flex justify-center">
          <PhotosViewer photos={photos} />
        </div>
      </main>

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
