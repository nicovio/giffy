import { useEffect, useState } from 'react'

export default function useFixed({ show }) {
  const [showFixed, setShowFixed] = useState(show)

  useEffect(() => {
    if (showFixed) {
      // document.body.style.position = 'fixed'
      // document.body.style.width = '100%'
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.position = 'static'
      document.body.style.overflowY = 'auto'
    }
  }, [showFixed])

  return [showFixed, setShowFixed]
}
