import Error from 'components/Error/Error'
import useMedia from 'hooks/useMedia'
import useUser from 'hooks/useUser'
import React, { useState } from 'react'
import 'styles/form.css'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login, isLoginloading, error, clearError } = useUser({ onLogin })
  const isTablet = useMedia('(max-width: 950px)')
  const autoFocus = isTablet ? {} : { autoFocus: 'on' }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(username, password)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="form-body">
          <h4 className="form-header">Iniciar Sesión</h4>
          <label htmlFor="username">Usuario</label>
          <input
            autoCorrect="off"
            spellCheck="false"
            autoComplete="username"
            {...autoFocus}
            id="username"
            maxLength="35"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            value={username}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            autoComplete="current-password"
            spellCheck="false"
            autoCorrect="off"
            id="password"
            maxLength="72"
            onChange={(e) => setPassword(e.target.value)}
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
