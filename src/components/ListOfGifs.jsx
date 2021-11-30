import React from 'react'
import 'styles/ListOfGifs.css'
import GifLink from './GifLink'
import Spinner from './Spinner'

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
