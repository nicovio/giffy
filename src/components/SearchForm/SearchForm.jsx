import useForm from 'components/SearchForm/useForm'
import React from 'react'
import './SearchForm.css'
import { useLocation } from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({ initialKeyword = '', initialRating = RATINGS[0] }) {
  const [, pushLocation] = useLocation()

  const { keyword, rating, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

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
      <form onSubmit={handleSubmit}>
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
            placeholder="Ej: taxi driver"
            type="text"
            onChange={handleChange}
            value={keyword}
          />
        </div>
        <button data-testid="boton-buscar" disabled={!keyword}>
          Buscar
        </button>
      </form>
    </>
  )
}

export default React.memo(SearchForm)
