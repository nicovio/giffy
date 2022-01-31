import { useEffect, useState } from 'react'

function isInitialMatch(query) {
  // SSR compatibility
  if (typeof window === 'undefined') return false

  return window.matchMedia(query).matches
}

export default function useMedia(query) {
  const [isMatching, setIsMatching] = useState(() => isInitialMatch(query))

  useEffect(() => {
    const observer = window.matchMedia(query)

    // reset initial value when query changes
    setIsMatching(observer.matches)

    function handleChange({ matches }) {
      setIsMatching(matches)
    }

    try {
      observer.addEventListener('change', handleChange)

      return () => observer.removeEventListener('change', handleChange)
    } catch {
      // iOS backward compatibility
      observer.addListener(handleChange)

      return () => observer.removeListener(handleChange)
    }
  }, [query])

  return isMatching
}
