import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import React from 'react'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1)
  }

  return (
    <div className="App-results">
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button onClick={handleNextPage}>Próxima página</button>
    </div>
  )
}
export default SearchResults
