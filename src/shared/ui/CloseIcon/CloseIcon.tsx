import styles from './CloseIcon.module.scss'

type CloseIconProps = {
  className?: string
}

export function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      className={className ? `${styles.icon} ${className}` : styles.icon}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7.5 7.5l9 9M16.5 7.5l-9 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}
