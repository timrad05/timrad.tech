import { ThemeToggle } from '@/features/theme'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
] as const

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top">
          timrad.tech
        </a>

        <nav className={styles.nav} aria-label="Основная навигация">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
