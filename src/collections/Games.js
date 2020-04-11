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
  sortByName() {
    return this.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

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
