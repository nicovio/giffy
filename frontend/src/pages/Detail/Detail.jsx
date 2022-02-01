import Gif from 'components/Gif/Gif'
import GifButtons from 'components/Gif/GifButtons/GifButtons'
import Spinner from 'components/Spinner/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'
import './Detail.css'

export default function Detail({ params }) {
  const { loading, gif, error } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  if (error) return <Redirect to="/404" />

  return (
    <>
      {loading || !gif ? (
        <Spinner style={{ marginTop: '10rem' }} />
      ) : (
        <>
          <Helmet>
            <title>{title} | Giffy</title>
          </Helmet>
          <div className="Detail-container">
            <Gif gif={gif} />
            <GifButtons gif={gif} />
            </div>
          </>
      )}
    </>
  )
}
