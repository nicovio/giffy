import NavLinks from 'components/Header/NavLinks/NavLinks'
import Logo from 'components/Logo/Logo'
import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import React from 'react'
import './SideNav.css'

function SideNav({ mobile = false }) {
  return (
    <div className="sidenav ">
      {mobile && (
        <div className="mobile-top-header">
          <Logo />
          <NavLinks />
        </div>
      )}
      <TrendingSearches />
    </div>
  )
}

export default React.memo(SideNav)
