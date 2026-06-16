import type { Project } from '@/entities/project'
import { ProjectCover } from '../ProjectCover/ProjectCover'
import styles from './ProjectPreviewCard.module.scss'

type ProjectPreviewCardProps = {
  project: Project
  onSelect: (project: Project) => void
}

export function ProjectPreviewCard({ project, onSelect }: ProjectPreviewCardProps) {
  return (
    <article className={styles.card}>
      <button
        type="button"
        className={styles.selectArea}
        onClick={() => onSelect(project)}
        aria-label={`Показать проект ${project.title}`}
      >
        <ProjectCover project={project} className={styles.cover} showCategory={false} size="lg" />

        <div className={styles.hoverOverlay} aria-hidden="true">
          <p className={styles.overlayTitle}>{project.title}</p>
          <p className={styles.overlayText}>{project.shortDescription}</p>
        </div>
      </button>
    </article>
  )
}
