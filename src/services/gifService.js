
const apikey = 'ufxe0pCXs2KYWHgM7PxcVVkKHx8GWdOZ'

const apiURL = `https://api.giphy.com/v1/gifs`

const fetchGifs = async ({ keyword = 'morty' } = {}) => {
    const url = `${apiURL}/search?api_key=${apikey}&limit=15&offset=0&rating=g&lang=en&q=${keyword}`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(({ id, title, images, }) => ({ id, title, url: images.downsized_medium.url, }))
    return gifs
}

const getGifById = async (gifId) => {
    const url = `${apiURL}/${gifId}?api_key=${apikey}`
    const response = await fetch(url)
    const { data } = await response.json()
    const { id, title, images } = data
    return { id, title, url: images.downsized_medium.url }
}

export const gifService = { fetchGifs, getGifById }