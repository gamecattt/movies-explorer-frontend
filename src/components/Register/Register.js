import Logo from "../Logo/Logo";
import '../Auth/Auth.scss'
import {Link} from "react-router-dom";

function Register() {
  return (
      <section className="auth">
        <div className="auth__heading">
          <Logo/>
          <h1 className="auth__title">Добро пожаловать!</h1>
        </div>
        <form className="auth-form" action="#">
          <div className="auth-form__top">
            <span className="auth-form__caption">Имя</span>
            <input
                className="auth-form__input"
                name="name"
                type="text"
                required
                minLength="2"
                maxLength="40"
                id="nickname-input"
            />
            <span className="auth-form__caption">E-mail</span>
            <input className="auth-form__input" name="email" type="email" required id="email-input"/>
            <span className="auth-form__caption">Пароль</span>
            <input
                className="auth-form__input auth-form__input_type_error"
                type="password"
                name="password"
                required
                id="password-input"
            />
            <span className="auth-form__error-msg">Что-то пошло не так...</span>
          </div>
          <div className="auth-form__bottom">
            <button className="auth-form__btn-submit" type="submit">Зарегистрироваться</button>
            <span className="auth-form__text">
            Уже зарегистрированы? <Link to="/signin" className="auth-form__link">Войти</Link>
          </span>
          </div>
        </form>
      </section>
  );
}

export default Register;
