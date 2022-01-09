import AppRoutes from 'AppRoutes'
import Logo from 'components/Logo'
import { GifsContextProvider } from 'context/GifsContext'
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
        <link rel="canonical" href="https://giffy-nicovio.vercel.app" />
      </Helmet>
      <div className="App">
        <section className="App-content">
          <Suspense fallback={<Logo />}>
            <Logo />
            <GifsContextProvider>
              <AppRoutes />
            </GifsContextProvider>
          </Suspense>
        </section>
      </div>
    </>
  )
}

export default App
