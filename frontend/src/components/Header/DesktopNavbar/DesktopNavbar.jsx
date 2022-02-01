import Logo from 'components/Logo/Logo'
import SearchForm from 'components/SearchForm/SearchForm'
import SideNav from 'components/SideNav/SideNav'
import React from 'react'
import NavLinks from '../NavLinks/NavLinks'

const DesktopNavbar = ({ matchLoginOrRegister, keyword }) => {
  return (
    <>
      <Logo />
      {!matchLoginOrRegister && <SearchForm initialKeyword={keyword} />}
      <div className="links">
        <NavLinks />
      </div>
      {!matchLoginOrRegister && <SideNav />}
    </>
  )
}

export default DesktopNavbar
