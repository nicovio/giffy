import AppRoutes from 'AppRoutes'
import Header from 'components/Header/Header'
import Logo from 'components/Logo'
import { GifsContextProvider } from 'context/GifsContext'
import { UserContextProvider } from 'context/UserContext'
import React, { Suspense, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './App.css'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Helmet>
        <meta name="description" content="Gif searcher" />
        {/* <link rel="canonical" href="https://giffy-nicovio.vercel.app" /> */}
      </Helmet>
      <UserContextProvider>
        <div className="App">
          <section className="App-content">
            <Header />
            <Suspense fallback={<Logo />}>
              <Logo />
              <GifsContextProvider>
                <AppRoutes />
              </GifsContextProvider>
            </Suspense>
          </section>
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
