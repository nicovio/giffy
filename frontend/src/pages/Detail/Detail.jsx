import Error from 'components/Error/Error'
import Gif from 'components/Gif/Gif'
import GifButtons from 'components/Gif/GifButtons/GifButtons'
import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'
import './Detail.css'

export default function Detail({ params }) {
  const { loading, gif, error, clearError } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  if (error?.meta?.status === 404) return <Redirect to="/404" />

  if (loading) return <Spinner style={{ marginTop: '10rem' }} />

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      {gif && (
        <div className="Detail-container">
          <Gif gif={gif} />
          <GifButtons gif={gif} />
        </div>
      )}
      {error && <Error message={error.message} onClose={clearError} />}
    </>
  )
}
