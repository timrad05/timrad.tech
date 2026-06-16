import { useCallback, useEffect, useState } from 'react'
import {
  applyTheme,
  getInitialTheme,
  getStoredTheme,
  getSystemTheme,
} from '../lib/getInitialTheme'
import { THEME_STORAGE_KEY, type Theme } from '../model/types'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    if (getStoredTheme()) return undefined

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = () => {
      setThemeState(getSystemTheme())
    }

    media.addEventListener('change', syncSystemTheme)
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    localStorage.setItem(THEME_STORAGE_KEY, next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(THEME_STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, setTheme, toggleTheme }
}
