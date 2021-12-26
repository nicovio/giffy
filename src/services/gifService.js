import { API_KEY, API_URL } from "./settings"

const fromImageDataToGif = imageData => {
    const { id, title, images, slug } = imageData
    return { id, slug, title, image: images.original_mp4 }
}

const fetchGifs = async ({ limit = 15, keyword = 'morty', page = 0, rating = 'g' } = {}) => {
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en&q=${keyword}`
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