import Logo from 'components/Logo'
import { GifsContextProvider } from 'context/GifsContext'
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet'
import { Route } from 'wouter'
import './App.css'

// Code splitting con fines didácticos
const HomePage = React.lazy(() => import('./pages/Home'))
const SearchResultsPage = React.lazy(() => import('./pages/SearchResults'))
const DetailPage = React.lazy(() => import('./pages/Detail'))
const NotFoundPage = React.lazy(() => import('./pages/error/NotFound'))

function App() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Gif searcher" />
        <link rel="canonical" href="giffy-nicovio.vercel.app" />
      </Helmet>
      <div className="App">
        <section className="App-content">
          <Suspense fallback={<Logo />}>
            <Logo />
            <GifsContextProvider>
              <Route path="/" component={HomePage} />
              <Route path="/search/:keyword" component={SearchResultsPage} />
              <Route path="/gif/:id" component={DetailPage} />
              <Route path="/404" component={NotFoundPage} />
            </GifsContextProvider>
          </Suspense>
        </section>
      </div>
    </>
  )
}

export default App
