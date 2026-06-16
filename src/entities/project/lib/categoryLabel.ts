import type { ProjectCategory } from '../model/types'

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  commercial: 'коммерция',
  team: 'команда',
  pet: 'pet',
  learning: 'учебный',
}

export function getProjectCategoryLabel(category: ProjectCategory) {
  return projectCategoryLabels[category]
}
