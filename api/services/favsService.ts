import { favs } from '../favs.ts'
import { User } from '../users.ts'

function addFav(user: User, favId: string) {
  const favs = getFavs(user)
  if (!alreadyExist(user, favId)) {
    favs.push(favId)
  }
  return favs
}

function initializeFavs(user: User) {
  favs[user.username] = []
}

function deleteFav({ username }: User, id: string) {
  favs[username] = favs[username].filter((favId) => favId !== id)
  return favs[username]
}

function alreadyExist(user: User, id: string) {
  return getFavs(user).some((favId) => favId === id)
}

function getFavs(user: User) {
  return favs[user.username]
}

export const favsService = { getFavs, addFav, deleteFav, initializeFavs }
