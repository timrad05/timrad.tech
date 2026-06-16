import { useState } from 'react'
import type { Screenshot } from '@/entities/project'
import { ChevronIcon } from '@/shared/ui'
import { usePreloadImages } from '../../model/usePreloadImages'
import styles from './ProjectScreenshotSlider.module.scss'

type ProjectScreenshotSliderProps = {
  screenshots: Screenshot[]
  onImageClick: (screenshot: Screenshot) => void
}

export function ProjectScreenshotSlider({
  screenshots,
  onImageClick,
}: ProjectScreenshotSliderProps) {
  const [index, setIndex] = useState(0)
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const total = screenshots.length
  const current = screenshots[index]
  const isLoaded = loadedSrc === current?.src

  usePreloadImages(screenshots.map((shot) => shot.src))

  if (!current) {
    return null
  }

  const goPrev = () => {
    setIndex((value) => (value - 1 + total) % total)
  }

  const goNext = () => {
    setIndex((value) => (value + 1) % total)
  }

  return (
    <section className={styles.slider} aria-label="Скриншоты проекта">
      <div className={styles.viewport}>
        <button
          type="button"
          className={styles.navButton}
          onClick={goPrev}
          aria-label="Предыдущий скриншот"
          disabled={total <= 1}
        >
          <ChevronIcon direction="left" className={styles.navIcon} />
        </button>

        <button
          type="button"
          className={styles.slideButton}
          onClick={() => onImageClick(current)}
          aria-label={`Открыть скриншот: ${current.alt}`}
        >
          <span className={styles.slideFrame} data-loaded={isLoaded}>
            <img
              className={styles.image}
              src={current.src}
              alt={current.alt}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onLoad={() => setLoadedSrc(current.src)}
            />
          </span>
        </button>

        <button
          type="button"
          className={styles.navButton}
          onClick={goNext}
          aria-label="Следующий скриншот"
          disabled={total <= 1}
        >
          <ChevronIcon direction="right" className={styles.navIcon} />
        </button>
      </div>

      {total > 1 && (
        <div className={styles.footer}>
          <span className={styles.counter}>
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          <div className={styles.dots} role="tablist" aria-label="Выбор скриншота">
            {screenshots.map((shot, shotIndex) => (
              <button
                key={shot.src}
                type="button"
                role="tab"
                className={styles.dot}
                data-active={shotIndex === index}
                aria-label={`Скриншот ${shotIndex + 1}`}
                aria-selected={shotIndex === index}
                onClick={() => setIndex(shotIndex)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
