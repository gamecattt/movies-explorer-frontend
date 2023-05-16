export const BASE_HREF = 'https://api.nomoreparties.co';

class MoviesApi {
  getMovies() {
    return fetch(BASE_HREF + '/beatfilm-movies')
        .then(res => res.json());
  }
}

export default new MoviesApi();
