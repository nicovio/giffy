import React from 'react'
import './Category.css'
import CategoryListItem from './CategoryListItem'
import Spinner from 'components/Spinner/Spinner'

export default function Category({ name, options = [], loading }) {
  const spinnerStyle = { margin: '2rem 0 0 0' }

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
