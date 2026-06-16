import { BackgroundDecor } from '@/shared/ui'
import { About } from '@/widgets/about/About'
import { Header } from '@/widgets/header/Header'
import { Hero } from '@/widgets/hero/Hero'
import styles from './HomePage.module.scss'

export function HomePage() {
  return (
    <>
      <BackgroundDecor />

      <div className={styles.layout}>
        <Header />

        <main className={styles.main}>
          <Hero />
          <About />
        </main>
      </div>
    </>
  )
}
