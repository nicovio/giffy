import React from 'react'
import { Link } from 'wouter'
import '../styles/Home.css'

const GIFS_POPULARES = ['Matrix', 'Argentina', 'Colombia', 'Ecuador']

export default function Home() {
  return (
    <div className="links-container">
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
