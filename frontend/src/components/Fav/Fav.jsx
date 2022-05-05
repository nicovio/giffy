import Login from 'components/Login/Login'
import Modal from 'components/Modal/Modal'
import useFixedScroll from 'hooks/useFixedScroll'
import useUser from 'hooks/useUser'
import React, { useCallback } from 'react'
import { FaHeart } from 'react-icons/fa'

export default function Fav({ className, gif }) {
  const [showModal, setShowModal] = useFixedScroll(false)
  const { isLogged, addFav, deleteFav, isFaved } = useUser()
  const faved = isFaved(gif)

  const handleClick = useCallback(() => {
    if (isLogged()) {
      faved ? deleteFav(gif) : addFav(gif)
    } else {
      setShowModal(true)
    }
  }, [addFav, deleteFav, faved, gif, isLogged, setShowModal])

  const handleClose = useCallback(() => {
    setShowModal(false)
  }, [setShowModal])

  const onLogin = useCallback(() => {
    handleClick()
    handleClose()
  }, [handleClose, handleClick])

  const [label, favedClassname] = faved ? ['Remover GIF de favoritos', 'faved'] : ['Agregar GIF a favoritos', '']

  return (
    <>
      <button aria-label="Cambiar favorito" className={`btn ${className}`} onClick={handleClick}>
        <span className={favedClassname} aria-label={label} role="img">
          <FaHeart />
        </span>
      </button>

      {showModal && (
        <Modal onClose={handleClose}>
          <Login onLogin={onLogin} />
        </Modal>
      )}
    </>
  )
}
