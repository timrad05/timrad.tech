import type { ContactLink as ContactLinkType } from '../../model/types'
import { contactIconMap } from '../../lib/icons'
import { getContactMeta } from '../../lib/meta'
import styles from './ContactLink.module.scss'

type ContactLinkProps = {
  link: ContactLinkType
}

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('//')
}

export function ContactLink({ link }: ContactLinkProps) {
  const { path, title } = contactIconMap[link.type]
  const { title: displayTitle, hint } = getContactMeta(link)
  const external = isExternalHref(link.href)

  return (
    <a
      className={styles.root}
      data-type={link.type}
      href={link.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={`${displayTitle}: ${hint}`}
    >
      <span className={styles.panelGlow} aria-hidden="true" />
      <span className={styles.panelSheen} aria-hidden="true" />

      <span className={styles.iconWrap} aria-hidden="true">
        <svg className={styles.svg} viewBox="0 0 24 24" role="img">
          <title>{title}</title>
          <path d={path} fill="currentColor" />
        </svg>
      </span>

      <span className={styles.text}>
        <span className={styles.title}>{displayTitle}</span>
        <span className={styles.hint}>{hint}</span>
      </span>

      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
