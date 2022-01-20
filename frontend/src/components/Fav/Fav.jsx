import Login from 'components/Login/Login'
import Modal from 'components/Modal/Modal'
import useUser from 'hooks/useUser'
import React, { useCallback, useState } from 'react'
import './Fav.css'

export default function Fav({ id }) {
  const [showModal, setShowModal] = useState(false)
  const { isLogged, addFav, deleteFav, isFaved } = useUser()
  const faved = isFaved({ id })

  const handleClick = () => {
    if (!isLogged) {
      return setShowModal(true)
    }
    faved ? deleteFav({ id }) : addFav({ id })
  }

  const handleClose = useCallback(() => {
    setShowModal(false)
  }, [])

  const [label, color] = faved ? ['Remover GIF de favoritos', 'red'] : ['Agregar GIF a favoritos', 'white']

  const heartStyles = { textShadow: `0 0 0 ${color}` }

  return (
    <>
      <button className="gf-fav" onClick={handleClick}>
        <span style={heartStyles} aria-label={label} role="img">
          ❤
        </span>
      </button>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={handleClose} />
        </Modal>
      )}
    </>
  )
}
