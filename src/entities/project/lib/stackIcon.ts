import type { SkillIconId } from '@/entities/skill'

const stackIconByName: Record<string, SkillIconId> = {
  react: 'react',
  typescript: 'typescript',
  javascript: 'javascript',
  redux: 'redux',
  'redux toolkit': 'redux',
  vite: 'vite',
  scss: 'scss',
  sass: 'scss',
  storybook: 'storybook',
  jest: 'jest',
  cypress: 'cypress',
  webpack: 'webpack',
  html: 'html',
  css: 'css',
  git: 'git',
}

export function getStackIconId(name: string): SkillIconId | null {
  return stackIconByName[name.trim().toLowerCase()] ?? null
}
