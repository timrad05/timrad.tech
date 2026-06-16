import {
  FeaturedProjectCard,
  featuredProjects,
  portfolioProjects,
  ProjectPreviewCard,
} from '@/entities/project'
import type { Project } from '@/entities/project'
import { useFeaturedProject } from '@/features/project-featured'
import { ProjectModal, usePreloadImages, useProjectModal } from '@/features/project-modal'
import { ScrollReveal } from '@/features/scroll-reveal'
import styles from './Projects.module.scss'
import { useEffect, useMemo, useState, type CSSProperties } from 'react'

const ALL_LIST_CLOSE_LAYOUT_MS = 460
const ALL_LIST_CLOSE_BUFFER_MS = 50

type AllListState = 'closed' | 'open' | 'closing'

function getAllListCloseDuration() {
  return ALL_LIST_CLOSE_LAYOUT_MS + ALL_LIST_CLOSE_BUFFER_MS
}

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

  const { project, isOpen, isClosing, open, close, finishClose } = useProjectModal()

  usePreloadImages(featured.screenshots.map((shot) => shot.src))

  const [allListState, setAllListState] = useState<AllListState>('closed')

  const isAllOpen = allListState === 'open'
  const isAllListVisible = allListState !== 'closed'

  useEffect(() => {
    if (allListState !== 'closing') return

    const id = window.setTimeout(() => {
      setAllListState('closed')
    }, getAllListCloseDuration())

    return () => window.clearTimeout(id)
  }, [allListState])

  function toggleAllList() {
    setAllListState((state) => (state === 'open' ? 'closing' : 'open'))
  }

  const featuredIds = useMemo(
    () => new Set(featuredProjects.map((p) => p.id)),
    [],
  )

  function handleAllProjectClick(project: Project) {
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
      return
    }

    if (featuredIds.has(project.id)) {
      setFeaturedById(project.id)
      document
        .getElementById('projects-bento')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <section className={styles.projects} id="projects" aria-labelledby="projects-label">
        <ScrollReveal className={styles.inner} stagger>
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
                onClick={toggleAllList}
                aria-expanded={isAllOpen}
              >
                <span className={styles.allToggleLabel}>
                  {isAllOpen ? (
                    'свернуть'
                  ) : (
                    <>
                      <span>все проекты</span>
                      <span className={styles.allToggleCount}>{`{${portfolioProjects.length}}`}</span>
                    </>
                  )}
                </span>
                <span className={styles.allToggleIcon} aria-hidden="true">
                  {isAllOpen ? '↑' : '↓'}
                </span>
              </button>
            </div>

            {isAllListVisible && (
              <div
                className={styles.allListPanel}
                data-state={allListState}
                aria-hidden={allListState === 'closing' ? true : undefined}
              >
                <div className={styles.allListCollapse}>
                  <ol className={styles.allList} aria-label="Все проекты">
                {portfolioProjects.map((item, i) => (
                  <li
                    key={item.id}
                    className={styles.allListItem}
                    style={
                      {
                        '--item-index': i,
                        '--item-total': portfolioProjects.length,
                      } as CSSProperties
                    }
                  >
                    <button
                      type="button"
                      className={styles.allItem}
                      onClick={() => handleAllProjectClick(item)}
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
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {isOpen && project && (
        <ProjectModal
          project={project}
          closing={isClosing}
          onRequestClose={close}
          onClosed={finishClose}
        />
      )}
    </>
  )
}
