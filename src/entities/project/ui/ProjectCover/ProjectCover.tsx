import type { CSSProperties } from 'react'
import type { Project } from '../../model/types'
import { getProjectCategoryLabel } from '../../lib/categoryLabel'
import { getCategoryAccent } from '../../lib/categoryAccent'
import { getProjectCover } from '../../lib/getProjectCover'
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

type CoverLayout = 'featured' | 'preview'

type ProjectCoverProps = {
  project: Project
  className?: string
  size?: 'sm' | 'lg'
  layout?: CoverLayout
  showCategory?: boolean
}

export function ProjectCover({
  project,
  className,
  size = 'sm',
  layout = 'featured',
  showCategory = true,
}: ProjectCoverProps) {
  const accent = coverAccents[project.id] ?? '#a1a1ad'
  const cover = getProjectCover(project)

  return (
    <div
      className={cn(
        styles.cover,
        styles[size],
        cover && styles.hasImage,
        layout === 'preview' && styles.preview,
        layout === 'featured' && size === 'lg' && styles.featured,
        className,
      )}
      style={
        {
          '--cover-accent': accent,
          '--category-accent': getCategoryAccent(project.category),
          ...(cover ? { '--cover-image': `url("${cover.src}")` } : {}),
        } as CSSProperties
      }
      aria-hidden="true"
    >
      {cover ? (
        <img
          className={styles.image}
          src={cover.src}
          alt=""
          loading={size === 'lg' ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={size === 'lg' ? 'high' : 'auto'}
        />
      ) : (
        <span className={styles.glow} />
      )}

      {showCategory && (
        <span className={styles.category}>
          {getProjectCategoryLabel(project.category)}
        </span>
      )}
    </div>
  )
}
