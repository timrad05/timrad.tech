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
  | 'jest'
  | 'cypress'
  | 'webpack'

export interface Skill {
  id: string
  name: string
  icon: SkillIconId
}
