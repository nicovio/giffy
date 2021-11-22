import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import React, { useCallback, useEffect, useRef } from 'react'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const { loading, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  const debounceHandleNextPage = useCallback(() => {
    const withDebounce = debounce(() => {
      setPage((currentPage) => currentPage + 1)
    }, 300)
    withDebounce()
  }, [setPage])

  useEffect(() => {
    if (isNearScreen) {
      debounceHandleNextPage()
    }
  }, [isNearScreen, debounceHandleNextPage])

  return (
    <div className="App-results">
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
      <div id="visor" ref={externalRef}></div>
    </div>
  )
}
export default SearchResults
