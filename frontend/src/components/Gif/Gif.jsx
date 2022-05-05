import React from 'react'
import './Gif.css'

const Gif = ({ gif }) => {
  const { title, image, slug } = gif

  return (
    <div className="Gif-container">
      <h3 className="App-title Gif-title">{title || slug}</h3>
      {gif.image && (
        <picture>
          <source height={image.height} width={image.width} srcSet={image.webp} type="image/webp" />
          <source height={image.height} width={image.width} srcSet={image.url} type="image/jpeg" />
          <img height={image.height} width={image.width} src={image.url} alt={title} loading="lazy" />
        </picture>
      )}
    </div>
  )
}

export default Gif
