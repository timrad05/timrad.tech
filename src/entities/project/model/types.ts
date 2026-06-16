export type ProjectCategory = 'commercial' | 'team' | 'pet' | 'learning'

export type ScreenshotVariant = 'desktop' | 'mobile'
export type ScreenshotTheme = 'light' | 'dark'

export interface Screenshot {
  src: string
  alt: string
  variant: ScreenshotVariant
  theme?: ScreenshotTheme
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: ProjectCategory
  stack: string[]
  highlights: string[]
  screenshots: Screenshot[]
  githubUrl?: string
  period?: string
  role?: string
}
