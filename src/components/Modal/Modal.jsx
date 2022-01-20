import React, { useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.css'

function Modal({ children, onClose }) {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }

  const handleEsc = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  return (
    <div onClick={onClose} className="modal">
      <div onClick={stopPropagation} className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ❌
        </button>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('root'))
}
