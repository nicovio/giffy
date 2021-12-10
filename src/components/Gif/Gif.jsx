import React from 'react'
import 'styles/Gif.css'

const Gif = ({ gif }) => {
  const { title, image, slug } = gif

  return (
    <>
      <h3 className="App-title">{title || slug}</h3>
      {gif.image && (
        <video autoPlay loop muted playsInline>
          <source src={image.mp4} type="video/mp4" />
        </video>
      )}
    </>
  )
}

export default Gif
