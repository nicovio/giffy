import { GIPHY_API_KEY, GIPHY_API_URL } from './settings'

const fromImageDataToGif = (imageData) => {
  const { id, title, images, slug } = imageData
  return { id, slug, title, image: images.original_mp4 }
}

const fetchGifs = async ({ limit = 15, keyword = 'morty', page = 0, rating = 'g' } = {}) => {
  const url = `${GIPHY_API_URL}/gifs/search?api_key=${GIPHY_API_KEY}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en&q=${keyword}`
  const response = await fetch(url)
  const { data, pagination } = await response.json()
  const hasNextPage = !pagination || pagination.count + pagination.offset < pagination.total_count
  const gifs = data.map(fromImageDataToGif)
  return { gifs, hasNextPage }
}

const getGifById = async (gifId) => {
  const url = `${GIPHY_API_URL}/gifs/${gifId}?api_key=${GIPHY_API_KEY}`
  const response = await fetch(url)
  const { data } = await response.json()
  return fromImageDataToGif(data)
}

const getTrendingTerms = async () => {
  const url = `${GIPHY_API_URL}/trending/searches?api_key=${GIPHY_API_KEY}`
  const response = await fetch(url)
  const { data } = await response.json()
  return data
}

const getRandomGif = async ({ tag = '' }) => {
  console.log(tag)
  const url = `${GIPHY_API_URL}/gifs/random?api_key=${GIPHY_API_KEY}&tag=${tag}`
  console.log(url)
  const response = await fetch(url)
  const { data } = await response.json()
  console.log('data', data)
  const gif = fromImageDataToGif(data)
  return gif
}

export const gifService = { fetchGifs, getGifById, getTrendingTerms, getRandomGif }
