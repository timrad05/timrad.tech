import { aboutLead, profileStatus } from '@/entities/profile'
import { skills } from '@/entities/skill'
import { SkillIcon } from '@/shared/ui/SkillIcon/SkillIcon'
import styles from './About.module.scss'

export function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-label">
      <div className={styles.inner}>
        <p className={styles.label} id="about-label">
          обо мне
        </p>

        <div className={styles.body}>
          <p className={styles.lead}>{aboutLead}</p>
          <p className={styles.status}>{profileStatus}</p>

          <div className={styles.skills} aria-label="Стек технологий">
            <ul className={styles.skillsRow}>
              {skills.map((skill) => (
                <li key={skill.id}>
                  <SkillIcon icon={skill.icon} label={skill.name} size="lg" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
