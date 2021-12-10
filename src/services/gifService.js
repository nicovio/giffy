import { API_KEY, API_URL } from "./settings"

const getResultsLimit = () => {
    if (document.documentElement.clientWidth > 800) {
        return 15
    }
    return 8
}

const fromImageDataToGif = imageData => {
    const { id, title, images, slug } = imageData
    return { id, slug, title, image: images.original_mp4 }
}

const fetchGifs = async ({ limit, keyword = 'morty', page = 0 } = {}) => {
    const resultsLimit = limit || getResultsLimit()
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&limit=${resultsLimit}&offset=${page * resultsLimit}&rating=g&lang=en&q=${keyword}`
    const response = await fetch(url)
    const { data, pagination } = await response.json()
    const hasNextPage = !pagination || pagination.count + pagination.offset < pagination.total_count
    const gifs = data.map(fromImageDataToGif)
    return { gifs, hasNextPage }
}

const getGifById = async (gifId) => {
    const url = `${API_URL}/gifs/${gifId}?api_key=${API_KEY}`
    const response = await fetch(url)
    const { data } = await response.json()
    return fromImageDataToGif(data)
}

const getTrendingTerms = async () => {
    const url = `${API_URL}/trending/searches?api_key=${API_KEY}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
}

export const gifService = { fetchGifs, getGifById, getTrendingTerms }