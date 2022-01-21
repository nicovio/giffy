import { USER_API_URL } from './settings'

const validateResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json()
    throw Object.assign(new ApiError(), { ...error })
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

class ApiError {
  message
  status
  field

  constructor(message, status, field) {
    this.message = message
    this.status = status
    this.field = field
  }
}
