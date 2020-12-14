
import React, { useEffect } from 'react'


export function useObserver(ref: React.RefObject<HTMLDivElement>, threshold: number, onVisible: (isVisible: boolean) => void) {

  useEffect(() => {
    let observer: any

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > threshold && entry.isIntersecting) {
              onVisible(true)
            } else {
              onVisible(false)
            }
          })
        },
        {
          threshold
        }
      )
      observer.observe(ref.current)
    }

    return () => {
      if (observer && observer.unobserve) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref.current])
}
