import React from 'react'
import './FormError.css'

export default function FormError({ message }) {
  return <small className="error">{message}</small>
}
