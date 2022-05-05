import React from 'react'

export default function ExternalLink({ children, className = '', ariaLabel = '', href = '' }) {
  return (
    <a aria-label={ariaLabel} className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
