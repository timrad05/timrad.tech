import styles from './BackgroundDecor.module.scss'

/**
 * Авторский фон «Monolith»:
 * монограмма TR, органические ленты, кольца-рябь, halftone-акцент + glow.
 */
export function BackgroundDecor() {
  return (
    <div className={styles.root} id="bg-decor" aria-hidden="true">
      <div className={styles.glowPrimary} />
      <div className={styles.glowSecondary} />
      <div className={styles.glowCore} />
      <div className={styles.grain} />

      <svg
        className={styles.canvas}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="halftone"
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.15" className={styles.halftoneDot} />
          </pattern>
        </defs>

        <text
          className={styles.monogram}
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          TR
        </text>

        <g className={styles.ringCluster}>
          <ellipse
            className={styles.ring}
            cx="1080"
            cy="220"
            rx="140"
            ry="140"
            fill="none"
          />
          <ellipse
            className={styles.ringSoft}
            cx="1080"
            cy="220"
            rx="200"
            ry="200"
            fill="none"
          />
          <ellipse
            className={styles.ringFaint}
            cx="1080"
            cy="220"
            rx="270"
            ry="270"
            fill="none"
          />
        </g>

        <path
          className={styles.ribbon}
          d="M -80 620 C 180 420, 420 760, 720 520 S 1180 280, 1520 380"
          fill="none"
        />
        <path
          className={styles.ribbonSoft}
          d="M -40 700 C 240 500, 500 820, 780 580 S 1220 360, 1560 460"
          fill="none"
        />
        <path
          className={styles.ribbonAccent}
          d="M 200 120 C 420 280, 560 80, 820 200 S 1100 420, 1340 260"
          fill="none"
        />

        <rect
          className={styles.halftoneBlock}
          x="1180"
          y="580"
          width="200"
          height="200"
          rx="100"
          transform="rotate(-18 1280 680)"
        />

        <path
          className={styles.arcMark}
          d="M 120 140 A 90 90 0 0 1 210 230"
          fill="none"
        />
        <path
          className={styles.arcMark}
          d="M 1240 720 A 70 70 0 0 0 1310 790"
          fill="none"
        />
      </svg>

      <div className={styles.vignette} />
    </div>
  )
}
