import React from 'react'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
export default function Rating({ rating, handleRatingChange }) {
  return (
    <select value={rating} onChange={handleRatingChange} name="rating" aria-label="Rating">
      <option disabled>Rating</option>
      {RATINGS.map((ratingOption) => (
        <option key={ratingOption} value={ratingOption}>
          {ratingOption}
        </option>
      ))}
    </select>
  )
}
