import GifLink from 'components/Gif/GifLink'
import React from 'react'
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {
  return (
    <div className="masonry-grid">
      {gifs.map((gif) => (
        <GifLink key={gif.id} gif={gif} />
      ))}
    </div>
  )
}
