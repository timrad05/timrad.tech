import { useThemeContext } from '@/features/theme/hooks/useThemeContext'
import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
    >
      <span className={styles.track} data-active={isDark ? 'dark' : 'light'}>
        <span className={styles.thumb} />
      </span>
      <span className={styles.label}>{isDark ? 'Dark' : 'Light'}</span>
    </button>
  )
}
