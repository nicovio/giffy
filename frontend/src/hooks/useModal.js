import { useEffect, useState } from 'react'

export default function useModal({ show }) {
  const [showModal, setShowModal] = useState(show)

  useEffect(() => {
    if (showModal) {
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.overflowY = 'scroll'
    } else {
      document.body.style.position = 'static'
      document.body.style.overflowY = 'auto'
    }
  }, [showModal])

  return [showModal, setShowModal]
}
