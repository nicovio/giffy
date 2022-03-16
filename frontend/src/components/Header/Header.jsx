import useMedia from 'hooks/useMedia'
import React from 'react'
import { useRoute } from 'wouter'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar'
import './Header.css'
import MobileNavbar from './MobileNavbar/MobileNavbar'

function Header() {
  const [matchLogin] = useRoute('/login')
  const [matchRegister] = useRoute('/register')
  const [, params] = useRoute('/search/:keyword/:rating?')

  const isTablet = useMedia('(max-width: 950px)')

  const matchLoginOrRegister = matchLogin || matchRegister

  const keyword = decodeURI(params?.keyword || '')

  return (
    <>
      {isTablet ? (
        <MobileNavbar matchLoginOrRegister={matchLoginOrRegister} keyword={keyword} />
      ) : (
        <DesktopNavbar matchLoginOrRegister={matchLoginOrRegister} keyword={keyword} />
      )}
    </>
  )
}

export default React.memo(Header)
