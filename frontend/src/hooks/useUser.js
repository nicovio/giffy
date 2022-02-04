import Context from 'context/UserContext'
import { useCallback, useContext, useState } from 'react'
import { favService } from 'services/favService'
import { loginService } from 'services/login'
import { getErrorMessage } from 'utils/getErrorMessage'
import { useLocation } from 'wouter'

export default function useUser() {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: '' })
  const [, navigate] = useLocation()

  const login = useCallback(
    async (username, password) => {
      try {
        setState({ loading: true, error: false })
        const jwt = await loginService.login({ username, password })
        localStorage.setItem('jwt', jwt)
        setJWT(jwt)
        setState({ loading: false, error: '' })
      } catch (err) {
        console.log(err)
        localStorage.removeItem('jwt')
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [setJWT]
  )

  const logout = useCallback(() => {
    localStorage.removeItem('jwt')
    setJWT(null)
    navigate('/')
  }, [setJWT, navigate])

  const addFav = useCallback(
    async ({ gif }) => {
      try {
        const favs = await favService.addFav({ gif, jwt })
        setFavs(favs)
      } catch (err) {
        console.error(err)
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [setFavs, jwt]
  )

  const deleteFav = useCallback(
    async ({ id }) => {
      try {
        const favs = await favService.deleteFav({ id, jwt })
        setFavs(favs)
      } catch (err) {
        console.error(err)
        const message = getErrorMessage(err)
        setState({ loading: false, error: message })
      }
    },
    [jwt, setFavs]
  )

  const isFaved = ({ id }) => {
    return favs.some((fav) => fav.id === id)
  }

  const clearError = () => {
    setState((currentState) => ({ loading: currentState.loading, error: false }))
  }

  return {
    isLogged: Boolean(jwt),
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
