import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib/cn'
import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'ghost' | 'outline'
type ButtonSize = 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('//')
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(styles.button, styles[variant], styles[size], className)

  if ('href' in props && props.href) {
    const { href, target, rel, ...rest } = props
    const external = isExternalHref(href)

    return (
      <a
        className={classes}
        href={href}
        target={target ?? (external ? '_blank' : undefined)}
        rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
        {...rest}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', ...rest } = props as ButtonAsButton
  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  )
}
