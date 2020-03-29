import Model from './Model';
import API from '../services/Api';

class Match extends Model {
  /*
   Class
   */
  static fetch(fetchParams = {}) {
    const url = `${Match.#v1Url}`;
    const params = { params: fetchParams };

    return API.get(url, params)
      .then((response) => {
        const data = response.data.data;
        const matches = data.map((match) => (new Match(match.id, match.attributes)));
        return { success: true, matches: matches };
      })
      .catch((error) => {
        return { success: false };
      });
  }

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
  isConfirmed = () => (this.match_status === "confirmed");
  isPending = () => (this.match_status === "pending");
  isRejected = () => (this.match_status === "rejected");

  /*
   Private
   */
  static #v1Url = 'v1/matches';

  static #attributes = [
    'match_status',
    'played_on',
    'results',
  ];

  static #relationships = [
    'match_players',
    'game',
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(_, attributes) {
    super._setRelationships(Match.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Match.#relationships, relationships);
  }
}

export default Match;
