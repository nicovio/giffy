import { GIPHY_API_KEY, GIPHY_API_URL } from './settings'

const fromImageDataToGif = ({ data, rendition }) => {
  const defaultSize = 'fixed_height'
  const { id, title, images, slug } = data
  return { id, slug, title, image: images[rendition || defaultSize] }
}

const fetchGifs = async ({ limit = 15, keyword = 'morty', page = 0, rating = 'g' } = {}) => {
  const offset = page * limit
  const params = `api_key=${GIPHY_API_KEY}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en&q=${keyword}`
  const url = `${GIPHY_API_URL}/gifs/search?${params}`
  const response = await fetch(url)
  const { data, pagination } = await response.json()
  const hasNextPage = !pagination || pagination.count + pagination.offset < pagination.total_count
  const gifs = data.map((imageData) => fromImageDataToGif({ data: imageData }))
  return { gifs, hasNextPage }
}

const getGifById = async (gifId) => {
  const url = `${GIPHY_API_URL}/gifs/${gifId}?api_key=${GIPHY_API_KEY}`
  const response = await fetch(url)
  const { data } = await response.json()
  return fromImageDataToGif({ data, rendition: 'original' })
}

const getTrendingTerms = async () => {
  const url = `${GIPHY_API_URL}/trending/searches?api_key=${GIPHY_API_KEY}`
  const response = await fetch(url)
  const { data } = await response.json()
  return data
}

const getRandomGif = async ({ tag = '' }) => {
  const url = `${GIPHY_API_URL}/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`
  const response = await fetch(url)
  const { data } = await response.json()
  const gif = fromImageDataToGif({ data, rendition: 'original' })
  return gif
}

export const gifService = { fetchGifs, getGifById, getTrendingTerms, getRandomGif }
