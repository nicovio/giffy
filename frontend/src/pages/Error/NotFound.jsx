import Error from 'components/Error/Error'
import Gif from 'components/Gif/Gif'
import 'pages/Detail/Detail.css'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { gifService } from 'services/gifService'
import './NotFound.css'

export default function NotFound() {
  const [random404Gif, setRandom404Gif] = useState({})
  const [error, setError] = useState(null)

  const clearError = () => {
    setError(null)
  }

  useEffect(() => {
    const getRandomGif = async () => {
      try {
        const gif = await gifService.getRandomGif({ tag: 'Error 404' })
        setRandom404Gif(gif)
      } catch (err) {
        setError(err)
      }
    }
    getRandomGif()
  }, [])

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <h2 className="not-found">404</h2>
      {random404Gif && (
        <div className="Detail-container hide-title">
          <Gif gif={random404Gif} />
        </div>
      )}
      {error && <Error message={error.message} onClose={clearError} />}
    </>
  )
}
