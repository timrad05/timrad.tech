import styles from './ChevronIcon.module.scss'

type ChevronIconProps = {
  direction: 'left' | 'right'
  className?: string
}

export function ChevronIcon({ direction, className }: ChevronIconProps) {
  return (
    <svg
      className={className ? `${styles.icon} ${className}` : styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d={direction === 'left' ? 'M14.5 7.5 9 12l5.5 4.5' : 'M9.5 7.5 15 12l-5.5 4.5'}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
