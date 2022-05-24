import React from 'react'
import { Link } from 'wouter'
import './CustomLink.css'

function CustomLink(props) {
  return (
    <Link {...props}>
      <a href="replace" style={props.style} className={`${props.className}`}>
        <span>{props.children}</span>
      </a>
    </Link>
  )
}

export default React.memo(CustomLink)
