import { featuredProjects } from '@/entities/project'
import styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <main className={styles.page}>
      <p className={styles.badge}>timrad.tech · в разработке</p>
      <h1 className={styles.title}>Тимофей Радчук</h1>
      <p className={styles.subtitle}>Frontend-разработчик · React · TypeScript</p>
      <p className={styles.meta}>
        Проектов в портфолио: {featuredProjects.length}
      </p>
    </main>
  )
}
