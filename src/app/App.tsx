import { ThemeProvider } from '@/features/theme'
import { HomePage } from '@/pages/home/HomePage'

export function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}
