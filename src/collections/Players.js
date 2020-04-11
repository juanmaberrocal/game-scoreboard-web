import Collection from './Collection';
import API from '../services/Api';

// import '../models/Player'

class Players extends Collection {
  /*
   Class
   */
  static fetch() {
    const url = `${Players.#v1Url}?public=true`;

    return API.get(url)
      .then((response) => {
        return { success: true, players: response.serializedData };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Instance
   */
  sortByNickname() {
    return this.sort((a, b) => {
      const nameA = a.nickname.toUpperCase(); // ignore upper and lowercase
      const nameB = b.nickname.toUpperCase(); // ignore upper and lowercase

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
  static #model = 'Player';
  static #v1Url = 'v1/players';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Players.#model);
  }
}

export default Players;
