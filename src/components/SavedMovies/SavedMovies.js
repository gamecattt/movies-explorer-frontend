import MoviesCardList from "../MoviesCardList/MoviesCardList";

import image1 from "../../images/card-1.png";
import image2 from "../../images/card-2.png";
import image3 from "../../images/card-3.png";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {

  const movies = [
    { id: 1, title: '33 слова о дизайне', time: '1ч 47м', image: image1 },
    { id: 2, title: '33 слова о дизайне', time: '1ч 47м', image: image2 },
    { id: 3, title: '33 слова о дизайне', time: '1ч 47м', image: image3 },
  ];

  return (
      <>
        <SearchForm/>
        <section className="movies extra-indent_theme_double">
          <MoviesCardList movies={movies} isSavedList={true}/>
        </section>
      </>
  );
}

export default SavedMovies;

