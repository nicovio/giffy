import { getNumericDate, Header } from 'https://deno.land/x/djwt@v2.4/mod.ts'
import { User } from '../users.ts'

const EXPIRATION_TIME = 60

export const HEADER: Header = {
  // alg: 'HS256',
  alg: 'HS512',
  typ: 'JWT',
}

export function getPayload(user: User) {
  return {
    iss: user.username,
    exp: getNumericDate(EXPIRATION_TIME),
  }
}
