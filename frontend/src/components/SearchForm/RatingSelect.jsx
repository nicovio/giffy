import React from 'react'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function RatingSelect({ rating, handleRatingChange }) {
  console.log("rating")
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

export default React.memo(RatingSelect)
