import Model from './Model';
import API from '../services/Api';

class Game extends Model {
  /*
   Class
   */

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

  // Getters
  get avatar_url() { return this.attributes.avatar_url; }
  get description() { return this.attributes.description; }
  get max_play_time() { return this.attributes.max_play_time; }
  get max_players() { return this.attributes.max_players; }
  get min_play_time() { return this.attributes.min_play_time; }
  get min_players() { return this.attributes.min_players; }
  get name() { return this.attributes.name; }

  /*
   Private
   */
  static #model = 'Game';
  static #v1Url = 'v1/games';

  static #attributes = [
    'avatar_url',
    'description',
    'max_play_time',
    'max_players',
    'min_play_time',
    'min_players',
    'name',
  ];

  static #relationships = [];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${Game.#v1Url}/${this.id}`); }

  _setModel(_) {
    super._setModel(Game.#model);
  }

  _setAttributes(_, attributes) {
    super._setAttributes(Game.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Game.#relationships, relationships);
  }
}

export default Game;
