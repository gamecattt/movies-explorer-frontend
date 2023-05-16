import './SearchForm.scss'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import iconArrow from '../../images/icon__arrow.svg';
import {useEffect, useState} from "react";

function SearchForm({onSubmit, term, short}) {

  const [searchString, setSearchString] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setSearchString(term);
  }, [term]);

  useEffect(() => {
    onSubmit(searchString, isShort);
  }, [isShort]);

  function handleSearchChange(e) {
    setSearchString(e.target.value);
  }

  function handleIsShortChange(e) {
    setIsShort(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setHasError(!searchString);
    onSubmit(searchString, isShort);
  }

  return (
      <section className="search extra-indent extra-indent_theme_double">
        <form className="search__form" action="#" onSubmit={handleSubmit} noValidate={true}>
          <div className="search__input-wrap">
            <input className="search__input" type="text" placeholder="Фильм" required
                   onChange={handleSearchChange}/>
            <button className="search__btn" type="submit">
              <img className="search__btn-img" src={iconArrow} alt="Логотип"/>
            </button>
          </div>
          <FilterCheckbox checked={isShort} onChange={handleIsShortChange}/>
        </form>
        {hasError ? <span className="auth-form__error-msg">Нужно ввести ключевое слово</span> : ''}
      </section>
  )
};

export default SearchForm;
