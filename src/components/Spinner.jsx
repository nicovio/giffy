import Helmet from 'react-helmet'
import 'styles/Spinner.css'

const Spinner = ({ size }) => {
  return (
    <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <div className={`Spinner ${size}`}></div>
    </>
  )
}

export default Spinner
