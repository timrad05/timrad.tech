import type { Project, Screenshot } from '../model/types'

export function getProjectCover(project: Project): Screenshot | undefined {
  return project.screenshots.find((shot) => shot.cover) ?? project.screenshots[0]
}
