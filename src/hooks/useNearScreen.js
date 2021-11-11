import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const onChange = (entries, observer) => {
      const [el] = entries
      if (el.isIntersecting) {
        setIsNearScreen(true)
        observer.disconnect() // disconnect deja de observar todos los elementos y unobserve un elemento puntual
      }
    }

    Promise.resolve(typeof !!IntersectionObserver ? IntersectionObserver : import('intersection-observer')).then(() => {
      observer = new IntersectionObserver(onChange, { rootMargin: distance })
      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  }, [fromRef, distance])

  return { isNearScreen, fromRef }
}
