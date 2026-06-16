import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { Screenshot } from '@/entities/project'
import styles from './ImageLightbox.module.scss'

type ImageLightboxProps = {
  screenshot: Screenshot | null
  onClose: () => void
}

export function ImageLightbox({ screenshot, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!screenshot) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, screenshot])

  if (!screenshot) {
    return null
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <figure className={styles.figure} onClick={(event) => event.stopPropagation()}>
        <img className={styles.image} src={screenshot.src} alt={screenshot.alt} />
        <figcaption className={styles.caption}>{screenshot.alt}</figcaption>
      </figure>
    </div>,
    document.body,
  )
}
