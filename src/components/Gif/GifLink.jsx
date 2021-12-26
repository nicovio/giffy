import React from 'react'
import './GifLink.css'
import { Link } from 'wouter'
import Gif from './Gif'

function GifLink({ gif }) {
  return (
    <Link href={`/gif/${gif.id}`}>
      <a href="replace" className="Gif-link" data-testid={`gif-link-${gif.id}`}>
        <Gif gif={gif}></Gif>
      </a>
    </Link>
  )
}

export default React.memo(GifLink, (prevProps, nextProps) => {
  return prevProps.gif.id === nextProps.gif.id
})
