import Logo from "../Logo/Logo";
import '../Auth/Auth.scss'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import MainApi from "../../utils/MainApi";
import {useForm} from "react-hook-form";
import FieldError from "../FieldError";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    setError(null);
    setIsLoading(true);
    MainApi.signin(data)
        .then((res) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            onLogin();
            navigate('/movies', {replace: true});
          }
        })
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
  }

  return (
      <section className="auth">
        <div className="auth__heading">
          <Logo/>
          <h1 className="auth__title">Рады видеть!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form" action="#">
          <div className="auth-form__top">
            <span className="auth-form__caption">E-mail</span>
            <input
                {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                className="auth-form__input"
                name="email"
                type="email"
                required
                disabled={isLoading}
                id="email-input"/>
            <FieldError error={errors.email}/>
            <span className="auth-form__caption">Пароль</span>
            <input
                {...register("password", {required: true, minLength: 6})}
                className="auth-form__input"
                type="password"
                name="password"
                required
                disabled={isLoading}
                id="password-input"
            />
            <FieldError error={errors.password}/>
          </div>
          <div className="auth-form__bottom">
            {error && <span className="auth-form__error-msg">Произошла ошибка</span>}
            <button className="auth-form__btn-submit" type="submit" disabled={!isValid || isLoading}>Войти</button>
            <span className="auth-form__text">
                Ещё не зарегистрированы? <Link to="/signup" className="auth-form__link">Регистрация</Link>
              </span>
          </div>
        </form>
      </section>
  );
}

export default Login;
