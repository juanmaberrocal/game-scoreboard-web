import Model from './Model';
import API from '../services/Api';

class Player extends Model {
  /*
   Class
   */
  static fetch() {
    const url = `${Player.#v1Url}?public=true`;

    return API.get(url)
      .then((response) => {
        return { success: true, players: response.serializedData };
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
        console.log(error);
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
  static #v1Url = 'v1/players';

  static #attributes = [
    'nickname',
    'email',
    'first_name',
    'last_name',
    'role',
    'avatar_url'
  ];

  static #relationships = [];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _v1Url() { return (`${Player.#v1Url}/${this.id}`); }

  _setAttributes(_, attributes) {
    super._setRelationships(Player.#attributes, attributes);
  }

  _setRelationships(_, relationships) {
    super._setRelationships(Player.#relationships, relationships);
  }
}

export default Player;
