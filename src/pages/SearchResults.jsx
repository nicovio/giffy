import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from './../components/Spinner'
import 'styles/SearchResults.css'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const { loading, loadingNextPage, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const loadNextPage = useCallback(() => setPage((currentPage) => currentPage + 1), [setPage])

  const debounceHandleNextPage = useCallback(() => {
    const withDebounce = debounce(() => {
      loadNextPage()
    }, 500)
    withDebounce()
  }, [loadNextPage])

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen, debounceHandleNextPage])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App-results">
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
      <div id="visor" ref={externalRef}></div>
      <button disabled={loadingNextPage} className="nextGifs-button" onClick={loadNextPage}>
        {!loadingNextPage ? 'Más gifs' : <Spinner size="small" />}
      </button>
    </div>
  )
}
export default SearchResults
