import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.scss'
import Preloader from "../Preloader/Preloader";
import {useEffect, useState} from "react";

function Movies({movies, savedMovies, isLoading, onSaveMovie, onSearch}) {

  const [filteredMovies, setFilteredMovies] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, []);

  const handleSaveClick = (movie) => {
    onSaveMovie(movie);
  }

  const search = (searchString, isShort) => {
    if (!searchString) {
      return;
    }

    const filteredMovies = movies
        .filter(m => m.nameRU.toLowerCase().includes(searchString.toLowerCase()))
        .filter(m => !isShort || m.duration <= 40);
    setFilteredMovies(filteredMovies);
    // onSearch(searchString, isShort);
  }

  return (
      <>
        <SearchForm onSubmit={search}/>
        <section className="movies extra-indent extra-indent_theme_double">
          {isLoading ? <Preloader/> :
              <>
                {filteredMovies.length && !hasError ?
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
