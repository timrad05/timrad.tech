import { cn } from '@/shared/lib/cn'
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import styles from './ScrollReveal.module.scss'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
  immediate?: boolean
  /** Для элементов у нижнего края страницы (футер и т.п.) */
  edge?: boolean
  as?: ElementType
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  stagger = false,
  immediate = false,
  edge = false,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    if (immediate) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) {
      setVisible(true)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      {
        threshold: edge ? 0 : 0.12,
        rootMargin: edge ? '0px 0px 0px 0px' : '0px 0px -6% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, edge])

  return (
    <Tag
      ref={ref}
      className={cn(
        styles.reveal,
        !visible && styles.pending,
        visible && styles.visible,
        className,
      )}
      data-stagger={stagger ? 'true' : undefined}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
