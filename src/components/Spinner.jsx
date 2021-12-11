import Helmet from 'react-helmet'
import 'styles/Spinner.css'

const Spinner = () => {
  return (
    <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <div className={`Spinner`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default Spinner
