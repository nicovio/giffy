import Copy from 'components/Copy/Copy'
import Fav from 'components/Fav/Fav'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import './GifButtons.css'

export default function GifButtons({ gif }) {
  const goBack = () => {
    window.history.back()
  }
  return (
    <div className="botonera">
      <button onClick={goBack} className="btn go-back ">
        <FaArrowLeft size="1.2rem" />
      </button>
      <Fav className="gf-fav" gif={gif} />
      <Copy className="gf-copy" gif={gif} />
    </div>
  )
}
