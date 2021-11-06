import React from 'react'
import { Link } from 'wouter'
import '../styles/Gif.css'

export default function Gif({ gif, clickeable = false }) {
  const { id, title, url } = gif

  const ReadOnlyGif = ({ children }) => <div>{children}</div>

  const GifComponent = clickeable ? Link : ReadOnlyGif

  return (
    <>
      <GifComponent to={`/gif/${id}`} className="list-gif">
        <h4>{title}</h4>
        <img src={url} alt={title} />
      </GifComponent>
    </>
  )
}
