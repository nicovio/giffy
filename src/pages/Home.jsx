import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from '../components/ListOfGifs'
import useGifs from '../hooks/useGifs'
import '../styles/Home.css'

const GIFS_POPULARES = ['Matrix', 'Argentina', 'Colombia', 'Ecuador']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { loading, gifs } = useGifs()

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input aria-label="Buscar" placeholder="Buscar..." type="text" onChange={handleChange} value={keyword} />
        <button>Buscar</button>
      </form>
      <h3>Última busqueda</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
      <h3>Los gifs más populares</h3>
      <ul>
        {GIFS_POPULARES.map((gif) => (
          <li key={gif}>
            <Link to={`/search/${gif}`}>{gif}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
