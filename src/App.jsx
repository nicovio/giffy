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
          <img className="logo" width="100px" src="/logo.svg" alt="Giffy logo" />
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
