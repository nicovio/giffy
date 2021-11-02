import React, { useEffect, useState } from 'react'
import fetchGifs from '../services/fetchGifs'
import Gif from '../components/Gif'
import Spinner from '../components/Spinner'

export default function SearchResults({ params: { keyword } }) {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getGifs() {
      setLoading(true)
      setGifs(await fetchGifs({ keyword }))
      setLoading(false)
    }
    getGifs()
  }, [keyword])

  return loading ? (
    <i>
      <Spinner />
    </i>
  ) : (
    gifs.map((gif) => <Gif key={gif.id} gif={gif} />)
  )
}
