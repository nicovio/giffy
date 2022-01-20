import { USER_API_URL } from './settings'

const login = async (user) => {
  const url = `${USER_API_URL}/login`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })

  if (!response.ok) {
    throw new Error('Response is NOT ok')
  } else {
    const { jwt } = await response.json()
    return jwt
  }
}

const register = async (user) => {
  const url = `${USER_API_URL}/register`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }
  return true
}

export const loginService = { login, register }
