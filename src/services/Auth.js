import API from './Api';

class Auth {
  static login(email, password) {
    const url = 'login'

    return API.post(url, {
      player: {
        email: email,
        password: password
      }
    }).then((response) => {
      const data = response.data.data;
      const player = Object.assign({}, {id: data.id }, data.attributes);
      
      return { success: true, player: player };
    })
    .catch((error) => {
      return { success: false };
    });
  }
}

export default Auth;
