import Model from './Model';
import API from '../services/Api';

class Match extends Model {
  /*
   Class
   */
  static create(gameId, results) {
    const url = `${Match.#v1Url}`;

    return API.post(url, {
      match: {
        game_id: gameId,
        results: results
      }
    }).then((response) => {
      const data = response.data.data;
      const match = new Match(data.id, data.attributes);

      return { success: true, match: match };
    })
    .catch((error) => {
      return { success: false };
    });
  }

  /*
   Instance
   */
  fetch(replace = true) {
    const url = `${this._v1Url()}`;

    return API.get(url)
      .then((response) => {
        const serializedData = response.serializedData;

        if (replace) {
          this.attributes = serializedData.attributes;
          this.relationships = serializedData.relationships;
        }

        return { success: true, match: (replace ? this : serializedData) };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  // Getters
  get match_status() { return this.attributes.match_status; }
  get played_on() { return this.attributes.played_on; }
  get results() { return this.attributes.results; }

  get game() { return this.relationships.game; }
  get match_players() { return this.relationships.match_players; }

  // Enums
  isConfirmed = () => (this.match_status === "confirmed");
  isPending = () => (this.match_status === "pending");
  isRejected = () => (this.match_status === "rejected");

  // Game
  gameId() {
    return this.game.id;
  }

  // Results
  firstResult() {
    return this.match_players.first();
  }

  playerResult(playerId) {
    return this.match_players.playerResult(playerId);
  }

  /*
   Private
   */
  static #model = 'Match';
  static #v1Url = 'v1/matches';

  static #attributes = [
    'match_status',
    'played_on',
    'results',
  ];

  static #relationships = [
    'game',
    'match_players',
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${Match.#v1Url}/${this.id}`); }

  _setModel(_) {
    super._setModel(Match.#model);
  }

  _setAttributes(_, attributes) {
    super._setAttributes(Match.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Match.#relationships, relationships);
  }
}

export default Match;
