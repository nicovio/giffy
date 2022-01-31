import TrendingSearches from 'components/TrendingSearches/TrendingSearches'
import React from 'react'
import './SideNav.css'

function SideNav() {
  return (
    <div className="sidenav">
      <TrendingSearches />
    </div>
  )
}

export default React.memo(SideNav)
