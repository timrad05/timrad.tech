import { ThemeProvider } from '@/features/theme'
import { HomePage } from '@/pages/home'

export function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
