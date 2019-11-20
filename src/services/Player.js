import API from './Api';

class Player {
  constructor(id, attributes = {}) {
    this.id = id ? parseInt(id, 10) : null;
    this._setAttributes(attributes);
  }

  /*
   Class
   */
  static fetch() {
    const url = 'v1/players?public=true';

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const players = data.map((player) => (new Player(player.id, player.attributes)));

        return { success: true, players: players };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  /*
   Instance
   */
  fetch() {
    const url = `v1/players/${this.id}`;

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const attributes = data.attributes;
        this._setAttributes(attributes);

        return { success: true, player: attributes };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  statistics() {
    const url = `v1/players/${this.id}/statistics`;

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
    'nickname',
    'email',
    'first_name',
    'last_name',
    'role',
    'avatar_url'
  ];

  // Support for the experimental syntax 'classPrivateMethods' isn't currently enabled
  _setAttributes(attributes) {
    Player.#attributes.forEach((attribute) => {
      if (attributes[attribute]) {
        this[attribute] = attributes[attribute]
      }
    });
  }
}

export default Player;
