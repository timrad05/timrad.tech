export { featuredProjects, learningProjects, portfolioProjects, secondaryProjects } from './model/projects'
export { getProjectCategoryLabel, projectCategoryLabels } from './lib/categoryLabel'
export { getProjectCover } from './lib/getProjectCover'
export { getStackIconId } from './lib/stackIcon'
export { FeaturedProjectCard } from './ui/FeaturedProjectCard/FeaturedProjectCard'
export { ProjectCover } from './ui/ProjectCover/ProjectCover'
export { ProjectPreviewCard } from './ui/ProjectPreviewCard/ProjectPreviewCard'
export { ProjectStack } from './ui/ProjectStack/ProjectStack'
export type {
  Project,
  ProjectCategory,
  Screenshot,
  ScreenshotTheme,
  ScreenshotVariant,
} from './model/types'
