import { useEffect, useState } from 'react'
import { gifService } from 'services/gifService'

const useSingleGif = ({ id }) => {
  const [gif, setGif] = useState()
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
    getGifById(id)
  }, [id])

  return { gif, loading, error }
}

export default useSingleGif
