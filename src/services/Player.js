import API from './Api';

class Player {
  static fetch() {
    const url = 'v1/players?public=true';

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const players = data.map((player) => (Object.assign({}, { id: player.id }, player.attributes)));
        return { success: true, players: players };
      })
      .catch((error) => {
        return { success: false };
      });
  }
}

export default Player;
