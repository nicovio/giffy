import { verify, Payload } from 'https://deno.land/x/djwt@v2.4/mod.ts'
import { User } from './users.ts'
import { SECRET_KEY } from './server.ts'
import { Context } from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import { userService } from './services/UserService.ts'

const userMiddleware = async (ctx: Context, next: () => Promise<unknown>) => {
  // Get JWT from request if available

  const header = ctx.request.headers.get('Authorization')

  const jwt = header?.split('Bearer ')[1]

  console.log('using: ', { jwt })

  if (jwt) {
    // Validate JWT and if it is invalid delete from cookie
    try {
      const payload: Payload = await verify(jwt, SECRET_KEY)

      if (payload) {
        // If it is valid select user and save in context state
        const user: User | undefined = userService.findUserByUsername(payload.iss)
        ctx.state.currentUser = user
        console.log('found', { user })
      } else {
        ctx.cookies.delete('jwt')
      }
    } catch (e) {
      ctx.cookies.delete('jwt')
      console.log(e)
    }
  }
  await next()
}

export { userMiddleware }
