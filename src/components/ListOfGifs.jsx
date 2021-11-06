import React from 'react'
import Gif from './Gif'
import Spinner from './Spinner'
import '../styles/ListOfGifs.css'

export default function ListOfGifs({ gifs, loading }) {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="listOfGifs">
          {gifs.map((gif) => (
            <Gif key={gif.id} gif={gif} />
          ))}
        </div>
      )}
    </>
  )
}
