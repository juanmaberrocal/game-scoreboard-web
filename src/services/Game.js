import API from './Api';

class Game {
  constructor(id, attributes = {}) {
    this.id = id ? parseInt(id, 10) : null;

    this._setAttributes(attributes);
  }

  /*
   Class
   */
  static fetch() {
    const url = 'v1/games?public=true';

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const games = data.map((game) => (new Game(game.id, game.attributes)));

        return { success: true, games: games };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Instance
   */
  fetch() {
    const url = `v1/games/${this.id}`;

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;
        this._setAttributes(attributes);

        return { success: true, game: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  statistics() {
    const url = `v1/games/${this.id}/statistics`;

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;

        return { success: true, statistics: attributes.statistics };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Private
   */
  static #attributes = [
    'name',
    'description',
    'min_players',
    'max_players',
    'min_play_time',
    'max_play_time',
    'avatar_url'
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(attributes) {
    Game.#attributes.forEach((attribute) => {
      if (attributes[attribute]) {
        this[attribute] = attributes[attribute]
      }
    });
  }
}

export default Game;
