import Logo from "../Logo/Logo";
import './Header.scss'
import {Link, useLocation} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
  const location = useLocation();
  const loggedIn = location.pathname === '/';

  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        {loggedIn ? <nav className="header__nav">
          <Link to="/movies" className="header__nav-link header__nav-link_active">Фильмы</Link>
          <Link to="/saved-movies" className="header__nav-link">Сохраненные фильмы</Link>
        </nav> : ''}
      </div>
      <div className="header__auth">
        {!loggedIn ?
            <>
              <Link to="/signup" className="header__link">Регистрация</Link>
              <Link to="/signin" className="header__link header__link_theme_square">Войти</Link>
            </>
            :
            <>
              <Link to="/profile" className="header__link header__link_theme_ellipse">Аккаунт</Link>
              <BurgerMenu/>
            </>
        }
      </div>



    </header>
  );
}

export default Header;
