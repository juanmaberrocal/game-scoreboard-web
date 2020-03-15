import API from './Api';

class Match {
  constructor(id, attributes = {}) {
    this.id = id ? parseInt(id, 10) : null;

    this._setAttributes(attributes);
  }

  /*
   Class
   */
  static fetch(fetchParams = {}) {
    const url = 'v1/matches';
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
    const url = 'v1/matches';

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
   Private
   */
  static #attributes = [
    'game_id',
    'played_on',
    'results'
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(attributes) {
    Match.#attributes.forEach((attribute) => {
      if (attributes[attribute]) {
        this[attribute] = attributes[attribute]
      }
    });
  }
}

export default Match;
