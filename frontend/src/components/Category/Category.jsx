import Spinner from 'components/Spinner/Spinner'
import React from 'react'
import './Category.css'
import CategoryListItem from './CategoryListItem'

export default function Category({ name, options = [], loading }) {
  const spinnerStyle = { marginTop: '2rem' }

  return (
    <>
      <h2 className="App-title Category-title">{name}</h2>
      {loading ? (
        <Spinner style={spinnerStyle} />
      ) : (
        <>
          <ul className="Category-list">
            {options.map((option, index) => (
              <CategoryListItem key={option} option={option} index={index} />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
