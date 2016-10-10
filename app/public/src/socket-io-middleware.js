export default socket => store => {
  socket.on("action", store.dispatch);

  return next => action => {
    if (action.meta && action.meta.remote) {
      socket.emit('action', action);
    }
    return next(action);
  }
}
