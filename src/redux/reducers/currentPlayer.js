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
    case 'AUTH_REQUEST':
      return Object.assign({}, state, {
        status: STATUS.Authenticating
      });
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        status: STATUS.Authenticated,
        player: action.player
      });
    case 'AUTH_FAIL':
      return Object.assign({}, state, {
        status: STATUS.Unauthenticated,
        player: undefined
      });
    default:
      return state
  }
}

export default currentPlayer;
