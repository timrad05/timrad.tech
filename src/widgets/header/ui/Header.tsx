import { ThemeToggle } from '@/features/theme'
import { ScrollReveal } from '@/features/scroll-reveal'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
] as const

export function Header() {
  return (
    <ScrollReveal as="header" className={styles.header} immediate>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a className={styles.logo} href="#top">
            timrad.tech
          </a>
          <ThemeToggle />
        </div>

        <nav className={styles.nav} aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </ScrollReveal>
  )
}
