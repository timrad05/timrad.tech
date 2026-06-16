import { useThemeContext } from '@/features/theme/hooks/useThemeContext'
import { MoonIcon, SunIcon } from './ThemeIcons'
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
      <span className={styles.icon} data-visible={isDark ? 'sun' : 'moon'}>
        <SunIcon className={styles.glyph} />
        <MoonIcon className={styles.glyph} />
      </span>
    </button>
  )
}
