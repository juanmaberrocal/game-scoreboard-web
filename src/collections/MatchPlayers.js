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
  playerResult(playerId) {
    return this.find(match_player => match_player.playerId() === playerId);
  }

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
