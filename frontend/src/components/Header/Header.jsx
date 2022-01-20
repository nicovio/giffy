import useUser from 'hooks/useUser'
import React from 'react'
import { Link, useRoute } from 'wouter'
import './Header.css'

export default function Header() {
  const { isLogged, logout } = useUser()

  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <button className="logout-button" onClick={logout}>
        Salir
      </button>
    ) : (
      <>
        <Link to="/login">Ingresar</Link>
        <Link to="/register">Registrarse</Link>
      </>
    )
  }

  const content =
    matchLogin || matchRegister ? (
      <>
        <Link to="/">Volver a home</Link>
      </>
    ) : (
      renderLoginButtons({ isLogged })
    )

  return <header className="gf-header">{content}</header>
}
