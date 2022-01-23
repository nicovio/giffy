import React from 'react'
import { Link } from 'wouter'

export default function Logo() {
  return (
    <Link to="/">
      <figure className="App-logo">
        <img alt="Giffy logo" width="64" height="40" src="/logo.png" />
      </figure>
    </Link>
  )
}
