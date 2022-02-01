import { Fav, favs } from '../favs.ts'
import { User } from '../users.ts'

function addFav(user: User, fav: Fav) {
  const favs = getFavs(user)
  if (!alreadyExist(user, fav.id)) {
    favs.push(fav)
  }
  return favs
}

function initializeFavs(user: User) {
  favs[user.username] = []
}

function deleteFav({ username }: User, id: string) {
  favs[username] = favs[username].filter((fav) => fav.id !== id)
  return favs[username]
}

function alreadyExist(user: User, id: string) {
  return getFavs(user).some((fav) => fav.id === id)
}

function getFavs(user: User) {
  return favs[user.username]
}

export const favsService = { getFavs, addFav, deleteFav, initializeFavs }
