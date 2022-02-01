import Login from 'components/Login/Login'
import Modal from 'components/Modal/Modal'
import useFixed from 'hooks/useFixed'
import useUser from 'hooks/useUser'
import React, { useCallback } from 'react'
import { FaHeart } from 'react-icons/fa'

export default function Fav({ className, gif }) {
  const [showModal, setShowModal] = useFixed(false)
  const { isLogged, addFav, deleteFav, isFaved } = useUser()
  const faved = isFaved({ id: gif.id })

  const handleClick = useCallback(() => {
    if (!isLogged) {
      return setShowModal(true)
    }
    faved ? deleteFav({ id: gif.id }) : addFav({ gif })
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
      <button className={`btn ${className} ${favedClassname}`} onClick={handleClick}>
        <span className={favedClassname} aria-label={label} role="img">
          <FaHeart className={favedClassname} />
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
