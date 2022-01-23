import Fav from 'components/Fav/Fav'
import React from 'react'
import { Link } from 'wouter'
import Gif from './Gif'
import './GifLink.css'

function GifLink({ gif }) {
  return (
    <div className="Gif-link-container">
      <div className="Gif-buttons">
        <Fav id={gif.id} />
      </div>
      <Link href={`/gif/${gif.id}`}>
        <a href="replace" className="Gif-link" data-testid={`gif-link-${gif.id}`}>
          <Gif height="200" gif={gif}></Gif>
        </a>
      </Link>
    </div>
  )
}

export default React.memo(GifLink, (prevProps, nextProps) => {
  return prevProps.gif.id === nextProps.gif.id
})
