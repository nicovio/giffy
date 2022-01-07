import GifsContext from 'context/GifsContext'
import debounce from 'just-debounce-it'
import { useCallback, useContext, useEffect, useState } from 'react'
import { gifService } from 'services/gifService'
import { isNew } from './utils'

const INITIAL_PAGE = 0

const useGifs = ({ keyword, limit, rating } = {}) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [hasNextPage, setHasNextPage] = useState(true)
  const { gifs, setGifs } = useContext(GifsContext)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  const debounceHandleNextPage = useCallback(() => {
    const withDebounce = debounce(() => {
      setPage((currentPage) => currentPage + 1)
    }, 1000)
    withDebounce()
  }, [])

  const loadNextPage = useCallback(() => {
    if (hasNextPage) {
      setLoadingNextPage(true)
      debounceHandleNextPage()
    }
  }, [debounceHandleNextPage, hasNextPage])

  useEffect(() => {
    async function getInitialGifs() {
      setLoading(true)
      const { gifs } = await gifService.fetchGifs({ keyword: keywordToUse, limit, rating })
      setGifs(gifs)
      setLoading(false)
      gifs.length && localStorage.setItem('lastKeyword', keywordToUse)
    }
    getInitialGifs()
  }, [keywordToUse, setGifs, limit, rating])

  useEffect(() => {
    async function getNextGifs() {
      const { gifs: nextGifs, hasNextPage } = await gifService.fetchGifs({
        keyword: keywordToUse,
        page,
        limit,
        rating,
      })
      setGifs((prevGifs) => prevGifs.concat(nextGifs.filter((gif) => isNew(gif, prevGifs))))
      if (!hasNextPage) setHasNextPage(false)
      setLoadingNextPage(false)
    }
    if (page === INITIAL_PAGE) return
    getNextGifs()
  }, [keywordToUse, page, setGifs, limit, rating])

  return { gifs, loading, loadingNextPage, loadNextPage }
}

export default useGifs
