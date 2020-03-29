import Players from '../../collections/Players';

const DEFAULT = {
  isFetching: false,
  lastFetched: null,
  players: (new Players())
}

const playerReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'PLAYER_FETCH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'PLAYER_FETCH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        lastFetched: Date.now(),
        players: action.players
      });
    case 'PLAYER_FETCH_FAIL':
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}

export default playerReducer;
