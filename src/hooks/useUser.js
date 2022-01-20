import Context from 'context/UserContext'
import { useCallback, useContext, useState } from 'react'
import { favService } from 'services/favService'
import { loginService } from 'services/login'

export default function useUser() {
  const { jwt, setJWT, favs, setFavs } = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(
    async (username, password) => {
      try {
        setState({ loading: true, error: false })
        const jwt = await loginService.login({ username, password })
        localStorage.setItem('jwt', jwt)
        setJWT(jwt)
        setState({ loading: false, error: false })
      } catch (err) {
        localStorage.removeItem('jwt')
        setState({ loading: false, error: true })
        console.log(err)
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
    hasLoginError: state.error,
    addFav,
    deleteFav,
    isFaved,
  }
}
