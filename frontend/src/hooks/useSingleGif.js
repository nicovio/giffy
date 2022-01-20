import GifsContext from 'context/GifsContext'
import { useContext, useEffect, useState } from 'react'
import { gifService } from 'services/gifService'

const useSingleGif = ({ id }) => {
  const gifs = useContext(GifsContext).gifs
  const gifFromCache = gifs.find((gif) => gif.id === id)
  const [gif, setGif] = useState(gifFromCache)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getGifById = async (id) => {
      try {
        setLoading(true)
        const apiGif = await gifService.getGifById(id)
        setGif(apiGif)
      } catch (e) {
        console.log(e)
        setError(e)
      } finally {
        setLoading(false)
      }
    }
    if (!gifFromCache) {
      getGifById(id)
    }
  }, [id, gifFromCache])

  return { gif, loading, error }
}

export default useSingleGif
