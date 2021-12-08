import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import TrendingSearches from 'components/TrendingSearches/LazyTrendingSearches'
import useGifs from 'hooks/useGifs'
import 'styles/Home.css'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [, pushLocation] = useLocation()
  const { loading, gifs } = useGifs({ limit: 10 })

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button data-testid="boton-buscar" disabled={!keyword}>
          Buscar
        </button>
        <input aria-label="Buscar" placeholder="Ej: taxi driver" type="text" onChange={handleChange} value={keyword} />
      </form>
      <div className="App-main">
        <div className="App-results">
          <h3 className="App-title">Última búsqueda</h3>
          <ListOfGifs gifs={gifs} loading={loading} />
        </div>
        <div className="App-category">
          <TrendingSearches />
        </div>
      </div>
    </>
  )
}
