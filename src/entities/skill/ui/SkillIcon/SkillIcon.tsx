import type { SkillIconId } from '../../model/types'
import { skillIconMap } from '../../lib/skillIconMap'
import styles from './SkillIcon.module.scss'

type SkillIconProps = {
  icon: SkillIconId
  label: string
  size?: 'md' | 'lg'
}

export function SkillIcon({ icon, label, size = 'md' }: SkillIconProps) {
  const { path, title } = skillIconMap[icon]

  return (
    <button
      type="button"
      className={`${styles.root} ${styles[size]}`}
      aria-label={label}
      data-tooltip={label}
    >
      <span className={styles.glow} aria-hidden="true" />
      <svg
        className={styles.svg}
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
      >
        <title>{title}</title>
        <path d={path} fill="currentColor" />
      </svg>
    </button>
  )
}
