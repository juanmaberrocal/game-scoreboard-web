class StoredUser {
  static authToken = 'auth_token';

  static setToken(token) {
    localStorage.setItem(this.authToken, token);
  }

  static getToken() {
    return localStorage.getItem(this.authToken);
  }

  static clearToken() {
    localStorage.removeItem(this.authToken);
  }
}

export default StoredUser;
