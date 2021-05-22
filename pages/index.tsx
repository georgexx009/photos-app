import Head from 'next/head'
import { PhotosViewer } from '@components'

export default function Home() {
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
          <PhotosViewer />
        </div>
      </main>

    </div>
  )
}
