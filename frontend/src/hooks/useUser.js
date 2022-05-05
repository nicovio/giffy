import Context from 'context/UserContext'
import { useCallback, useContext, useState } from 'react'
import { favService } from 'services/favService'
import { loginService } from 'services/login'
import { getErrorMessage } from 'utils/getErrorMessage'

export default function useUser({ onLogin = () => {} } = {}) {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: '' })
  const login = useCallback(
    async (username, password) => {
      try {
        setState({ loading: true, error: false })
        const jwt = await loginService.login({ username, password })
        localStorage.setItem('jwt', jwt)
        setJWT(jwt)
        setState({ loading: false, error: '' })
        onLogin()
      } catch (err) {
        console.log(err)
        localStorage.removeItem('jwt')
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [setJWT, onLogin]
  )

  const logout = useCallback(() => {
    localStorage.removeItem('jwt')
    setJWT(null)
  }, [setJWT])

  const addFav = useCallback(
    async (gif) => {
      try {
        clearError()
        const favs = await favService.addFav({ gif, jwt })
        setFavs(favs)
      } catch (err) {
        if (err.status === 401) {
          logout()
        }
        console.log(err)
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [setFavs, jwt, logout]
  )

  const deleteFav = useCallback(
    async ({ id }) => {
      try {
        clearError()
        const favs = await favService.deleteFav({ id, jwt })
        setFavs(favs)
      } catch (err) {
        console.error(err)
        if (err.status === 401) {
          logout()
        }
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [jwt, setFavs, logout]
  )

  const isLogged = useCallback(() => Boolean(jwt), [jwt])

  const isFaved = ({ id }) => {
    return favs?.some((fav) => fav.id === id)
  }

  const clearError = () => {
    setState((currentState) => ({ loading: currentState.loading, error: false }))
  }

  return {
    isLogged,
    login,
    logout,
    isLoginloading: state.loading,
    error: state.error,
    favs,
    addFav,
    deleteFav,
    isFaved,
    clearError,
  }
}
