import { featuredProjects } from '@/entities/project'
import { useFeaturedProject } from '@/features/project-featured'
import { ProjectModal, useProjectModal } from '@/features/project-modal'
import { FeaturedProjectCard } from './ui/FeaturedProjectCard/FeaturedProjectCard'
import { ProjectPreviewCard } from './ui/ProjectPreviewCard/ProjectPreviewCard'
import styles from './Projects.module.scss'

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

  return (
    <>
      <section className={styles.projects} id="projects" aria-labelledby="projects-label">
        <div className={styles.inner}>
          <p className={styles.label} id="projects-label">
            проекты
          </p>

          <div className={styles.body}>
            <div className={styles.bento}>
              <div className={styles.featuredSlot}>
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
          </div>
        </div>
      </section>

      {isOpen && <ProjectModal project={project} onClose={close} />}
    </>
  )
}
