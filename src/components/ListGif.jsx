import React from 'react'
import { Link } from 'wouter'
import Gif from './Gif'
import '../styles/ListGif.css'

export default function ListGif({ gif }) {
  return (
    <Link href={`/gif/${gif.id}`}>
      <a href="replace" className="Gif-link">
        <Gif gif={gif}></Gif>
      </a>
    </Link>
  )
}
