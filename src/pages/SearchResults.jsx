import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'

function SearchResults({ params }) {
  const keyword = decodeURI(params.keyword)
  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1)
  }

  return (
    <>
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
      <button onClick={handleNextPage}>Próxima página</button>
    </>
  )
}
export default SearchResults
