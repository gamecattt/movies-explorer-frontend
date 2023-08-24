import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.scss'
import Preloader from "../Preloader/Preloader";
import {useEffect, useState} from "react";
import {SHORT_MOVIE_DURATION} from "../../utils/constants";

function Movies({ movies, savedMovies, isLoading, onSaveMovie, onSearch }) {

  const [filteredMovies, setFilteredMovies] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    setFilteredMovies(movies);
    setSearchString(localStorage.getItem('search-string') || '');
    setIsShort(!!localStorage.getItem('is-short'));
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    search();
  }, [isShort, isFirstRender])

  const handleSaveClick = (movie) => {
    onSaveMovie(movie);
  }

  const search = () => {
    if (!searchString) {
      return;
    }

    localStorage.setItem('search-string', searchString);
    localStorage.setItem('is-short', isShort ? 'true' : '');

    const filteredMovies = movies
        .filter(m => m.nameRU.toLowerCase().includes(searchString.toLowerCase()))
        .filter(m => !isShort || m.duration <= SHORT_MOVIE_DURATION);
    setFilteredMovies(filteredMovies);
  }

  const handleSearchChange = (value) => {
    setSearchString(value);
  }

  const handleIsShortChange = (value) => {
    setIsShort(value);
  }

  return (
      <>
        <SearchForm onSubmit={search} searchString={searchString} isShort={isShort} onSearchChange={handleSearchChange} onIsShortChange={handleIsShortChange} />
        <section className="movies extra-indent extra-indent_theme_double">
          {isLoading ? <Preloader/> :
              <>
                {Array.isArray(filteredMovies) && filteredMovies.length && !hasError ?
                    <MoviesCardList movies={filteredMovies} savedMovies={savedMovies}
                                    onButtonClick={handleSaveClick}/> :
                    <span>Ничего не найдено</span>}
                {hasError ?
                    <span className="auth-form__error-msg">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span> : ''}
              </>
          }
        </section>
      </>
  );
}

export default Movies;
