import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useGifs from 'hooks/useGifs'
import React from 'react'
import Helmet from 'react-helmet'
import './Home.css'

export default function Home() {
  const { loading, gifs } = useGifs({ limit: 15 })

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className="App-results">
        <h2 className="Home-title gradient-text">
          Hola, bienvenidx a <span className="bold"> Giffy!</span>
        </h2>
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs} loading={loading} />
      </div>
    </>
  )
}
