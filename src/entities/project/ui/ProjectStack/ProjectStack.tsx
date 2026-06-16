import { skillIconMap, type SkillIconId } from '@/entities/skill'
import { getStackIconId } from '../../lib/stackIcon'
import styles from './ProjectStack.module.scss'

type ProjectStackProps = {
  stack: string[]
}

function StackIcon({ icon }: { icon: SkillIconId }) {
  const { path, title } = skillIconMap[icon]

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" role="img" aria-hidden="true">
      <title>{title}</title>
      <path d={path} fill="currentColor" />
    </svg>
  )
}

export function ProjectStack({ stack }: ProjectStackProps) {
  return (
    <div className={styles.stack} aria-label="Стек технологий">
      {stack.map((item, index) => {
        const iconId = getStackIconId(item)

        return (
          <span key={item} className={styles.group}>
            {index > 0 && <span className={styles.sep} aria-hidden="true">/</span>}
            <span className={styles.item}>
              {iconId && <StackIcon icon={iconId} />}
              <span>{item}</span>
            </span>
          </span>
        )
      })}
    </div>
  )
}
