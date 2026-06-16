import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './Tag.module.scss'

export type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode
}

export function Tag({ children, className, ...props }: TagProps) {
  return (
    <span className={cn(styles.tag, className)} {...props}>
      {children}
    </span>
  )
}
