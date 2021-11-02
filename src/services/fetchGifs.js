const apikey = 'ufxe0pCXs2KYWHgM7PxcVVkKHx8GWdOZ'

const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&limit=2&offset=0&rating=g&lang=en`

export default async function fetchGifs({ keyword = 'morty' } = {}) {
    const url = `${apiURL}&q=${keyword}`
    const response = await fetch(url)
    const { data } = await response.json()
    const gifs = data.map(({ id, title, images, }) => ({ id, title, url: images.downsized_medium.url, }))
    console.log(gifs)
    return gifs
}