import type { ContactLink } from '../model/types'

type ContactMeta = {
  title: string
  hint: string
}

export function getContactMeta(link: ContactLink): ContactMeta {
  switch (link.type) {
    case 'telegram':
      return { title: 'telegram', hint: '@d2IIy' }
    case 'email':
      return { title: 'email', hint: link.label }
    case 'github':
      return { title: 'github', hint: 'timrad05' }
  }
}
