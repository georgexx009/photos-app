import React from 'react'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { PhotoForm } from '@components/PhotoForm'

import { GetServerSideProps } from 'next'
import prisma from '@lib/prisma'
import { Photo } from '.prisma/client'
import { useToggle } from '@hooks'
import { ModalProvider } from 'context/modalCtx'

export default function Photos({ photos }: { photos: Photo[] }) {
  const { toggleVal: showModal, turnOff: closeModal, turnOn: openModal } = useToggle()

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
              <PhotoForm />
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
  const photos = await prisma.photo.findMany()

  return {
    props: {
      photos
    }
  }
}