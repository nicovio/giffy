import React from 'react'
import { Link } from 'wouter'
import '../styles/Gif.css'

export default function Gif({ gif }) {
  const { id, title, url } = gif

  return (
    <Link to={`/gif/${id}`} className="gif">
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </Link>
  )
}
