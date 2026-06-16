import { useCallback, useState } from 'react'
import type { Project } from '@/entities/project'

export function useProjectModal() {
  const [project, setProject] = useState<Project | null>(null)

  const open = useCallback((nextProject: Project) => {
    setProject(nextProject)
  }, [])

  const close = useCallback(() => {
    setProject(null)
  }, [])

  return {
    project,
    isOpen: project !== null,
    open,
    close,
  }
}
