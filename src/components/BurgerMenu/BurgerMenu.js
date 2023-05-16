import './BurgerMenu.scss';
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
      <div className={'burger-menu ' + (isOpen ? 'burger-menu_active' : '')}>

        <div className="burger-menu__overlay"></div>

        <button className="burger-menu__btn" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="burger-menu__wrap">
          <nav className="burger-menu__nav">
            <Link to="/"
                  className={'burger-menu__nav-link ' + (location.pathname === '/' ? 'burger-menu__nav-link_active' : '')}
                  onClick={handleClick}>Главная</Link>
            <Link to="/movies"
                  className={'burger-menu__nav-link ' + (location.pathname === '/movies' ? 'burger-menu__nav-link_active' : '')}
                  onClick={handleClick}>Фильмы</Link>
            <Link to="/saved-movies"
                  className={'burger-menu__nav-link ' + (location.pathname === '/saved-movies' ? 'burger-menu__nav-link_active' : '')}
                  onClick={handleClick}>Сохраненные фильмы</Link>
          </nav>
          <Link to="/profile" className="burger-menu__nav-link burger-menu__nav-link_theme_ellipse"
                onClick={handleClick}>Аккаунт</Link>
        </div>
      </div>
  );
}

export default BurgerMenu;
