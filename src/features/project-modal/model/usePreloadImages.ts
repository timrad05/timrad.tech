import { useEffect } from 'react'

export function usePreloadImages(sources: string[]) {
  const key = sources.join('\0')

  useEffect(() => {
    if (!sources.length) {
      return undefined
    }

    sources.forEach((src) => {
      const image = new Image()
      image.src = src
    })

    return undefined
  }, [key, sources])
}
