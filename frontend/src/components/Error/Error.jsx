import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Error.css'

export default function Error({ message, onClose }) {
  return (
    <div className="error-container">
      <strong>{message}</strong>
      <button className="close-btn" onClick={onClose}>
        <FaTimes color="white" size="1rem" />
      </button>
    </div>
  )
}
