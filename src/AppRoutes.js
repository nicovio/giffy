import React from 'react'
import { Route, Switch } from 'wouter'

// Code splitting con fines didácticos
const HomePage = React.lazy(() => import('pages/Home/Home'))
const SearchResultsPage = React.lazy(() => import('pages/SearchResults/SearchResults'))
const DetailPage = React.lazy(() => import('pages/Detail/Detail'))
const NotFoundPage = React.lazy(() => import('pages/error/NotFound'))

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/search/:keyword/:rating?" component={SearchResultsPage} />
      <Route path="/gif/:id" component={DetailPage} />
      <Route path="/:rest*" component={NotFoundPage} />
    </Switch>
  )
}
