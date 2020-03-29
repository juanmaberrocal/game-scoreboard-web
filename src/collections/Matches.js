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
  confirmed = () => (this.filter(match => match.isConfirmed()));
  pending = () => (this.filter(match => match.isPending()));
  rejected = () => (this.filter(match => match.isRejected()));

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
