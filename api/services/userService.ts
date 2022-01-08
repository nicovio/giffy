import { compareSync, hashSync } from 'https://deno.land/x/bcrypt@v0.2.4/mod.ts'
import { create } from 'https://deno.land/x/djwt@v2.4/mod.ts'
import { getPayload, HEADER } from '../helpers/getPayload.ts'
import { SECRET_KEY } from '../server.ts'
import { User, users } from '../users.ts'
import { favsService } from './favsService.ts'

async function register(userInput: User) {
  const { username, password } = userInput

  const hashedPassword = hashSync(password)

  const newUser: User = {
    username,
    password: hashedPassword,
  }

  const alreadyRegistered = alreadyExist(newUser)

  if (!alreadyRegistered) {
    users.push(newUser)
    favsService.initializeFavs(newUser)
  }

  return alreadyRegistered
}

function alreadyExist(newUser: User) {
  return users.some((user) => user.username === newUser.username)
}

async function login(username: string, password: string) {
  const user: User | undefined = findUserByUsername(username)
  let jwt

  if (user && compareSync(password, user.password)) {
    const payload = getPayload(user)
    jwt = await create(HEADER, payload, SECRET_KEY)
  }

  return jwt
}

function findUserByUsername(username = '') {
  return users.find((u: User) => u.username === username)
}

export const userService = { findUserByUsername, login, register }
