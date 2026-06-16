export type ContactType = 'telegram' | 'email' | 'github'

export interface ContactLink {
  id: string
  label: string
  href: string
  type: ContactType
}
