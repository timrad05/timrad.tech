import type { SkillIconId } from '@/entities/skill'
import { skillIconMap } from './icons'
import styles from './SkillIcon.module.scss'

type SkillIconProps = {
  icon: SkillIconId
  label: string
}

export function SkillIcon({ icon, label }: SkillIconProps) {
  const { path, title } = skillIconMap[icon]

  return (
    <button
      type="button"
      className={styles.root}
      data-icon={icon}
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
