import { BackgroundDecor } from '@/shared/ui'
import { About } from '@/widgets/about/About'
import { Header } from '@/widgets/header/Header'
import { Hero } from '@/widgets/hero/Hero'
import { Projects } from '@/widgets/projects/Projects'
import { Skills } from '@/widgets/skills/Skills'
import { Contacts } from '@/widgets/contacts/Contacts'
import { Footer } from '@/widgets/footer/Footer'
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
          <Skills />
          <Projects />
          <Contacts />
        </main>

        <Footer />
      </div>
    </>
  )
}
