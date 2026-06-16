import { BackgroundDecor } from '@/shared/ui'
import { ScrollHint } from '@/features/scroll-hint'
import { About } from '@/widgets/about'
import { Contacts } from '@/widgets/contacts'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Projects } from '@/widgets/projects'
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
          <Projects />
          <Contacts />
        </main>

        <Footer />
      </div>

      <ScrollHint />
    </>
  )
}
