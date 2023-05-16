import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.scss'
import {useEffect, useState} from "react";

function MoviesCardList({movies, savedMovies, isSavedList, onButtonClick}) {

  let resizeTimer;

  const [visibleMovies, setVisibleMovies] = useState([]);
  const [perPage, setPerPage] = useState(3);

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {

    window.addEventListener('resize', handleResize);
    firstRender();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const showMore = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + perPage);
  }

  const firstRender = () => {
    const width = window.innerWidth;
    switch (true) {
      case width >= 993:
        setEndIndex(12)
        break;
      case width >= 481:
        setEndIndex(8)
        break;
      default:
        setEndIndex(5)
        break;
    }
    handleResize();
  }

  useEffect(() => {
    setVisibleMovies(movies)
  }, [movies]);

  useEffect(() => {
    setVisibleMovies([...visibleMovies, ...movies.slice(startIndex, endIndex)])
  }, [endIndex]);

  const handleResize = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }

    resizeTimer = setTimeout(() => {
      const width = window.innerWidth;
      switch (true) {
        case width >= 993:
          setPerPage(3);
          break;
        case width >= 481:
          setPerPage(2);
          break;
        default:
          setPerPage(1);
          break;
      }
    }, 300);
  }

  return (
      <>
        <ul className="movies__card-list">
          {visibleMovies.map((movie) =>
              <MoviesCard key={movie.movieId} movie={movie} onButtonClick={onButtonClick}
                          savedMovies={savedMovies} isSavedList={isSavedList}/>
          )}
        </ul>
        {(movies.length > endIndex) ? <button className="movies__button" onClick={showMore}>Ещё</button> : ''}
      </>
  );
}

export default MoviesCardList;
