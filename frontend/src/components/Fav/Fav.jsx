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

  const [label, classname] = faved ? ['Remover GIF de favoritos', 'faved'] : ['Agregar GIF a favoritos', '']

  return (
    <>
      <button className={`gf-fav ${classname}`} onClick={handleClick}>
        <span className={classname} aria-label={label} role="img">
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
