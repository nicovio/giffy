import { compareSync } from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts'
import { create } from 'https://deno.land/x/djwt@v2.4/mod.ts'
import { users, User } from './users.ts'
import { SECRET_KEY } from './server.ts'
import { Context } from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import { favs } from './favs.ts'
import { getPayload, HEADER } from './helpers/getPayload.ts'
import { userService } from './services/UserService.ts'

export const getFavs = (ctx: Context) => {
  const { username }: User = ctx.state.currentUser
  ctx.response.status = 200
  ctx.response.body = { favs: favs[username] }
}

export const postLogin = async (ctx: Context) => {
  const { value } = await ctx.request.body()
  const { username, password } = await value

  const user: User | undefined = userService.findUserByUsername(username)

  if (!user || !compareSync(password, user.password)) {
    ctx.response.status = 401
  } else {
    const payload = getPayload(user)
    const jwt = await create(HEADER, payload, SECRET_KEY)
    ctx.response.status = 201
    ctx.response.body = { jwt }
  }
}
