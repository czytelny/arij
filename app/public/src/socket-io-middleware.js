export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  } else {
    socket.on("action", store.dispatch)
  }
  return next(action);
}
