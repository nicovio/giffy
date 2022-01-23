import Context from 'context/UserContext'
import { useCallback, useContext, useState } from 'react'
import { favService } from 'services/favService'
import { loginService } from 'services/login'
import { getErrorMessage } from 'utils/getErrorMessage'

export default function useUser() {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: '' })

  const login = useCallback(
    async (username, password) => {
      try {
        setState((currentState) => ({ loading: true, error: currentState.error }))
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
  }, [setJWT])

  const addFav = useCallback(
    async ({ id }) => {
      try {
        const favs = await favService.addFav({ id, jwt })
        setFavs(favs)
      } catch (err) {
        console.error(err)
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
      }
    },
    [jwt, setFavs]
  )

  const isFaved = ({ id }) => {
    return favs.some((favId) => favId === id)
  }

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    isLoginloading: state.loading,
    error: state.error,
    addFav,
    deleteFav,
    isFaved,
  }
}
