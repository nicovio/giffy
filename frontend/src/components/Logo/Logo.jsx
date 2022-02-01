import React from 'react'
import { AiOutlineFileGif } from 'react-icons/ai'
import { Link } from 'wouter'
import './Logo.css'

function Logo() {
  return (
    <Link to="/">
      <a aria-label="Home" href="replace" className="App-logo">
        <AiOutlineFileGif size="3rem" className="icon" />
        <h2 className="Gradient-text">GIFFY</h2>
      </a>
    </Link>
  )
}

export default React.memo(Logo)
