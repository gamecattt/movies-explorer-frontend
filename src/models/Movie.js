import {BASE_HREF} from "../utils/MoviesApi";

const formatMovie = (movie) => {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: BASE_HREF + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: BASE_HREF + movie.image.formats.thumbnail.url,
    // owner: currentUser._id,
    movieId: movie.id,
    // _id: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  }
}

export default formatMovie;
