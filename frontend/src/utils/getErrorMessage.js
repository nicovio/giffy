export const getErrorMessage = (error) => {
  if (!error.status) {
    return 'Fallo la conexión con el servidor'
  } else {
    return error.message
  }
}
