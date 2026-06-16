import { aboutLead, profileStatus } from '@/entities/profile'
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
        </div>
      </div>
    </section>
  )
}
