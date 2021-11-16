import GifsContext from "context/GifsContext"
import { useContext, useEffect, useState } from "react"
import { gifService } from "services/gifService"

const INITIAL_PAGE = 0

const useGifs = ({ keyword } = {}) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)
    const [page, setPage] = useState(INITIAL_PAGE)
    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random'

    useEffect(() => {
        async function getGifs() {
            setLoading(true)
            const apiGifs = await gifService.fetchGifs({ keyword: keywordToUse })
            setGifs(apiGifs)
            setLoading(false)
            localStorage.setItem("lastKeyword", keywordToUse)
        }
        getGifs()
    }, [keywordToUse, setGifs])

    useEffect(() => {
        async function getNextGifs() {
            setLoadingNextPage(true)
            const nextGifs = await gifService.fetchGifs({ keyword: keywordToUse, page })
            setGifs(prevGifs => {
                return prevGifs.concat(nextGifs)
            })
            setLoadingNextPage(false)
        }
        if (page === INITIAL_PAGE) return
        getNextGifs()
    }, [keywordToUse, page, setGifs])

    return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs