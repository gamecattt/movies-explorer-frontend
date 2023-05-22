import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useEffect, useState} from "react";
import {SHORT_MOVIE_DURATION} from "../../utils/constants";

function SavedMovies({savedMovies, isLoading, onDeleteMovie, onSearch}) {

  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(null);

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  useEffect(() => {
    search();
  }, [isShort])

  const handleDeleteClick = (movie) => {
    onDeleteMovie(movie);
  }

  const search = () => {
    if (!searchString) {
      return;
    }

    const filteredMovies = savedMovies
        .filter(m => m.nameRU.toLowerCase().includes(searchString.toLowerCase()))
        .filter(m => !isShort || m.duration <= SHORT_MOVIE_DURATION);
    setFilteredMovies(filteredMovies);
    // onSearch(searchString, isShort);
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
              Array.isArray(filteredMovies) && filteredMovies.length ?
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

