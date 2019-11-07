import API from './Api';

class Game {
  static fetch() {
    const url = 'v1/games?public=true';

    return API.get(url)
      .then((response) => {
        const data = response.data.data;
        const games = data.map((game) => (Object.assign({}, { id: game.id }, game.attributes)));
        return { success: true, games: games };
      })
      .catch((error) => {
        return { success: false };
      });
  }
}

export default Game;
