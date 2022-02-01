import useUser from 'hooks/useUser'
import miduIcon from 'images/midu.ico'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'wouter'
export default function NavLinks() {
  const { isLogged, logout } = useUser()

  return (
    <>
      <div className="external-links">
        <a
          aria-label="Web midudev"
          className="midulink"
          href="https://midu.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="36" height="36" src={miduIcon} alt="midudev icon" type="image/x-icon" />
        </a>
        <a
          aria-label="Github nicovio"
          href="https://github.com/nicovio/giffy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
      {isLogged ? (
        <>
          <Link aria-label="Favoritos" className="link" to="/favs"></Link>
          <button className="link logout-button" onClick={logout}>
            Cerrar sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <a className="link" href="replace">
              Ingresar
            </a>
          </Link>
          <Link to="/register">
            <a className="link" href="replace">
              Registrarse
            </a>
          </Link>
        </>
      )}
    </>
  )
}
