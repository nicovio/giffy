import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'

export default function Favourites() {
  const { favs } = useUser()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App-results">
      <h2 className="Gradient-title Gradient-text">
        <span className="bold"> Favoritos</span>
      </h2>
      <ListOfGifs gifs={favs} />
    </div>
  )
}
