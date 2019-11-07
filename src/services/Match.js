import API from './Api';

class Match {
  static fetch(fetchParams = {}) {
    const url = 'v1/matches';
    const params = { params: fetchParams };

    return API.get(url, params)
      .then((response) => {
        const data = response.data.data;
        const matches = data.map((match) => (Object.assign({}, { id: match.id }, match.attributes)));
        return { success: true, matches: matches };
      })
      .catch((error) => {
        return { success: false };
      });
  }
}

export default Match;
