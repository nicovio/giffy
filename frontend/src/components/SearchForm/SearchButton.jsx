import React from 'react'
import { FaSearch } from 'react-icons/fa'

function SearchButton({ disabled }) {
  return (
    <button type="submit" aria-label="Buscar" className="btn" data-testid="boton-buscar" disabled={disabled}>
      <FaSearch focusable="false" className="search-icon" />
    </button>
  )
}

export default React.memo(SearchButton)
