import React from 'react'
import Masonry from 'react-masonry-css'
import 'styles/ListOfGifs.css'
import GifLink from './GifLink'
import Spinner from './Spinner'

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  500: 1,
}

export default function ListOfGifs({ gifs, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Masonry breakpointCols={breakpointColumnsObj} className="masonry-grid" columnClassName="masonry-grid_column">
          {gifs.map((gif) => (
            <GifLink key={gif.id} gif={gif} />
          ))}
        </Masonry>
      )}
    </>
  )
}
