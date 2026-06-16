import { useCallback, useMemo, useState } from 'react'
import type { Project } from '@/entities/project'

export function useFeaturedProject(projects: Project[]) {
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const featured = projects[featuredIndex] ?? projects[0]

  const others = useMemo(
    () => projects.filter((_, index) => index !== featuredIndex),
    [projects, featuredIndex],
  )

  const setFeaturedById = useCallback(
    (id: string) => {
      const index = projects.findIndex((project) => project.id === id)
      if (index >= 0) {
        setFeaturedIndex(index)
      }
    },
    [projects],
  )

  const goNext = useCallback(() => {
    setFeaturedIndex((current) => (current + 1) % projects.length)
  }, [projects.length])

  const goPrev = useCallback(() => {
    setFeaturedIndex((current) => (current - 1 + projects.length) % projects.length)
  }, [projects.length])

  return {
    featured,
    featuredIndex,
    others,
    total: projects.length,
    setFeaturedById,
    goNext,
    goPrev,
  }
}
