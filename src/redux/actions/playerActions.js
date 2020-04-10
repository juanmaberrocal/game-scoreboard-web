import Players from '../../collections/Players';

export const PLAYER_FETCH_REQUEST = 'PLAYER_FETCH_REQUEST'
function fetchRequest() {
  return {
    type: PLAYER_FETCH_REQUEST
  }
}

export const PLAYER_FETCH_SUCCESS = 'PLAYER_FETCH_SUCCESS'
function fetchSuccess(players) {
  return {
    type: PLAYER_FETCH_SUCCESS,
    players
  }
}

export const PLAYER_FETCH_FAIL = 'PLAYER_FETCH_FAIL'
function fetchFail() {
  return {
    type: PLAYER_FETCH_FAIL
  }
}

export const fetch = () => {
  return (dispatch) => {
    dispatch(fetchRequest());

    return Players.fetch()
      .then((response) => {
        if (response.success) {
          dispatch(fetchSuccess(response.players));
          return true;
        } else {
          dispatch(fetchFail());
          return false;
        }
      })
  }
}
