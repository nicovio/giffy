import GifsContext from "context/GifsContext"
import { useContext, useEffect, useState } from "react"
import { gifService } from "services/gifService"
import { isNew } from "./utils"

const INITIAL_PAGE = 0

const useGifs = ({ keyword, limit } = {}) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [hasNextPage, setHasNextPage] = useState(true)
    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random'

    useEffect(() => {
        setGifs([])
    }, [setGifs])

    useEffect(() => {
        async function getGifs() {
            setLoading(true)
            const { gifs, hasNextPage } = await gifService.fetchGifs({ keyword: keywordToUse, limit })
            setGifs(gifs)
            if (!hasNextPage) setHasNextPage(false)
            setLoading(false)
            localStorage.setItem("lastKeyword", keywordToUse)
        }
        getGifs()
    }, [keywordToUse, setGifs, limit])

    useEffect(() => {
        async function getNextGifs() {
            const { gifs: nextGifs, hasNextPage } = await gifService.fetchGifs({ keyword: keywordToUse, page, limit })
            setGifs(prevGifs => prevGifs.concat(nextGifs.filter(gif => isNew(gif, prevGifs))))
            if (!hasNextPage) setHasNextPage(false)
            setLoadingNextPage(false)
        }
        if (page === INITIAL_PAGE) return
        getNextGifs()
    }, [keywordToUse, page, setGifs, limit])

    return { loading, loadingNextPage, setLoadingNextPage, gifs, setPage, hasNextPage }
}

export default useGifs