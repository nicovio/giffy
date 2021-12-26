import React from 'react'
import { Link } from 'wouter'

export default function CategoryListItem({ option, index }) {
  const getMultiColorCategory = () => {
    const NEED_WHITE_COLOR = [3]
    const colorIndex = (index % 5) + 1
    const needWhite = NEED_WHITE_COLOR.includes(colorIndex)
    const colorText = needWhite ? 'white' : 'var(--bg-color)'

    return {
      backgroundColor: `var(--brand-color_${colorIndex})`,
      color: `${colorText}`,
    }
  }

  return (
    <li>
      <Link style={getMultiColorCategory()} className="Category-link" to={`/search/${option}`}>
        {option}
      </Link>
    </li>
  )
}
