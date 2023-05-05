import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import './Movies.scss'
import image1 from "../../images/card-1.png";
import image2 from "../../images/card-2.png";
import image3 from "../../images/card-3.png";
import image4 from "../../images/card-4.png";
import image5 from "../../images/card-5.png";
import image6 from "../../images/card-6.png";
import image7 from "../../images/card-7.png";
import image8 from "../../images/card-8.png";
import image9 from "../../images/card-9.png";
import image10 from "../../images/card-10.png";
import image11 from "../../images/card-11.png";
import image12 from "../../images/card-12.png";
import Preloader from "../Preloader/Preloader";
import {useState} from "react";

function Movies() {

  const [isLoading, setIsLoading] = useState(true);

  const movies = [
    {id: 1, title: '33 слова о дизайне', time: '1ч 47м', image: image1, saved: true},
    {id: 2, title: '33 слова о дизайне', time: '1ч 47м', image: image2, saved: false},
    {id: 3, title: '33 слова о дизайне', time: '1ч 47м', image: image3, saved: false},
    {id: 4, title: '33 слова о дизайне', time: '1ч 47м', image: image4, saved: false},
    {id: 5, title: '33 слова о дизайне', time: '1ч 47м', image: image5, saved: false},
    {id: 6, title: '33 слова о дизайне', time: '1ч 47м', image: image6, saved: false},
    {id: 7, title: '33 слова о дизайне', time: '1ч 47м', image: image7, saved: false},
    {id: 8, title: '33 слова о дизайне', time: '1ч 47м', image: image8, saved: false},
    {id: 9, title: '33 слова о дизайне', time: '1ч 47м', image: image9, saved: false},
    {id: 10, title: '33 слова о дизайне', time: '1ч 47м', image: image10, saved: false},
    {id: 11, title: '33 слова о дизайне', time: '1ч 47м', image: image11, saved: false},
    {id: 12, title: '33 слова о дизайне', time: '1ч 47м', image: image12, saved: false},
  ];

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
      <>
        <SearchForm/>
        <section className="movies extra-indent_theme_double">
          {isLoading ? <Preloader/> :
              <>
                <MoviesCardList movies={movies}/>
                <button className="movies__button">Ещё</button>
              </>
          }
        </section>
      </>
  );
}

export default Movies;
