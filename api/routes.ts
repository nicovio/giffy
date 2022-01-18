import { Context } from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import { userService } from './services/userService.ts'
import { favsService } from './services/favsService.ts'
import { User } from './users.ts'

export const getFavs = (ctx: Context) => {
  const user = ctx.state.currentUser
  ctx.response.status = 200
  ctx.response.body = { favs: favsService.getFavs(user) }
}

export const postLogin = async (ctx: Context) => {
  const { value } = await ctx.request.body()
  const { username, password } = await value

  const jwt = await userService.login(username, password)

  if (!jwt) {
    ctx.response.status = 401
  } else {
    ctx.response.status = 201
    ctx.response.body = { jwt }
  }
}

export const postFav = async (ctx: any) => {
  const { id } = ctx.params
  const { currentUser } = ctx.state

  const favs = favsService.addFav(currentUser, id)

  ctx.response.body = { favs }
  ctx.response.status = 201
}

export const deleteFav = async (ctx: any) => {
  const { id } = ctx.params
  const user = ctx.state.currentUser

  const updatedFavs = favsService.deleteFav(user, id)

  ctx.response.body = { favs: updatedFavs }
  ctx.response.status = 200
}

export const postRegister = async (ctx: any) => {
  const { value } = await ctx.request.body()
  const user: User = await value
  await userService.register(user)
  ctx.response.status = 200
}
