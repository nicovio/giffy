import { USER_API_URL } from './settings'

export const validateResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json()
    throw error
  }
}

const login = async (user) => {
  const url = `${USER_API_URL}/login`
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })

  await validateResponse(response)

  const { jwt } = await response.json()
  return jwt
}

const register = async (user) => {
  const url = `${USER_API_URL}/register`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })

  await validateResponse(response)

  return true
}

export const loginService = { login, register }
