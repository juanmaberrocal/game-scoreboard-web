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

  get match() { return this.relationships.match; }
  get player() { return this.relationships.player; }

  // Enums
  isConfirmed = () => (this.result_status === "confirmed");
  isPending = () => (this.result_status === "pending");
  isRejected = () => (this.result_status === "rejected");

  confirm = () => {
    const url = `${this._v1Url()}/confirm`;

    return API.post(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;
        this._setAttributes([], attributes);

        return { success: true, match_player: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  reject = () => {
    const url = `${this._v1Url()}/reject`;

    return API.post(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;
        this._setAttributes([], attributes);

        return { success: true, match_player: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  // Player
  playerId() {
    return this.player.id;
  }

  /*
   Private
   */
  static #model = 'MatchPlayer';
  static #v1Url = 'v1/match_players';

  static #attributes = [
    'result_status',
    'winner',
  ];

  static #relationships = [
    'match',
    'player',
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${MatchPlayer.#v1Url}/${this.id}`); }

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
