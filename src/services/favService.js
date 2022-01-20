import { USER_API_URL } from './settings'

const addFav = async ({ id, jwt }) => {
  const url = `${USER_API_URL}/favs/${id}`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
  })

  if (!response.ok) {
    throw new Error('Response is NOT ok')
  } else {
    const { favs } = await response.json()
    return favs
  }
}

const deleteFav = async ({ id, jwt }) => {
  const url = `${USER_API_URL}/favs/${id}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
  })

  if (!response.ok) {
    throw new Error('Response is NOT ok')
  } else {
    const { favs } = await response.json()
    return favs
  }
}

const getFavs = async ({ jwt }) => {
  const url = `${USER_API_URL}/favs/`
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
  })

  if (!response.ok) {
    throw new Error('Response is NOT ok')
  } else {
    const { favs } = await response.json()
    return favs
  }
}

export const favService = { getFavs, addFav, deleteFav }
