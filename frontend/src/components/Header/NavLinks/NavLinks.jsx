import CustomLink from 'components/Header/NavLinks/CustomLink/CustomLink'
import useUser from 'hooks/useUser'
import miduIcon from 'images/midu.ico'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import ExternalLink from './ExternalLink/ExternalLink'
function NavLinks() {
  const { isLogged, logout } = useUser()

  const loggedLinks = (
    <>
      <CustomLink aria-label="Favoritos" className="link" to="/favs">
        Favoritos
      </CustomLink>
      <button className="link logout-button" onClick={logout}>
        Salir
      </button>
    </>
  )

  const notLoggedLinks = (
    <>
      <CustomLink className="link" to="/login">
        Ingresar
      </CustomLink>
      <CustomLink className="link" to="/register">
        Registrarse
      </CustomLink>
    </>
  )

  return (
    <>
      <div className="external-links">
        <ExternalLink ariaLabel="Web midudev" href="https://midu.dev/" className="midulink">
          <img width="36" height="36" src={miduIcon} alt="midudev icon" type="image/x-icon" />
        </ExternalLink>
        <ExternalLink aria-label="Github nicovio" href="https://github.com/nicovio/giffy">
          <FaGithub className="icon" />
        </ExternalLink>
      </div>
      {isLogged() ? loggedLinks : notLoggedLinks}
    </>
  )
}

export default React.memo(NavLinks)
