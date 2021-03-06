import React from 'react'
import { Link } from 'wouter'
import Gif from './Gif'
import GifLinkButtons from './GifButtons/GifLinkButtons'
import './GifLink.css'

function GifLink({ gif }) {
  return (
    <div className="Gif-link-container">
      <GifLinkButtons gif={gif} />
      <Link href={`/gif/${gif.id}`}>
        <a aria-label="Ver gif" href="replace" className="Gif-link" data-testid={`gif-link-${gif.id}`}>
          <Gif gif={gif}></Gif>
        </a>
      </Link>
    </div>
  )
}

export default React.memo(GifLink, (prevProps, nextProps) => {
  return prevProps.gif.id === nextProps.gif.id
})
