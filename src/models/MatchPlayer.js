import Model from './Model';
import API from '../services/Api';

class MatchPlayer extends Model {
  /*
   Class
   */

  /*
   Instance
   */
  // Getters
  get result_status() { return this.attributes.result_status; }
  get winner() { return this.attributes.winner; }

  // Enums
  isConfirmed = () => (this.result_status === "confirmed");
  isPending = () => (this.result_status === "pending");
  isRejected = () => (this.result_status === "rejected");

  // Player
  playerId() {
    return this.player.id;
  }

  /*
   Private
   */
  static #model = 'MatchPlayer';

  static #attributes = [
    'result_status',
    'winner',
  ];

  static #relationships = [
    'match',
    'player',
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setModel(_) {
    super._setModel(MatchPlayer.#model);
  }

  _setAttributes(_, attributes) {
    super._setAttributes(MatchPlayer.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(MatchPlayer.#relationships, relationships);
  }
}

export default MatchPlayer;
