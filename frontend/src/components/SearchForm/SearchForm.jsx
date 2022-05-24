import useForm from 'components/SearchForm/useForm'
import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'wouter'
import RatingSelect from './RatingSelect'
import SearchButton from './SearchButton'
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

  const handleRatingChange = useCallback(
    (event) => {
      updateRating(event.target.value)
    },
    [updateRating]
  )

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="inputs-container">
        <RatingSelect rating={rating} handleRatingChange={handleRatingChange} />
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
        <SearchButton disabled={!keyword} />
      </div>
    </form>
  )
}

export default React.memo(SearchForm)
