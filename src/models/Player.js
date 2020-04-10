import Model from './Model';
import API from '../services/Api';

class Player extends Model {
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

        return { success: true, player: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  matches() {
    const url = `${this._v1Url()}/matches`

    return API.get(url)
      .then((response) => {
        return { success: true, matches: response.serializedData };
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
  get email() { return this.attributes.email; }
  get first_name() { return this.attributes.first_name; }
  get last_name() { return this.attributes.last_name; }
  get nickname() { return this.attributes.nickname; }
  get role() { return this.attributes.role; }

  /*
   Private
   */
  static #model = 'Player';
  static #v1Url = 'v1/players';

  static #attributes = [
    'avatar_url',
    'email',
    'first_name',
    'last_name',
    'nickname',
    'role',
  ];

  static #relationships = [];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${Player.#v1Url}/${this.id}`); }

  _setModel(_) {
    super._setModel(Player.#model);
  }

  _setAttributes(_, attributes) {
    super._setAttributes(Player.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Player.#relationships, relationships);
  }
}

export default Player;
