import Model from './Model';
import API from '../services/Api';

class Game extends Model {
  /*
   Class
   */
  static fetch() {
    const url = `${Game.#v1Url}?public=true`;

    return API.get(url)
      .then((response) => {
        return { success: true, games: response.serializedData };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Instance
   */
  fetch() {
    const url = `${this._v1Url()}`;

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;
        this._setAttributes([], attributes);

        return { success: true, game: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  statistics() {
    const url = `${this._v1Url()}/statistics`;

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
  static #v1Url = 'v1/games';

  static #attributes = [
    'name',
    'description',
    'min_players',
    'max_players',
    'min_play_time',
    'max_play_time',
    'avatar_url'
  ];

  static #relationships = [];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${Game.#v1Url}/${this.id}`); }

  _setAttributes(_, attributes) {
    super._setRelationships(Game.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Game.#relationships, relationships);
  }
}

export default Game;
