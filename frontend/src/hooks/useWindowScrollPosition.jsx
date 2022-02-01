import { useEffect } from 'react'

// also sets the scroll position when unmounting, i.e. a user navigates to a different page

export default function useWindowScrollPosition({ localStorageKey, setCondition = false }) {
  // const [scrollYStorage, setScrollYStorage] = useLocalStorage(localStorageKey, 0)

  const scrollYStorage = localStorage.getItem('scrollY')

  const setScrollYStorage = (y) => localStorage.setItem('scrollY', y)

  useEffect(() => {
    console.log(scrollYStorage)
    // if the setcondition is true (AKA everything in the DOM is loaded: fire off the scrollTo()!)
    if (setCondition) {
      window.scrollTo(0, scrollYStorage)
    }
  }, [setCondition, scrollYStorage])
  // purely on un mount (and thus we ignore the ESLint warning): store the scroll position the user was at to localStorage
  // see the yellow note at https://reactjs.org/docs/hooks-effect.html near the very bottom
  useEffect(() => {
    return () => {
      console.log(window.scrollY)
      setScrollYStorage(window.scrollY)
    }
  }, [])
}
