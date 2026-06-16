import { skills } from '@/entities/skill'
import { SkillIcon } from '@/shared/ui/SkillIcon/SkillIcon'
import styles from './Skills.module.scss'

export function Skills() {
  return (
    <section aria-label="Стек технологий">
      <div className={styles.inner}>
        <ul className={styles.row}>
          {skills.map((skill) => (
            <li key={skill.id}>
              <SkillIcon icon={skill.icon} label={skill.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
