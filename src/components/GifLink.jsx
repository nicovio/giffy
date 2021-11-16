import React from 'react'
import 'styles/GifLink.css'
import { Link } from 'wouter'
import Gif from './Gif'

export default function GifLink({ gif }) {
  return (
    <Link href={`/gif/${gif.id}`}>
      <a href="replace" className="Gif-link">
        <Gif gif={gif}></Gif>
      </a>
    </Link>
  )
}
