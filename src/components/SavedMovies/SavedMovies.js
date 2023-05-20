import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import {SHORT_MOVIE_DURATION} from "../../utils/constants";

function SavedMovies({savedMovies, isLoading, onDeleteMovie, onSearch}) {

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, []);

  const handleDeleteClick = (movie) => {
    onDeleteMovie(movie);
  }

  const search = (searchString, isShort) => {
    if (!searchString) {
      return;
    }

    const filteredMovies = savedMovies
        .filter(m => m.nameRU.toLowerCase().includes(searchString.toLowerCase()))
        .filter(m => !isShort || m.duration <= SHORT_MOVIE_DURATION);
    setFilteredMovies(filteredMovies);
    // onSearch(searchString, isShort);
  }

  return (
      <>
        <SearchForm onSubmit={search}/>
        <section className="movies extra-indent extra-indent_theme_double">
          {isLoading ? <Preloader/> :
              filteredMovies.length ?
                  <ul className="movies__card-list">
                    {filteredMovies.map((movie) =>
                        <MoviesCard key={movie.movieId} movie={movie} onButtonClick={handleDeleteClick}
                                    savedMovies={savedMovies} isSavedList={true}/>
                    )}
                  </ul> :
                  <span>Ничего не найдено</span>
          }
        </section>
      </>
  );
}

export default SavedMovies;

