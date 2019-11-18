import API from './Api';
import StoredUser from './StoredUser'

class Auth {
  static renew() {
    const url = 'renew';

    // if there is no stored player token
    // skip renew logic
    if (!StoredUser.getToken()) {
      return Promise.resolve().then(() => ({ success: false }));
    }

    return API.get(url)
      .then((response) => {
        StoredUser.setToken(this.tokenFromResponse(response));
        return { success: true, player: this.playerFromResponse(response) };
      })
      .catch((error) => {
        StoredUser.clearToken();
        return { success: false };
      });
  }

  static signup(email, password, password_confirmation, nickname, first_name, last_name) {
    const url = 'signup';

    return API.post(url, {
      player: {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
        nickname: nickname,
        first_name: first_name,
        last_name: last_name
      }
    }).then((response) => {
      StoredUser.setToken(this.tokenFromResponse(response));
      return { success: true, player: this.playerFromResponse(response) };
    })
    .catch((error) => {
      StoredUser.clearToken();
      return { success: false };
    });
  }

  static login(email, password) {
    const url = 'login';

    return API.post(url, {
      player: {
        email: email,
        password: password
      }
    }).then((response) => {
      StoredUser.setToken(this.tokenFromResponse(response));
      return { success: true, player: this.playerFromResponse(response) };
    })
    .catch((error) => {
      StoredUser.clearToken();
      return { success: false };
    });
  }

  static logout() {
    const url = 'logout';

    return API.delete(url)
      .then((response) => {
        StoredUser.clearToken();
        return { success: true };
      })
      .catch((error) => {
        return { success: false };
      });
  }

  // helpers
  static tokenFromResponse(response) {
    const headers = response.headers;
    const token = headers.authorization.split(" ")[1];
    return token;
  }

  static playerFromResponse(response) {
    const data = response.data.data;
    const player = Object.assign({}, { id: data.id }, data.attributes);
    return player;
  }
}

export default Auth;
