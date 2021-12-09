import Gif from 'components/Gif/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import React from 'react'
import { Redirect } from 'wouter'

export default function Detail({ params }) {
  const { loading, gif, error } = useSingleGif({ id: params.id })

  if (error) return <Redirect to="/404" />

  return <> {loading || !gif ? <Spinner /> : <Gif gif={gif} />}</>
}
