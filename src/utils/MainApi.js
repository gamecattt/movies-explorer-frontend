export const BASE_HREF = 'https://gamecat-movies-api.nomoredomains.monster/api';

class MainApi {
  getProfile() {
    return this._request('/users/me');
  }

  updateProfile(data) {
    return this._request('/users/me', 'PATCH', data);
  }

  getMovies() {
    return this._request('/movies');
  }

  createMovie(data) {
    return this._request('/movies', 'POST', data);
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, 'DELETE');
  }

  signup(data) {
    return this._request('/signup', 'POST', data);
  }

  signin(data) {
    return this._request('/signin', 'POST', data);
  }

  checkToken() {
    return this._request('/users/me');
  }

  _request(path, method = 'GET', data = null) {
    return fetch(BASE_HREF + path, {
      method,
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      ...(data ? {body: JSON.stringify(data)} : {}),
    }).then(this._callback);
  }

  _callback(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export default new MainApi();
