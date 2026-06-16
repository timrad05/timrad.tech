import { useEffect } from 'react'

const IDLE_MS = 140

export function useScrollIdle() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    const onScroll = () => {
      document.documentElement.dataset.scrolling = ''
      clearTimeout(timer)
      timer = setTimeout(() => {
        delete document.documentElement.dataset.scrolling
      }, IDLE_MS)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timer)
      delete document.documentElement.dataset.scrolling
    }
  }, [])
}
