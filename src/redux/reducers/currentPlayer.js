const STATUS = {
  Uninitialized: 'Uninitialized',
  Authenticated: 'Authenticated',
  Authenticating: 'Authenticating',
  Unauthenticated: 'Unauthenticated'
}

const DEFAULT = {
  status: STATUS.Uninitialized,
  player: undefined
}

const currentPlayer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        status: STATUS.Authenticating
      });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        status: STATUS.Authenticated,
        player: action.player
      });
    case 'LOGIN_FAIL':
      return Object.assign({}, state, {
        status: STATUS.Unauthenticated,
        player: undefined
      });
    default:
      return state
  }
}

export default currentPlayer;
