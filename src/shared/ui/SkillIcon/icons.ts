import type { SimpleIcon } from 'simple-icons'
import {
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siReact,
  siRedux,
  siSass,
  siStorybook,
  siTypescript,
  siVite,
} from 'simple-icons'
import type { SkillIconId } from '@/entities/skill'

export const skillIconMap: Record<SkillIconId, SimpleIcon> = {
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  redux: siRedux,
  vite: siVite,
  scss: siSass,
  html: siHtml5,
  css: siCss,
  git: siGit,
  storybook: siStorybook,
}
