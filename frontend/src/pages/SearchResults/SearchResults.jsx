import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Spinner from 'components/Spinner/Spinner'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import React, { useEffect, useRef } from 'react'
import Helmet from 'react-helmet'
import './SearchResults.css'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const rating = params.rating || 'g'
  const { loading, loadingNextPage, gifs, loadNextPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const title = loading ? 'Cargando' : `${gifs.length} resultados de ${keyword}`

  useEffect(() => {
    if (isNearScreen) {
      loadNextPage()
    }
  }, [isNearScreen, loadNextPage])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <div className="App-results">
        <h2 className="App-title">{keyword}</h2>
        {loading ? <Spinner style={{ marginTop: '10rem' }} /> : <ListOfGifs gifs={gifs} />}
        {!loading && loadingNextPage && <Spinner style={{ marginTop: '2rem' }} />}
        <div className="visor" id="visor" ref={externalRef}></div>
      </div>
    </>
  )
}

export default SearchResults
