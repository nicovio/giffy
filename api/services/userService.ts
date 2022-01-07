import { User, users } from '../users.ts'

function findUserByUsername(username = '') {
  return users.find((u: User) => u.username === username)
}

export const userService = { findUserByUsername }
