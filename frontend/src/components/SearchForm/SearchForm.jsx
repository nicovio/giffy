import useForm from 'components/SearchForm/useForm'
import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'wouter'
import Rating from './Rating/Rating'
import './SearchForm.css'

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  const [, pushLocation] = useLocation()

  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

  useEffect(() => {
    if (initialKeyword) updateKeyword(initialKeyword)
  }, [updateKeyword, initialKeyword])

  const handleChange = (event) => {
    updateKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleRatingChange = (event) => {
    updateRating(event.target.value)
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <Rating rating={rating} handleRatingChange={handleRatingChange} />
          <input
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            spellCheck="false"
            maxLength={120}
            id="texto-busqueda"
            aria-label="Buscar"
            placeholder="Buscar gifs..."
            type="text"
            onChange={handleChange}
            value={keyword}
          />
          <button aria-label="Buscar" className="btn" data-testid="boton-buscar" disabled={!keyword}>
            <FaSearch focusable="false" className="search-icon" />
          </button>
        </div>
      </form>
    </>
  )
}

export default React.memo(SearchForm)
