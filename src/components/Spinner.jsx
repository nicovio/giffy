import Helmet from 'react-helmet'
import 'styles/Spinner.css'

const Spinner = ({ style }) => {
  return (
    <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <div style={style} className={`Spinner`}>
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
