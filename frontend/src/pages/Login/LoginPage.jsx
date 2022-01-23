import Login from 'components/Login/Login'
import Helmet from 'react-helmet'
import { useLocation } from 'wouter'

export default function LoginPage() {
  const [, navigate] = useLocation()

  const onLogin = () => {
    navigate('/')
  }

  return (
    <>
      <Helmet>
        <title>Ingresar | Giffy</title>
      </Helmet>
      <Login onLogin={onLogin} showAccountNavbar={true} />
    </>
  )
}
