import SearchForm from 'components/SearchForm/SearchForm'
import SideNav from 'components/SideNav/SideNav'
import useFixedScroll from 'hooks/useFixedScroll'
import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import BottomNavbar from './BottomNavbar/BottomNavbar'
import './MobileNavbar.css'

export default function MobileNavbar({ matchLoginOrRegister, keyword }) {
  const { isLogged } = useUser()
  const [showSideNav, setShowSidenav] = useFixedScroll(false)
  const [location] = useLocation()

  useEffect(() => {
    setShowSidenav(false)
  }, [setShowSidenav, location])

  return (
    <>
      {!matchLoginOrRegister && (
        <header className="gf-header">
          <SearchForm initialKeyword={keyword} />
        </header>
      )}
      {showSideNav && <SideNav mobile={true} />}
      <BottomNavbar showSideNav={showSideNav} setShowSidenav={setShowSidenav} isLogged={isLogged} />
    </>
  )
}
