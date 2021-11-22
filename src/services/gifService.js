import { API_KEY, API_URL } from "./settings"

const fromImageDataToGif = imageData => {
    const { id, title, images } = imageData
    return { id, title, image: images.original_mp4 }
}

const fetchGifs = async ({ limit = 8, keyword = 'morty', page = 0 } = {}) => {
    const url = `${API_URL}/gifs/search?api_key=${API_KEY}&limit=${limit}&offset=${page * limit}&rating=g&lang=en&q=${keyword}`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(fromImageDataToGif)
    return gifs
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