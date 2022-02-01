import Header from 'components/Header/Header'
import useMedia from 'hooks/useMedia'
import React, { useState } from 'react'
import { Route, Switch } from 'wouter'

// Code splitting con fines didácticos
const HomePage = React.lazy(() => import('pages/Home/Home'))
const SearchResultsPage = React.lazy(() => import('pages/SearchResults/SearchResults'))
const DetailPage = React.lazy(() => import('pages/Detail/Detail'))
const NotFoundPage = React.lazy(() => import('pages/Error/NotFound'))
const LoginPage = React.lazy(() => import('pages/Login/LoginPage'))
const RegisterPage = React.lazy(() => import('pages/Register/RegisterPage'))
const SideNav = React.lazy(() => import('components/SideNav/SideNav'))
const FavouritesPage = React.lazy(() => import('pages/Favourites/Favourites'))

const NestedRoutesPage = React.memo(({ showSideNav }) => {
  const isTablet = useMedia('(max-width: 800px)')

  return (
    <>
      {(!isTablet || showSideNav) && <SideNav />}
      <div className="App-main">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/search/:keyword/:rating?" component={SearchResultsPage} />
          <Route path="/gif/:id" component={DetailPage} />
          <Route path="/favs" component={FavouritesPage} />
          <Route path="/:any*" component={NotFoundPage} />
        </Switch>
      </div>
    </>
  )
})

export default function AppRoutes() {
  const [showSideNav, setShowSidenav] = useState(false)

  return (
    <>
      <Header setShowSidenav={setShowSidenav} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/:rest*" component={() => <NestedRoutesPage showSideNav={showSideNav} />} />
      </Switch>
    </>
  )
}
