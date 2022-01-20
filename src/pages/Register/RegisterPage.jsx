import Register from 'components/Register/Register'
import Helmet from 'react-helmet'

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Registrarse | Giffy</title>
      </Helmet>
      <Register />
    </>
  )
}
