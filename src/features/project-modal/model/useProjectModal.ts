import { useCallback, useState } from 'react'
import type { Project } from '@/entities/project'

export function useProjectModal() {
  const [project, setProject] = useState<Project | null>(null)
  const [isClosing, setIsClosing] = useState(false)

  const open = useCallback((nextProject: Project) => {
    setIsClosing(false)
    setProject(nextProject)
  }, [])

  const close = useCallback(() => {
    setIsClosing(true)
  }, [])

  const finishClose = useCallback(() => {
    setProject(null)
    setIsClosing(false)
  }, [])

  return {
    project,
    isOpen: project !== null,
    isClosing,
    open,
    close,
    finishClose,
  }
}
