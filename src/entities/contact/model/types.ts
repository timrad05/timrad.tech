export type ContactType = 'telegram' | 'email' | 'github' | 'resume'

export interface ContactLink {
  id: string
  label: string
  href: string
  type: ContactType
}
