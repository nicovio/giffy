import React, { useState } from 'react'
import 'styles/SearchForm.css'

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ keyword })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button data-testid="boton-buscar" disabled={!keyword}>
          Buscar
        </button>
        <input aria-label="Buscar" placeholder="Ej: taxi driver" type="text" onChange={handleChange} value={keyword} />
      </form>
    </>
  )
}

export default React.memo(SearchForm)
