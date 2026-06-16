import type { ProjectCategory } from '../model/types'

export const categoryAccents: Record<ProjectCategory, string> = {
  commercial: '#d8d8e2',
  team: '#8b9cf6',
  pet: '#b794f6',
  learning: '#5ec4e8',
}

export function getCategoryAccent(category: ProjectCategory) {
  return categoryAccents[category]
}
