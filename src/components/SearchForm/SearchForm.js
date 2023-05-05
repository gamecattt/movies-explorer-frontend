import './SearchForm.scss'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import iconArrow from '../../images/icon__arrow.svg';

function SearchForm() {
  return (
      <section className="search extra-indent_theme_double">
        <form className="search__form" action="">
          <div className="search__input-wrap">
            <input className="search__input" type="text" placeholder="Фильм"/>
            <button className="search__btn" type="submit">
              <img className="search__btn-img" src={iconArrow} alt="Логотип"/>
            </button>
          </div>
          <FilterCheckbox/>
        </form>
      </section>
  )
};

export default SearchForm;
