import useForm from 'components/SearchForm/useForm'
import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'wouter'
import './SearchForm.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
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

  const handleChangeRating = (event) => {
    updateRating(event.target.value)
  }

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <select value={rating} onChange={handleChangeRating} name="rating" aria-label="Rating">
            <option disabled>Rating</option>
            {RATINGS.map((ratingOption) => (
              <option key={ratingOption} value={ratingOption}>
                {ratingOption}
              </option>
            ))}
          </select>
          <input
            id="texto-busqueda"
            aria-label="Buscar"
            placeholder="Buscar gifs..."
            type="text"
            onChange={handleChange}
            value={keyword}
            autoComplete="off"
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
