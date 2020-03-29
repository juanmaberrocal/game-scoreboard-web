import Collection from './Collection';
import API from '../services/Api';

// import '../models/Player'

class Players extends Collection {
  /*
   Class
   */

  /*
   Instance
   */

  /*
   Private
   */
  static #model = 'Player';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Players.#model);
  }
}

export default Players;
