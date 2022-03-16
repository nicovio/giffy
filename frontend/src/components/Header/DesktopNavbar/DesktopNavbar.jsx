import Logo from 'components/Logo/Logo'
import SearchForm from 'components/SearchForm/SearchForm'
import SideNav from 'components/SideNav/SideNav'
import React from 'react'
import NavLinks from '../NavLinks/NavLinks'

const DesktopNavbar = ({ matchLoginOrRegister, keyword }) => {
  return (
    <header className="gf-header">
      <Logo />
      {!matchLoginOrRegister && <SearchForm initialKeyword={keyword} />}
      <div className="links">
        <NavLinks />
      </div>
      {!matchLoginOrRegister && <SideNav />}
    </header>
  )
}

export default DesktopNavbar
