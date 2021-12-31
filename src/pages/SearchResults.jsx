import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import SearchForm from 'components/SearchForm/SearchForm'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import 'styles/SearchResults.css'
import Spinner from '../components/Spinner/Spinner'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const rating = params.rating || 'g'
  const { loading, loadingNextPage, gifs, loadNextPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const title = loading ? 'Cargando' : `${gifs.length} resultados de ${keyword}`

  const spinnerStyle = { marginTop: '0' }

  useEffect(() => {
    if (isNearScreen) {
      loadNextPage()
    }
  }, [isNearScreen, loadNextPage])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
          </Helmet>
          <div className="App-results">
            <SearchForm initialKeyword={keyword} initialRating={rating} />
            <h2 className="App-title">{keyword}</h2>
            <ListOfGifs gifs={gifs} />
            <div className="visor" id="visor" ref={externalRef}></div>
            {!loading && loadingNextPage && <Spinner style={spinnerStyle} />}
          </div>
        </>
      )}
    </>
  )
}

export default SearchResults
