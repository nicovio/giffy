import { Application, Router } from 'https://deno.land/x/oak@v10.1.0/mod.ts'
import { oakCors } from 'https://deno.land/x/cors@v1.2.2/mod.ts'
import 'https://deno.land/x/dotenv@v3.1.0/load.ts'
import * as flags from 'https://deno.land/std@0.120.0/flags/mod.ts'

import { userMiddleware } from './userMiddleware.ts'
import { deleteFav, getFavs, postFav, postLogin, postRegister } from './routes.ts'
import { importPrivateKey } from './helpers/importPrivateKey.ts'
import { authMiddleware } from './authMiddleware.ts'

const PEM_KEY = Deno.env.get('BASE_64_KEY')?.replace(/\\n/g, '\n') || ''
export const SECRET_KEY = await importPrivateKey(PEM_KEY)

const { args } = Deno

const DEFAULT_PORT = 8080
const portFromArgs = flags.parse(args).port
const port = portFromArgs ? Number(portFromArgs) : DEFAULT_PORT

const app = new Application()
const router = new Router()

app.use(userMiddleware, oakCors())

router
  .get('/favs', authMiddleware, getFavs)
  .post('/favs', authMiddleware, postFav)
  .post('/register', postRegister)
  .post('/login', postLogin)
  .delete('/favs/:id', authMiddleware, deleteFav)

app.addEventListener('error', (event) => {
  console.log(event.error)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen({ port })
console.log(`Started listening on port: ${port}`)
