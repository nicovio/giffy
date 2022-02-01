import React from 'react'
import { Link } from 'wouter'
import { AiOutlineFileGif } from 'react-icons/ai'
import './Logo.css'

function Logo() {
  return (
    <Link to="/">
        <AiOutlineFileGif size="3rem" className="icon" />
        <h2 className="Gradient-text">GIFFY</h2>
      </a>
    </Link>
  )
}

export default React.memo(Logo)
