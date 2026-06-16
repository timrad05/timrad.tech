type IconProps = {
  className?: string
}

/**
 * Asymmetric 4-point sparkle — reads as “light”, not a generic sun disc.
 */
export function SunIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3.25 14.15 10.35 21.25 12 14.15 13.65 12 20.75 9.85 13.65 2.75 12 9.85 10.35 12 3.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * Bold crescent only — no extra details.
 */
export function MoonIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden
    >
      <path
        d="M15.35 5.1a7.1 7.1 0 1 0 0 11.8 5.25 5.25 0 0 1 0-11.8z"
        fill="currentColor"
      />
    </svg>
  )
}
