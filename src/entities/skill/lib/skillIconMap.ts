import type { SimpleIcon } from 'simple-icons'
import {
  siCss,
  siCypress,
  siGit,
  siHtml5,
  siJavascript,
  siJest,
  siReact,
  siRedux,
  siSass,
  siStorybook,
  siTypescript,
  siVite,
  siWebpack,
} from 'simple-icons'
import type { SkillIconId } from '../model/types'

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
  jest: siJest,
  cypress: siCypress,
  webpack: siWebpack,
}
