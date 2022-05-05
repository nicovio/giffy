import Copy from 'components/Copy/Copy'
import Fav from 'components/Fav/Fav'
import React from 'react'
import './GifLinkButtons.css'

export default function GifLinkButtons({ gif }) {
  return (
    <div className="Gif-buttons">
      <Fav className="gf-fav-overlay" gif={gif} />
      <Copy className="gf-copy-overlay" gif={gif} />
    </div>
  )
}
