import Game from '../../models/Game';

export const GAME_FETCH_REQUEST = 'GAME_FETCH_REQUEST'
function fetchRequest() {
  return {
    type: GAME_FETCH_REQUEST
  }
}

export const GAME_FETCH_SUCCESS = 'GAME_FETCH_SUCCESS'
function fetchSuccess(games) {
  return {
    type: GAME_FETCH_SUCCESS,
    games
  }
}

export const GAME_FETCH_FAIL = 'GAME_FETCH_FAIL'
function fetchFail() {
  return {
    type: GAME_FETCH_FAIL
  }
}

export const fetch = () => {
  return (dispatch) => {
    dispatch(fetchRequest());

    return Game.fetch()
      .then((response) => {
        if (response.success) {
          dispatch(fetchSuccess(response.games));
          return true;
        } else {
          dispatch(fetchFail());
          return false;
        }
      })
  }
}
