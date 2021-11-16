import React from 'react'
import 'styles/Gif.css'

const Gif = ({ gif }) => {
  const { title, image } = gif

  return (
    <>
      <h4 className="App-title">{title}</h4>
      <video autoPlay loop muted playsInline>
        <source src={image?.mp4} type="video/mp4" />
      </video>
    </>
  )
}

export default Gif
