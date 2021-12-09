import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm'
import TrendingSearches from 'components/TrendingSearches/LazyTrendingSearches'
import useGifs from 'hooks/useGifs'
import React, { useCallback } from 'react'
import 'styles/Home.css'
import { useLocation } from 'wouter'

export default function Home() {
  const [, pushLocation] = useLocation()
  const { loading, gifs } = useGifs({ limit: 10 })

  const onSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
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
