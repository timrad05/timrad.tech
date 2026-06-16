import type { Project } from '../../model/types'
import { Button } from '@/shared/ui'
import { ProjectCover } from '../ProjectCover/ProjectCover'
import styles from './FeaturedProjectCard.module.scss'

type FeaturedProjectCardProps = {
  project: Project
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
  onOpen: (project: Project) => void
}

export function FeaturedProjectCard({
  project,
  index,
  total,
  onPrev,
  onNext,
  onOpen,
}: FeaturedProjectCardProps) {
  const position = String(index + 1).padStart(2, '0')
  const count = String(total).padStart(2, '0')

  return (
    <article className={styles.card}>
      <div className={styles.visual}>
        <ProjectCover project={project} size="lg" layout="featured" className={styles.cover} />
      </div>

      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.counter}>
            {position} / {count}
          </span>

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.navButton}
              onClick={onPrev}
              aria-label="Предыдущий проект"
            >
              ←
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={onNext}
              aria-label="Следующий проект"
            >
              →
            </button>
          </div>
        </div>

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <Button
          type="button"
          variant="outline"
          className={styles.action}
          onClick={() => onOpen(project)}
        >
          Подробнее
        </Button>
      </div>
    </article>
  )
}
