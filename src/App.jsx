import { Link, Route } from 'wouter'
import './App.css'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import Detail from './pages/Detail'

function App() {
  return (
    <section className="App-content">
      <Link to="/">
        <img className="logo" width="100px" src="/logo.svg" alt="Giffy logo" />
      </Link>
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={SearchResults} />
      <Route path="/gif/:id" component={Detail} />
    </section>
  )
}

export default App
