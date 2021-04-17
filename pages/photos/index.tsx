import React from 'react'
import { Button } from '@components/Button'
import styles from '@styles/Photos.module.scss'
import { GetServerSideProps } from 'next'
import prisma from '@lib/prisma'
import { Photo } from '.prisma/client'

export default function Photos({ photos }: { photos: Photo[] }) {
  return (
    <div className={styles.container}>
      <header>
        <h1>Photo list</h1>
      </header>

      <main>
        <div className={styles.controls}>
          <Button handleClick={() => {}}>Add photo</Button>
        </div>
        <div>
          {photos.map(photo => (
            <p key={photo.id}>{photo.name}</p>
          ))}
        </div>
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