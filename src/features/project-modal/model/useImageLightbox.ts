import { useCallback, useState } from 'react'
import type { Screenshot } from '@/entities/project'

export function useImageLightbox() {
  const [screenshot, setScreenshot] = useState<Screenshot | null>(null)

  const open = useCallback((shot: Screenshot) => {
    setScreenshot(shot)
  }, [])

  const close = useCallback(() => {
    setScreenshot(null)
  }, [])

  return { screenshot, open, close }
}
