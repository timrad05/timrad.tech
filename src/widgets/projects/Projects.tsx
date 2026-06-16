import {
  FeaturedProjectCard,
  featuredProjects,
  ProjectPreviewCard,
  secondaryProjects,
} from '@/entities/project'
import { useFeaturedProject } from '@/features/project-featured'
import { ProjectModal, useProjectModal } from '@/features/project-modal'
import styles from './Projects.module.scss'
import { useMemo, useState } from 'react'

export function Projects() {
  const {
    featured,
    featuredIndex,
    others,
    total,
    setFeaturedById,
    goNext,
    goPrev,
  } = useFeaturedProject(featuredProjects)

  const { project, isOpen, open, close } = useProjectModal()

  const [isAllOpen, setIsAllOpen] = useState(false)

  const allProjects = useMemo(
    () => [...featuredProjects, ...secondaryProjects],
    [],
  )

  const featuredIds = useMemo(
    () => new Set(featuredProjects.map((p) => p.id)),
    [],
  )

  function handleAllProjectClick(nextProjectId: string) {
    const nextProject = allProjects.find((p) => p.id === nextProjectId)
    if (!nextProject) return

    if (nextProject.githubUrl) {
      window.open(nextProject.githubUrl, '_blank', 'noopener,noreferrer')
      return
    }

    if (featuredIds.has(nextProjectId)) {
      setFeaturedById(nextProjectId)
      document
        .getElementById('projects-bento')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className={styles.projects} id="projects" aria-labelledby="projects-label">
        <div className={styles.inner}>
          <p className={styles.label} id="projects-label">
            проекты
          </p>

          <div className={styles.body}>
            <div className={styles.bento}>
              <div className={styles.featuredSlot} id="projects-bento">
                <FeaturedProjectCard
                  project={featured}
                  index={featuredIndex}
                  total={total}
                  onPrev={goPrev}
                  onNext={goNext}
                  onOpen={open}
                />
              </div>

              <div className={styles.sideRail}>
                {others.map((item) => (
                  <ProjectPreviewCard
                    key={item.id}
                    project={item}
                    onSelect={(next) => setFeaturedById(next.id)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.allToggle}>
              <button
                type="button"
                className={styles.allToggleButton}
                onClick={() => setIsAllOpen((v) => !v)}
                aria-expanded={isAllOpen}
              >
                <span>{isAllOpen ? 'Свернуть' : 'Все проекты'}</span>
                <span className={styles.allToggleIcon} aria-hidden="true">
                  {isAllOpen ? '↑' : '↓'}
                </span>
              </button>
            </div>

            {isAllOpen && (
              <ol className={styles.allList} aria-label="Все проекты">
                {allProjects.map((item, i) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      className={styles.allItem}
                      onClick={() => handleAllProjectClick(item.id)}
                    >
                      <span className={styles.allNumber} aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <span className={styles.allText}>
                        <span className={styles.allTitle}>{item.title}</span>
                        <span className={styles.allDesc}>
                          {item.shortDescription}
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>

      {isOpen && <ProjectModal project={project} onClose={close} />}
    </>
  )
}
