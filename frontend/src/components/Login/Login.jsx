import AccountNavbar from 'components/AccountNavbar/AccountNavbar'
import Error from 'components/Error/Error'
import useUser from 'hooks/useUser'
import React, { useEffect, useState } from 'react'
import 'styles/form.css'

export default function Login({ onLogin, showAccountNavbar = false }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLogged, isLoginloading, error, clearError } = useUser()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
  }

  useEffect(() => {
    if (isLogged) {
      onLogin()
    }
  }, [isLogged, onLogin])

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form-body">
          {showAccountNavbar && <AccountNavbar />}
          <h4 className="form-header">Iniciar Sesión</h4>
          <label htmlFor="username">Usuario</label>
          <input
            autoCapitalize="off"
            autoComplete="username"
            autoCorrect="off"
            autoFocus
            id="username"
            maxLength="35"
            onChange={(e) => setUsername(e.target.value)}
            spellCheck='false'
            type="text"
            value={username}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            autoCapitalize="off"
            autoComplete="current-password"
            autoCorrect="off"
            id="password"
            maxLength="72"
            onChange={(e) => setPassword(e.target.value)}
            spellCheck='false'
            type="password"
            value={password}
          />
          <button className="btn" disabled={!username || !password || isLoginloading}>
            {isLoginloading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </section>
        {error && <Error message={error} onClose={clearError} />}
      </form>
    </>
  )
}
