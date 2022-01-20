import React from 'react'
import { Link } from 'wouter'

export default function Logo() {
  return (
    <Link to="/">
      <figure className="App-logo">
        <img alt="Giffy logo" src="/logo.png" />
      </figure>
    </Link>
  )
}
