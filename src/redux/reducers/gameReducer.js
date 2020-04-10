import Games from '../../collections/Games';

const DEFAULT = {
  isFetching: false,
  lastFetched: null,
  games: (new Games())
}

const gameReducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case 'GAME_FETCH_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'GAME_FETCH_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        lastFetched: Date.now(),
        games: action.games
      });
    case 'GAME_FETCH_FAIL':
      return Object.assign({}, state, {
        isFetching: false
      });
    default:
      return state
  }
}

export default gameReducer;
