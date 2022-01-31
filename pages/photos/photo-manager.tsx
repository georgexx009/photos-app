import React, { useState } from 'react'
import Link from 'next/link'
import { PhotoForm, Header, Modal, Button, PhotoEdit } from '@components'

import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import { useQuery } from 'react-query'
import { Photo, Session } from '@types'
import { useToggle } from '@hooks'
import { ModalProvider } from 'context/modalCtx'
import { PhotoService } from '@services'
import { getPhotos } from '@request'

interface PhotosProps {
  initialPhotos: Photo[],
  enableUpload?: boolean,
  session: Session
}

export default function Photos({ initialPhotos, enableUpload = false, session }: PhotosProps) {
  const [modalType, setModalType] = useState<'addPhoto' | 'editPhoto'>('addPhoto')

  const { refetch: refetchPhotosRequest } = useQuery('getPhotos', getPhotos, {
    enabled: false
  })

  const { toggleVal: showModal, turnOff: closeModal, turnOn: openModal } = useToggle()
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos)

  const refetchPhotos = async () => {
    const { data } = await refetchPhotosRequest()
    setPhotos(data)
  }

  return (
    <div className='container-page'>

      <Header username={ session?.user?.name } imgUrl={session?.user?.image} />

      <main className='main'>
        <div className='flex justify-end'>
          <Button handleClick={() => {
            setModalType('addPhoto')
            openModal()
          }}>Add photo</Button>
        </div>
        <div>
          <h3>Photo list</h3>
          <p>Change number in the name to choose the order.</p>
          <p className='mb-6'>If the photo doesn't have a number, it won't be render</p>
            <div className='flex flex-col'>
            {photos.map(photo => (
              <div className='w-40' onClick={() => {
                setModalType('editPhoto')
                openModal()
              }}>
                <a className='cursor-pointer' key={photo.id}>{photo.name}{` >`}</a>
              </ div>
            ))}
            </div>
        </div>

        {showModal && (
          <ModalProvider value={{
            openModal,
            closeModal,
            showModal
          }}>
            <Modal handleCloseModal={closeModal}>
              {modalType === 'addPhoto' && <PhotoForm enableUpload={enableUpload} handleSubmitSuccess={refetchPhotos} />}
              {modalType === 'editPhoto' && <PhotoEdit />}
            </Modal>
          </ModalProvider>
        )}
        <div className='mt-auto'>
          <Link href='/'>
            <a>{'< View Photos'}</a>
          </Link>
        </div>
      </main>

      <footer className="footer">
        By Georgexx009
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const enableUpload = process.env.UPLOAD_ENABLE === 'true'

  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/log-in',
        permanent: false
      }
    }
  }

  const adminEmailsListStr = process.env.ADMIN_EMAILS_LIST
  const adminEmailsList = adminEmailsListStr.split(',')
  if (!adminEmailsList.includes(session.user?.email)) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      }
    }
  }

  const photoService = new PhotoService()
  const photoList = await photoService.getPhotos()

  return {
    props: {
      initialPhotos: photoList,
      enableUpload,
      session
    }
  }
}
