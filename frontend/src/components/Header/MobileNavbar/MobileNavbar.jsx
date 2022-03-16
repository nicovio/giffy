import CustomLink from 'components/CustomLink/CustomLink'
import SearchForm from 'components/SearchForm/SearchForm'
import SideNav from 'components/SideNav/SideNav'
import useFixed from 'hooks/useFixed'
import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { HiHeart, HiHome, HiMenuAlt1, HiOutlineX } from 'react-icons/hi'
import { useLocation } from 'wouter'
import './MobileNavbar.css'

export default function MobileNavbar({ matchLoginOrRegister, keyword }) {
  const { isLogged } = useUser()
  const [showSideNav, setShowSidenav] = useFixed(false)
  const [location] = useLocation()

  useEffect(() => {
    setShowSidenav(false)
  }, [setShowSidenav, location])

  return (
    <>
      {!matchLoginOrRegister &&
        <header className="gf-header">
          <SearchForm initialKeyword={keyword} />
        </header>
      }
      {showSideNav && <SideNav mobile={true} />}
      <div className="gf-header bottom-header-mobile">
        <BottomNavbar showSideNav={showSideNav} setShowSidenav={setShowSidenav} isLogged={isLogged} />
      </div>
    </>
  )
}

const BottomNavbar = ({ isLogged, showSideNav, setShowSidenav }) => {

  return (
    <>
      <button aria-label="Abrir/cerrar menu" className="mobile-link" onClick={() => setShowSidenav((curr) => !curr)}>
        {showSideNav ? (
          <HiOutlineX className="icon mobile-icon close" />
        ) : (
          <HiMenuAlt1 className="icon mobile-icon hamburguer" />
        )}
      </button>
      <CustomLink aria-label="Home" className="mobile-link" to="/">
        <HiHome className="icon mobile-icon home" />
      </CustomLink>
      {isLogged && (
        <CustomLink aria-label="Favoritos" className="mobile-link" to="/favs">
          <HiHeart className="icon mobile-icon heart" />
        </CustomLink>
      )}
    </>
  )
}
