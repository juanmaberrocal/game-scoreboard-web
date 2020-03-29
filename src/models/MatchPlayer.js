import Model from './Model';
import API from '../services/Api';

class MatchPlayer extends Model {
  /*
   Class
   */

  /*
   Instance
   */
  isConfirmed = () => (this.result_status === "confirmed");
  isPending = () => (this.result_status === "pending");
  isRejected = () => (this.result_status === "rejected");

  /*
   Private
   */
  static #attributes = [
    'result_status',
    'winner',
  ];

  static #relationships = [
    'match',
    'player',
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(_, attributes) {
    super._setRelationships(MatchPlayer.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(MatchPlayer.#relationships, relationships);
  }
}

export default MatchPlayer;
