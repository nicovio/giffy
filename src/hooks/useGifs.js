import GifsContext from "context/GifsContext"
import { useContext, useEffect, useState } from "react"
import { gifService } from "services/gifService"
import { compareGifsBySize } from './utils'

const INITIAL_PAGE = 0

const useGifs = ({ keyword, limit } = {}) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random'

    useEffect(() => {
        async function getGifs() {
            setLoading(true)
            const responseGifs = await gifService.fetchGifs({ keyword: keywordToUse, limit })
            setGifs(responseGifs.sort(compareGifsBySize))
            setLoading(false)
            localStorage.setItem("lastKeyword", keywordToUse)
        }
        getGifs()
    }, [keywordToUse, setGifs, limit])

    useEffect(() => {
        async function getNextGifs() {
            setLoadingNextPage(true)
            const nextGifs = await gifService.fetchGifs({ keyword: keywordToUse, page, limit })
            setGifs(prevGifs => prevGifs.concat(nextGifs.sort(compareGifsBySize)))
            setLoadingNextPage(false)
        }
        if (page === INITIAL_PAGE) return
        getNextGifs()
    }, [keywordToUse, page, setGifs, limit])

    return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs