import { siGithub, siTelegram } from 'simple-icons'
import type { ContactLink } from '../model/types'

type ContactIconData = {
  path: string
  title: string
}

const emailIcon: ContactIconData = {
  title: 'Email',
  path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
}

export const contactIconMap: Record<ContactLink['type'], ContactIconData> = {
  telegram: { path: siTelegram.path, title: siTelegram.title },
  email: emailIcon,
  github: { path: siGithub.path, title: siGithub.title },
}
