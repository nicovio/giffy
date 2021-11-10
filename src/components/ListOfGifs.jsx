import React from 'react'
import 'styles/ListOfGifs.css'
import ListGif from './ListGif'
import Spinner from './Spinner'

export default function ListOfGifs({ gifs, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="Gifs-container">
          {gifs.map((gif) => (
            <ListGif key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </>
  )
}
