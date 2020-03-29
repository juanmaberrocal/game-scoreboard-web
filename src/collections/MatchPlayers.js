import Collection from './Collection';
import API from '../services/Api';

// import '../models/MatchPlayer'

class MatchPlayers extends Collection {
  /*
   Class
   */

  /*
   Instance
   */

  /*
   Private
   */
  static #model = 'MatchPlayer';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(MatchPlayers.#model);
  }
}

export default MatchPlayers;
