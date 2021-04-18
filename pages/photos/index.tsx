import React from 'react'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'
import { PhotoForm } from '@components/PhotoForm'

import styles from '@styles/Photos.module.scss'
import { GetServerSideProps } from 'next'
import prisma from '@lib/prisma'
import { Photo } from '.prisma/client'
import { useToggle } from '@hooks'

export default function Photos({ photos }: { photos: Photo[] }) {
  const { toggleVal: showModal, turnOff: closeModal, turnOn: openModal } = useToggle()

  return (
    <div className={styles.container}>
      <header>
        <h1>Photo list</h1>
      </header>

      <main>
        <div className={styles.controls}>
          <Button handleClick={openModal}>Add photo</Button>
        </div>
        <div>
          {photos.map(photo => (
            <p key={photo.id}>{photo.name}</p>
          ))}
        </div>

        {showModal && (
          <Modal handleCloseModal={closeModal}>
            <PhotoForm />
          </Modal>
        )}
      </main>

      <footer className={styles.footer}>
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