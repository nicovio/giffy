import GifsContext from 'context/GifsContext'
import { useContext } from 'react'

export default function useGlobalGifs() {
  return useContext(GifsContext).gifs
}
