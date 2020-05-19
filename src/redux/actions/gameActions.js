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

export const fetch = (player) => {
  return (dispatch) => {
    dispatch(fetchRequest());

    return player.games()
      .then((response) => {
        if (response.success) {
          dispatch(fetchSuccess(response.games));
        } else {
          dispatch(fetchFail());
        }

        return response;
      })
  }
}
