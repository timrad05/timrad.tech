import { featuredProjects } from '@/entities/project'
import { ThemeToggle } from '@/features/theme'
import { BackgroundDecor, Button, Section, Tag } from '@/shared/ui'
import styles from './HomePage.module.scss'

const STACK_PREVIEW = ['React', 'TypeScript', 'Redux', 'Vite', 'SCSS', 'Git']

export function HomePage() {
  return (
    <>
      <BackgroundDecor />

      <div className={styles.layout}>
        <header className={styles.header}>
          <span className={styles.logo}>timrad.tech</span>
          <ThemeToggle />
        </header>

        <main className={styles.main}>
          <section className={styles.hero}>
            <h1 className={styles.title}>
              <span className={styles.titleLine}>Timofey</span>
              <span className={styles.titleLine}>Radchuk</span>
            </h1>
            <p className={styles.role}>
              <span className={styles.roleSlash}>/</span>
              frontend-developer
              <span className={styles.roleLine} />
            </p>
            <div className={styles.actions}>
              <Button href="#preview">Смотреть проекты</Button>
              <Button variant="outline" href="https://t.me/d2IIy">
                Написать
              </Button>
            </div>
          </section>

          <Section
            id="preview"
            title="UI Kit"
            subtitle="Превью дизайн-системы перед сборкой секций"
          >
            <div className={styles.stackPreview} aria-label="Стек технологий">
              {STACK_PREVIEW.map((name) => (
                <div key={name} className={styles.stackIcon} title={name}>
                  <span className={styles.stackGlyph}>{name.slice(0, 2)}</span>
                </div>
              ))}
            </div>

            <div className={styles.tags}>
              {featuredProjects[0].stack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>

            <p className={styles.note}>
              Проектов в портфолио: {featuredProjects.length}
            </p>
          </Section>
        </main>
      </div>
    </>
  )
}
