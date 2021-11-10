import { useContext, useEffect, useState } from "react"
import GifsContext from "context/GifsContext"
import { gifService } from "services/gifService"

const useGifs = ({ keyword } = {}) => {
    const [loading, setLoading] = useState(false)
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        async function getGifs() {
            setLoading(true)
            const keywordToUse = keyword || localStorage.getItem("lastKeyword") || 'random'
            setGifs(await gifService.fetchGifs({ keyword: keywordToUse }))
            setLoading(false)
            localStorage.setItem("lastKeyword", keywordToUse)
        }
        getGifs()
    }, [keyword, setGifs])

    return { loading, gifs }
}

export default useGifs