import React from 'react'
import './Gif.css'

const Gif = ({ gif }) => {
  const { title, image, slug } = gif

  return (
    <div className="Gif-container">
      <h3 className="App-title Gif-title">{title || slug}</h3>
      {gif.image && (
        <video autoPlay loop muted playsInline>
          <source src={image.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default Gif
