import iconSave from '../../images/icon__save.svg'
import iconDelete from '../../images/icon__delete.svg'
import './MoviesCard.scss'

function MoviesCard({movie, onButtonClick, savedMovies, isSavedList}) {

  function handleCardClick() {
    window.open(movie.trailerLink, '_blank');
  }

  function handleButtonClick(e) {
    e.stopPropagation();
    onButtonClick(movie);
  }

  function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  }

  return (
      <li className="movies__card" onClick={handleCardClick}>
        <div className="movies__heading">
          <div className="movies__info">
            <h2 className="movies__title">{movie.nameRU}</h2>
            <span className="movies__time">{formatDuration(movie.duration)}</span>
          </div>
          <button onClick={handleButtonClick}
                  className={'movies__card-btn ' + (!isSavedList && savedMovies && savedMovies.some(m => m.movieId === movie.movieId) ? 'movies__card-btn_active' : '')}>
            <img src={isSavedList ? iconDelete : iconSave} alt="Сохранить"/>
          </button>
        </div>
        <img className="movies__card-img" src={movie.thumbnail} alt={movie.nameRU}/>
      </li>
  );
}

export default MoviesCard;
