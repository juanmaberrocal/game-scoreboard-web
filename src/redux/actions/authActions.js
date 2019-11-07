import Auth from '../../services/Auth';

export const AUTH_REQUEST = 'AUTH_REQUEST'
function authRequest() {
  return {
    type: AUTH_REQUEST
  }
}

export const AUTH_SUCCESS = 'AUTH_SUCCESS'
function authSuccess(player) {
  return {
    type: AUTH_SUCCESS,
    player
  }
}

export const AUTH_FAIL = 'AUTH_FAIL'
function authFail() {
  return {
    type: AUTH_FAIL
  }
}

export const renew = () => {
  return (dispatch) => {
    dispatch(authRequest());

    return Auth.renew()
      .then((response) => {
        if (response.success) {
          dispatch(authSuccess(response.player));
          return true;
        } else {
          dispatch(authFail);
          return false;
        }
      })
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(authRequest());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return Auth.login(email, password)
      .then((response) => {
        if (response.success) {
          dispatch(authSuccess(response.player));
          return true;
        } else {
          dispatch(authFail);
          return false;
        }
      });
  }
}
