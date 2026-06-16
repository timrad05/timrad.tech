import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './Section.module.scss'

export type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section id={id} className={cn(styles.section, className)} {...props}>
      <div className={styles.inner}>
        {(title || subtitle) && (
          <header className={styles.header}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
