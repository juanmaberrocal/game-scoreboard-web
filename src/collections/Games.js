import Collection from './Collection';
import API from '../services/Api';

// import '../models/Game'

class Games extends Collection {
  /*
   Class
   */

  /*
   Instance
   */

  /*
   Private
   */
  static #model = 'Game';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Games.#model);
  }
}

export default Games;
