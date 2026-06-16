import type { ContactLink } from './types'

export const contacts: ContactLink[] = [
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/d2IIy',
    type: 'telegram',
  },
  {
    id: 'email',
    label: 'timrad05@mail.ru',
    href: 'mailto:timrad05@mail.ru',
    type: 'email',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/timrad05',
    type: 'github',
  },
  {
    id: 'resume',
    label: 'Резюме (PDF)',
    href: '/cv.pdf',
    type: 'resume',
  },
]
