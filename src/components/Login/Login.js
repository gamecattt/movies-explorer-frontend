import Logo from "../Logo/Logo";
import '../Auth/Auth.scss'
import {Link} from "react-router-dom";

function Login() {
  return (
      <section className="auth">
        <div className="auth__heading">
          <Logo/>
          <h1 className="auth__title">Рады видеть!</h1>
        </div>
        <form className="auth-form" action="#">
          <div className="auth-form__top">
            <span className="auth-form__caption">E-mail</span>
            <input className="auth-form__input" name="email" type="email" required id="email-input"/>
            <span className="auth-form__caption">Пароль</span>
            <input
                className="auth-form__input"
                type="password"
                name="password"
                required
                id="password-input"
            />
          </div>
          <div className="auth-form__bottom">
            <button className="auth-form__btn-submit" type="submit">Войти</button>
            <span className="auth-form__text">
                Ещё не зарегистрированы? <Link to="/signup" className="auth-form__link">Регистрация</Link>
              </span>
          </div>
        </form>
      </section>
  );
}

export default Login;
