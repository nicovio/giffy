import { Link, Route } from 'wouter'
import './App.css'
import { GifsContextProvider } from './context/GifsContext'
import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src="/logo.png" />
          </figure>
        </Link>
        <GifsContextProvider>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route path="/gif/:id" component={Detail} />
        </GifsContextProvider>
      </section>
    </div>
  )
}

export default App
