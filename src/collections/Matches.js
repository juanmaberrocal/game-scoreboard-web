import Collection from './Collection';
import API from '../services/Api';

// import '../models/Match'

class Matches extends Collection {
  /*
   Class
   */

  /*
   Instance
   */

  /*
   Private
   */
  static #model = 'Match';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Matches.#model);
  }
}

export default Matches;
