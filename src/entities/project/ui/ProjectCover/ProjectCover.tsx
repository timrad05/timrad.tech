import type { CSSProperties } from 'react'
import type { Project } from '../../model/types'
import { getProjectCategoryLabel } from '../../lib/categoryLabel'
import { cn } from '@/shared/lib/cn'
import styles from './ProjectCover.module.scss'

const coverAccents: Record<string, string> = {
  'freelance-concert': '#e8e8ee',
  skillswap: '#8b9cf6',
  'stellar-burgers': '#f5c842',
  weblarek: '#6ec8ff',
  'blog-customizer': '#c084fc',
  mesto: '#34d399',
}

type ProjectCoverProps = {
  project: Project
  className?: string
  size?: 'sm' | 'lg'
  showCategory?: boolean
}

export function ProjectCover({
  project,
  className,
  size = 'sm',
  showCategory = true,
}: ProjectCoverProps) {
  const accent = coverAccents[project.id] ?? '#a1a1ad'

  return (
    <div
      className={cn(styles.cover, styles[size], className)}
      style={{ '--cover-accent': accent } as CSSProperties}
      aria-hidden="true"
    >
      <span className={styles.glow} />
      {showCategory && (
        <span className={styles.category}>
          {getProjectCategoryLabel(project.category)}
        </span>
      )}
    </div>
  )
}
