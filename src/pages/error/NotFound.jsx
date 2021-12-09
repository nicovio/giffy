import React from 'react'
import useLocation from 'wouter/use-location'

export default function NotFound() {
  const [, pushLocation] = useLocation()

  const goToHome = () => pushLocation(`/`)

  return (
    <>
      <h1>No se encontró ningún GIF</h1>
      <button style={{ marginTop: '2rem' }} onClick={goToHome}>
        Volver a home
      </button>
    </>
  )
}
