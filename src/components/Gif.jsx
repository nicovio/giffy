import React from 'react'
import '../styles/Gif.css'

export default function Gif({ gif }) {
  const { title, url } = gif

  return (
    <>
      <h4>{title}</h4>
      <img className="gif-img" src={url} alt={title} />
    </>
  )
}
