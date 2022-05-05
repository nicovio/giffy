import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Error.css'

export default function Error({ style, message = '', closeable = true, onClose }) {
  return (
    <div style={style} className={`error-container`}>
      <span>{message}</span>
      {closeable && (
        <button aria-label="Limpiar error" className="close-btn" onClick={onClose}>
          <FaTimes color="white" size="1rem" />
        </button>
      )}
    </div>
  )
}
