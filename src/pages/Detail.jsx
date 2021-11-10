import React, { useEffect, useState } from 'react'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import useGlobalGifs from 'hooks/useGlobalGifs'
import { gifService } from 'services/gifService'

export default function Detail({ params }) {
  const [gif, setGif] = useState({})
  const [loading, setLoading] = useState(false)
  const gifs = useGlobalGifs()

  useEffect(() => {
    const getGifById = async (id) => {
      try {
        setLoading(true)
        const gif = gifs.find((gif) => gif.id === id) || (await gifService.getGifById(params.id))
        setGif(gif)
      } catch (e) {
        console.log(e)
      } finally {
        setLoading(false)
      }
    }
    getGifById(params.id)
  }, [gifs, params.id])

  return <> {loading ? <Spinner /> : <Gif gif={gif} />}</>
}
