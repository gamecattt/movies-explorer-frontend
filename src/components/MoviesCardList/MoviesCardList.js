import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.scss'
import {useEffect, useState} from "react";
import {
  DESKTOP_BREAKPOINT,
  FIRST_RENDER_MOVIES_COUNT_DESKTOP,
  FIRST_RENDER_MOVIES_COUNT_MOBILE,
  FIRST_RENDER_MOVIES_COUNT_TABLET,
  LOAD_MORE_MOVIES_COUNT_DESKTOP,
  LOAD_MORE_MOVIES_COUNT_MOBILE,
  LOAD_MORE_MOVIES_COUNT_TABLET,
  TABLET_BREAKPOINT
} from "../../utils/constants";

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
      case width >= DESKTOP_BREAKPOINT:
        setEndIndex(FIRST_RENDER_MOVIES_COUNT_DESKTOP)
        break;
      case width >= TABLET_BREAKPOINT:
        setEndIndex(FIRST_RENDER_MOVIES_COUNT_TABLET)
        break;
      default:
        setEndIndex(FIRST_RENDER_MOVIES_COUNT_MOBILE)
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
        case width >= DESKTOP_BREAKPOINT:
          setPerPage(LOAD_MORE_MOVIES_COUNT_DESKTOP);
          break;
        case width >= TABLET_BREAKPOINT:
          setPerPage(LOAD_MORE_MOVIES_COUNT_TABLET);
          break;
        default:
          setPerPage(LOAD_MORE_MOVIES_COUNT_MOBILE);
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
