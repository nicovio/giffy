import CustomLink from 'components/Header/NavLinks/CustomLink/CustomLink'
import { HiHeart, HiHome, HiMenuAlt1, HiOutlineX } from 'react-icons/hi'
export default function BottomNavbar({ isLogged, showSideNav, setShowSidenav }) {
  const { Icon, iconClassName } = showSideNav
    ? { Icon: HiOutlineX, iconClassName: 'close' }
    : { Icon: HiMenuAlt1, iconClassName: 'hamburguer' }

  return (
    <div className="gf-header bottom-header-mobile">
      <button aria-label="Abrir/cerrar menu" className="mobile-link" onClick={() => setShowSidenav((curr) => !curr)}>
        {Icon({ className: `icon mobile-icon ${iconClassName}` })}
      </button>
      <CustomLink aria-label="Home" className="mobile-link" to="/">
        <HiHome className="icon mobile-icon home" />
      </CustomLink>
      {isLogged() && (
        <CustomLink aria-label="Favoritos" className="mobile-link" to="/favs">
          <HiHeart className="icon mobile-icon heart" />
        </CustomLink>
      )}
    </div>
  )
}
