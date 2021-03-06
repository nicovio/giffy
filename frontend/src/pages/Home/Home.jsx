import Error from 'components/Error/Error'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import React, { useEffect } from 'react'
import Helmet from 'react-helmet'

export default function Home() {
  const { loading, gifs, error, clearError } = useGifs({ limit: 15 })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className="App-results">
        <h2 className="Gradient-title Gradient-text">
          Hola, bienvenidx a <span className="bold"> Giffy!</span>
        </h2>
        <h3 className="App-title">Última búsqueda</h3>
        {error && <Error message={error.message} onClose={clearError} />}
        <ListOfGifs gifs={gifs} loading={loading} />
      </div>
    </>
  )
}
