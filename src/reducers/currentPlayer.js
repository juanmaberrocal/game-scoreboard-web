const STATUS = {
  Uninitialized: 'Uninitialized',
  Authenticated: 'Authenticated',
  Authenticating: 'Authenticating',
  Unauthenticated: 'Unauthenticated'
}

const DEFAULT = {
  player: undefined,
  status: STATUS.Uninitialized
}

const currentPlayer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        status: STATUS.Authenticating
      });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        player: action.player,
        status: STATUS.Authenticated
      });
    case 'LOGIN_FAIL':
      return Object.assign({}, state, {
        status: STATUS.Unauthenticated
      });
    default:
      return state
  }
}

export default currentPlayer;
