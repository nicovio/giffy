import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '1px', externalRef, once = true } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const [el] = entries
      if (el.isIntersecting) {
        setIsNearScreen(true)
        once && observer.disconnect() // disconnect deja de observar todos los elementos y unobserve un elemento puntual
      } else {
        !once && setIsNearScreen(false)
      }
    }

    Promise.resolve(typeof IntersectionObserver !== 'undefined' ? IntersectionObserver : import('intersection-observer')).then(() => {
      observer = new IntersectionObserver(onChange, { rootMargin: distance })
      element && observer.observe(element)
    })

    return () => observer && observer.disconnect()
  }, [externalRef, distance, once])

  return { isNearScreen, fromRef }
}
