import Gif from 'components/Gif/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Redirect } from 'wouter'

export default function Detail({ params }) {
  const { loading, gif, error } = useSingleGif({ id: params.id })
  const title = gif ? gif.title : ''

  if (error) return <Redirect to="/404" />

  return (
    <>
      {loading || !gif ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title} | Giffy</title>
          </Helmet>
          <Gif gif={gif} />
        </>
      )}
    </>
  )
}
