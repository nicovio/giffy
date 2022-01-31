import React from 'react'
import { Link } from 'wouter'
import { AiOutlineFileGif } from 'react-icons/ai'
import './Logo.css'

function Logo() {
  return (
    <Link to="/">
      <a href="replace" className="App-logo">
        <AiOutlineFileGif className="icon" />
        <h2 className="gradient-text ">GIFFY</h2>
      </a>
    </Link>
  )
}

export default React.memo(Logo)
