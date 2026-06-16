import { Button } from '@/shared/ui'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <h1 className={styles.title} id="hero-title">
        <span className={styles.titleLine}>Timofey</span>
        <span className={styles.titleLine}>Radchuk</span>
      </h1>

      <p className={styles.role}>
        <span className={styles.roleSlash}>/</span>
        frontend-developer
        <span className={styles.roleLine} />
      </p>

      <div className={styles.actions}>
        <Button href="#projects">Смотреть проекты</Button>
        <Button variant="outline" href="https://t.me/d2IIy">
          Написать
        </Button>
      </div>
    </section>
  )
}
