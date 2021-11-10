import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'

function SearchResults({ params }) {
  const keyword = decodeURIComponent(params.keyword)
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
      <h3 className="App-title">{keyword}</h3>
      <ListOfGifs gifs={gifs} loading={loading} />
    </>
  )
}
export default SearchResults
