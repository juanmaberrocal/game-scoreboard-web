import Auth from '../../services/Auth';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
function loginSuccess(player) {
  return {
    type: LOGIN_SUCCESS,
    player
  }
}

export const LOGIN_FAIL = 'LOGIN_FAIL'
function loginFail() {
  return {
    type: LOGIN_FAIL
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(loginRequest());

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    return Auth.login(email, password)
      .then((response) => {
        if (response.success) {
          dispatch(loginSuccess(response.player));
          return true;
        } else {
          dispatch(loginFail);
          return false;
        }
      });
  }
}
