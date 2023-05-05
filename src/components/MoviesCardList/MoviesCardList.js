import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.scss'

function MoviesCardList(props) {
  return (
      <ul className="movies__card-list">
        {props.movies.map((movie) =>
            <MoviesCard key={movie.id} title={movie.title} time={movie.time} image={movie.image} saved={movie.saved}
                        isSavedList={props.isSavedList}/>
        )}
      </ul>
  );
}

export default MoviesCardList;
