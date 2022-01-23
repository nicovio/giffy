const authMiddleware = async (ctx: any, next: () => Promise<unknown>) => {
  if (ctx.state.currentUser) {
    await next()
  } else {
    ctx.response.status = 401
    ctx.response.body = { message: 'Usuario no autenticado', status: 401 }
  }
}

export { authMiddleware }
