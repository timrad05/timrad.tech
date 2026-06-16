import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/entities/project'
import { getProjectCategoryLabel, ProjectStack } from '@/entities/project'
import { Button } from '@/shared/ui'
import { useImageLightbox } from '../../model/useImageLightbox'
import { ImageLightbox } from '../ImageLightbox/ImageLightbox'
import { ProjectScreenshotSlider } from '../ProjectScreenshotSlider/ProjectScreenshotSlider'
import styles from './ProjectModal.module.scss'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId()
  const { screenshot, open, close } = useImageLightbox()

  useEffect(() => {
    if (!project) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (screenshot) {
          close()
          return
        }

        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [close, onClose, project, screenshot])

  if (!project) {
    return null
  }

  const hasScreenshots = project.screenshots.length > 0
  const description = project.fullDescription || project.shortDescription

  return createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={styles.dialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(event) => event.stopPropagation()}
        >
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>
                {getProjectCategoryLabel(project.category)}
              </span>
              {project.period && (
                <span className={styles.period}>{project.period}</span>
              )}
            </div>

            <div className={styles.titleRow}>
              <h2 className={styles.title} id={titleId}>
                {project.title}
              </h2>
              <button
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            {project.role && <p className={styles.role}>{project.role}</p>}
          </header>

          <div className={styles.content}>
            {hasScreenshots && (
              <ProjectScreenshotSlider
                screenshots={project.screenshots}
                onImageClick={open}
              />
            )}

            <p className={styles.description}>{description}</p>

            <ProjectStack stack={project.stack} />
          </div>

          {project.githubUrl && (
            <footer className={styles.footer}>
              <Button href={project.githubUrl} variant="outline">
                GitHub
              </Button>
            </footer>
          )}
        </div>
      </div>

      <ImageLightbox screenshot={screenshot} onClose={close} />
    </>,
    document.body,
  )
}
