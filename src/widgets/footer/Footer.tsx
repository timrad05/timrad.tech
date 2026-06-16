import styles from './Footer.module.scss'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        <span>© {year} Timofey Radchuk</span>
        <span className={styles.sep} aria-hidden="true">
          {'</>'}
        </span>
        <span>frontend-developer</span>
      </p>
    </footer>
  )
}
