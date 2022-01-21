import React from 'react'
import { Link, useRoute } from 'wouter'
import './AccountNavbar.css'

export default function AccountNavbar() {
  const [matchRegister] = useRoute('/register')

  return (
    <div className="navbar">
      <Link to="/login" className={`link ${!matchRegister ? 'active' : ''}`}>
        Ingresar
      </Link>
      <Link to="/register" className={`link ${matchRegister ? 'active' : ''}`}>
        Registrarse
      </Link>
    </div>
  )
}
