import React, { useState } from 'react'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { PhotoForm } from '@components/PhotoForm'

import { GetServerSideProps } from 'next'
import { useQuery } from 'react-query'
import { Photo } from '@types'
import { useToggle } from '@hooks'
import { ModalProvider } from 'context/modalCtx'
import { PhotoService } from '@services'
import { getPhotos } from '@request'

interface PhotosProps { 
  initialPhotos: Photo[], 
  enableUpload?: boolean 
}

export default function Photos({ initialPhotos, enableUpload = false }: PhotosProps) {
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
      <header className='p-8'>
        <h1>Photo list</h1>
      </header>

      <main className='main'>
        <div className='flex justify-end'>
          <Button handleClick={openModal}>Add photo</Button>
        </div>
        <div>
          {photos.map(photo => (
            <p key={photo.id}>{photo.name}</p>
          ))}
        </div>

        {showModal && (
          <ModalProvider value={{
            openModal,
            closeModal,
            showModal
          }}>
            <Modal handleCloseModal={closeModal}>
              <PhotoForm enableUpload={enableUpload} handleSubmitSuccess={refetchPhotos} />
            </Modal>
          </ModalProvider>
        )}
      </main>

      <footer className="footer">
        By Georgexx009
      </footer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const enableUpload = process.env.UPLOAD_ENABLE === 'true'

  const photoService = new PhotoService()
  const photoList = await photoService.getPhotos()

  return {
    props: {
      initialPhotos: photoList,
      enableUpload
    }
  }
}