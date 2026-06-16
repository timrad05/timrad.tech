import { useCallback, useEffect, useRef, useState } from 'react'
import {
  SCROLL_HINT_SCROLL_THRESHOLD_PX,
  SCROLL_HINT_SHOW_DELAY_MS,
} from './constants'

export type ScrollHintPhase = 'hidden' | 'visible' | 'leaving'

function isPastScrollThreshold() {
  return window.scrollY > SCROLL_HINT_SCROLL_THRESHOLD_PX
}

function isEligibleOnLoad() {
  if (isPastScrollThreshold()) return false

  const hash = window.location.hash
  return hash === '' || hash === '#top'
}

export function useScrollHint() {
  const [phase, setPhase] = useState<ScrollHintPhase>('hidden')
  const phaseRef = useRef(phase)

  phaseRef.current = phase

  const scrollDown = useCallback(() => {
    const about = document.getElementById('about')
    if (about) {
      about.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (!isEligibleOnLoad()) return

    const showTimer = window.setTimeout(() => {
      if (!isEligibleOnLoad()) return
      setPhase('visible')
    }, SCROLL_HINT_SHOW_DELAY_MS)

    const onScroll = () => {
      if (!isPastScrollThreshold()) return

      if (phaseRef.current === 'visible') {
        setPhase('leaving')
        return
      }

      if (phaseRef.current === 'hidden') {
        setPhase('hidden')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearTimeout(showTimer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleExitTransitionEnd = useCallback(() => {
    if (phaseRef.current === 'leaving') {
      setPhase('hidden')
    }
  }, [])

  return {
    phase,
    scrollDown,
    handleExitTransitionEnd,
  }
}
