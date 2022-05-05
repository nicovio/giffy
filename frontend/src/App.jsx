import AppRoutes from 'AppRoutes'
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
        <section className="App-content">
          <Suspense fallback={null}>
            <GifsContextProvider>
              <AppRoutes />
            </GifsContextProvider>
          </Suspense>
        </section>
      </UserContextProvider>
    </>
  )
}

export default App
