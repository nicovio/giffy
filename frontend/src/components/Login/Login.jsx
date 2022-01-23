import AccountNavbar from 'components/AccountNavbar/AccountNavbar'
import Error from 'components/Error/Error'
import useUser from 'hooks/useUser'
import React, { useEffect, useState } from 'react'
import 'styles/form.css'
import useLocation from 'wouter/use-location'
import AccountNavbar from 'components/AccountNavbar/AccountNavbar'

export default function Login({ onLogin, showAccountNavbar = false }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [, navigate] = useLocation()
  const { login, isLogged, isLoginloading, hasLoginError } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  useEffect(() => {
    if (isLogged) {
      onLogin()
    }
  }, [isLogged, navigate, onLogin])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form-body">
          {showAccountNavbar && <AccountNavbar />}
          <h4 className="form-header">Iniciar Sesión</h4>
          <label htmlFor="username">Usuario</label>
          <input
            autoComplete="username"
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            autoComplete="current-password"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="btn" disabled={!username || !password}>
            {isLoginloading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </section>
        {hasLoginError && <Error message="Usuario o contraseña incorrectos" />}
      </form>
    </>
  )
}
