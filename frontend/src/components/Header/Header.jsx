import Logo from 'components/Logo/Logo'
import SearchForm from 'components/SearchForm/SearchForm'
import useMedia from 'hooks/useMedia'
import useUser from 'hooks/useUser'
import miduIcon from 'images/midu.ico'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link, useRoute } from 'wouter'
import './Header.css'

function Header({ setShowSidenav }) {
  const { isLogged, logout } = useUser()

  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')

  const isMobile = useMedia('(max-width: 543.5px)')

  const matchLoginOrRegister = matchLogin || matchRegister

  const [, params] = useRoute('/search/:keyword/:rating?')

  const keyword = decodeURI(params?.keyword || '')

  const DesktopNavbar = ({ isLogged }) => {
    return (
      <>
        {isLogged ? (
          <>
            <Link to="/favs">Favoritos</Link>
            <button className="logout-button" onClick={logout}>
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Ingresar</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </>
    )
  }

  return (
    <header className="gf-header">
      <Logo />
      {!matchLoginOrRegister && <SearchForm initialKeyword={keyword} />}
      <div className="links">
        <a className="midulink" href="https://midu.dev/" target="_blank" rel="noopener noreferrer">
          <img width="36" height="36" src={miduIcon} alt="midudev icon" type="image/x-icon" />
        </a>

        <a href="https://github.com/nicovio/giffy" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        {isMobile ? null : DesktopNavbar({ isLogged })}
      </div>
    </header>
  )
}

export default React.memo(Header)
