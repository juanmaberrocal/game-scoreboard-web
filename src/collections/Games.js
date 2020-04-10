import Collection from './Collection';
import API from '../services/Api';

// import '../models/Game'

class Games extends Collection {
  /*
   Class
   */
  static fetch() {
    const url = `${Games.#v1Url}?public=true`;

    return API.get(url)
      .then((response) => {
        return { success: true, games: response.serializedData };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Instance
   */

  /*
   Private
   */
  static #model = 'Game';
  static #v1Url = 'v1/games';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Games.#model);
  }
}

export default Games;
