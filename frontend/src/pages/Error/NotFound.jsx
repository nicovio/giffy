import React from 'react'
import { Helmet } from 'react-helmet'
import useLocation from 'wouter/use-location'

export default function NotFound() {
  const [, pushLocation] = useLocation()

  const goToHome = () => pushLocation(`/`)

  return (
    <>
      <Helmet>
        <title>Error 404 | Giffy</title>
      </Helmet>
      <h2>No se encontró ningún GIF</h2>
      <button style={{ marginTop: '2rem' }} onClick={goToHome}>
        Volver a home
      </button>
    </>
  )
}
