import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import SearchForm from 'components/SearchForm/SearchForm'
import TrendingSearches from 'components/TrendingSearches/LazyTrendingSearches'
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
      <div className="App-main">
        <div className="App-results">
          <SearchForm />
          <h2 className="App-title">Última búsqueda</h2>
          <ListOfGifs gifs={gifs} loading={loading} />
        </div>
        <TrendingSearches />
      </div>
    </>
  )
}
