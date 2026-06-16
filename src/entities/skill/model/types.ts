export type SkillIconId =
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'redux'
  | 'vite'
  | 'scss'
  | 'git'
  | 'storybook'
  | 'html'
  | 'css'

export interface Skill {
  id: string
  name: string
  icon: SkillIconId
}
