export default store => next => action => {
  if (action.meta && action.meta.remote) {
    fetch("/head", {
        method: "HEAD",
        credentials: 'same-origin',
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      }
    ).then(function (response) {
      if (response.status === 401) {
        window.location = "/login"
      }
    });
  }
  return next(action);
};

