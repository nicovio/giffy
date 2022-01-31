export const getErrorMessage = (error) => {
  if (!error.status) {
    return 'Falló la conexión con el servidor'
  } else {
    return error.message
  }
}
