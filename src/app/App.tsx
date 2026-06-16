import { ThemeProvider } from '@/features/theme'
import { HomePage } from '@/pages/home'
import { useScrollIdle } from '@/shared/hooks/useScrollIdle'

export function App() {
  useScrollIdle()

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
