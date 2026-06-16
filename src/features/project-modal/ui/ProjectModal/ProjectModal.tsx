import { useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import type { Project } from '@/entities/project'
import { getProjectCategoryLabel } from '@/entities/project/lib/categoryLabel'
import { Button, Tag } from '@/shared/ui'
import styles from './ProjectModal.module.scss'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId()

  useEffect(() => {
    if (!project) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
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
  }, [onClose, project])

  if (!project) {
    return null
  }

  const hasHighlights = project.highlights.length > 0
  const hasScreenshots = project.screenshots.length > 0
  const description = project.fullDescription || project.shortDescription

  return createPortal(
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
          <p className={styles.description}>{description}</p>

          {hasHighlights && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>что сделано</h3>
              <ul className={styles.list}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {hasScreenshots && (
            <section className={styles.block}>
              <h3 className={styles.blockTitle}>скриншоты</h3>
              <div className={styles.screenshots}>
                {project.screenshots.map((shot) => (
                  <figure key={shot.src} className={styles.shot}>
                    <img src={shot.src} alt={shot.alt} loading="lazy" />
                    <figcaption className={styles.shotCaption}>
                      {shot.variant === 'mobile' ? 'mobile' : 'desktop'}
                      {shot.theme ? ` · ${shot.theme}` : ''}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <div className={styles.stack}>
            {project.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>

        {project.githubUrl && (
          <footer className={styles.footer}>
            <Button href={project.githubUrl} variant="outline">
              GitHub
            </Button>
          </footer>
        )}
      </div>
    </div>,
    document.body,
  )
}
