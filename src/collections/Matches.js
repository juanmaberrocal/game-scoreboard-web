import Collection from './Collection';
import API from '../services/Api';

// import '../models/Match'

class Matches extends Collection {
  /*
   Class
   */
  static fetch(fetchParams = {}) {
    const url = `${Matches.#v1Url}`;
    const params = { params: fetchParams };

    return API.get(url, params)
      .then((response) => {
        return { success: true, matches: response.serializedData };
      })
      .catch((error) => {
        return { success: false };
      });
  }

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
  static #v1Url = 'v1/matches';

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(Matches.#model);
  }
}

export default Matches;
