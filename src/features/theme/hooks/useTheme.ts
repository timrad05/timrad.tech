import { useCallback, useEffect, useState } from 'react'
import { applyTheme, getInitialTheme } from '../lib/getInitialTheme'
import { THEME_STORAGE_KEY, type Theme } from '../model/types'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, setTheme, toggleTheme }
}
