import { useScrollHint } from '../../model/useScrollHint'
import styles from './ScrollHint.module.scss'

export function ScrollHint() {
  const { phase, scrollDown, handleExitTransitionEnd } = useScrollHint()

  if (phase === 'hidden') return null

  return (
    <div
      className={styles.anchor}
      data-phase={phase}
      onTransitionEnd={(event) => {
        if (event.propertyName === 'opacity') {
          handleExitTransitionEnd()
        }
      }}
    >
      <button
        type="button"
        className={styles.root}
        aria-label="Прокрутить вниз"
        onClick={scrollDown}
      >
        <span className={styles.glow} aria-hidden="true" />
        <span className={styles.ring} aria-hidden="true" />
        <svg className={styles.arrow} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 5v12m0 0l-5-5m5 5l5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}
