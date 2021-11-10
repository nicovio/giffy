import React from 'react'
import '../styles/Gif.css'

export default function Gif({ gif }) {
  const { title, url } = gif

  return (
    <>
      <h4 className="App-title">{title}</h4>
      <img className="Gif-img" src={url} alt={title} />
    </>
  )
}
