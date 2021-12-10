import React from 'react'
import { Link } from 'wouter'
import 'styles/Category.css'

export default function Category({ name, options = [] }) {
  return (
    <div>
      <h2 className="App-title">{name}</h2>
      <ul className="Category-list">
        {options.map((option) => (
          <li key={option}>
            <Link className="Category-link" to={`/search/${option}`}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
