import React from 'react'
import './ListOfGifs.css'
import GifLink from '../Gif/GifLink'
import Spinner from '../Spinner/Spinner'

export default function ListOfGifs({ gifs, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="masonry-grid">
          {gifs.map((gif) => (
            <GifLink key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </>
  )
}
