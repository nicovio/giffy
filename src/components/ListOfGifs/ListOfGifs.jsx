import React from 'react'
import GifLink from 'components/Gif/GifLink'
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
