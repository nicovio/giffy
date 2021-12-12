import ListOfGifs from 'components/ListOfGifs'
import SearchForm from 'components/SearchForm'
import TrendingSearches from 'components/TrendingSearches/LazyTrendingSearches'
import useGifs from 'hooks/useGifs'
import React, { useCallback } from 'react'
import Helmet from 'react-helmet'
import 'styles/Home.css'
import { useLocation } from 'wouter'

export default function Home() {
  const [, pushLocation] = useLocation()
  const { loading, gifs } = useGifs({ limit: 15 })

  const onSubmit = useCallback(
    ({ keyword }) => {
      pushLocation(`/search/${keyword}`)
    },
    [pushLocation]
  )

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className="App-main">
        <div className="App-results">
          <SearchForm onSubmit={onSubmit} />
          <h2 className="App-title">Última búsqueda</h2>
          <ListOfGifs gifs={gifs} loading={loading} />
        </div>
        <TrendingSearches />
      </div>
    </>
  )
}
