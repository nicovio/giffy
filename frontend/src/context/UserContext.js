import React, { useEffect, useState } from 'react'
import { favService } from 'services/favService'

const UserContext = React.createContext({})

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([])
  const [jwt, setJWT] = useState(() => localStorage.getItem('jwt'))

  useEffect(() => {
    const getFavs = async () => {
      if (!jwt) return setFavs([])
      if (jwt) {
        const favs = await favService.getFavs({ jwt })
        setFavs(favs)
      }
    }
    getFavs()
  }, [jwt])

  return (
    <UserContext.Provider
      value={{
        favs,
        jwt,
        setFavs,
        setJWT,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
