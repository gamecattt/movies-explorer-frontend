import Logo from "../Logo/Logo";
import '../Auth/Auth.scss'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import MainApi from "../../utils/MainApi";
import {useForm} from "react-hook-form";
import FieldError from "../FieldError";

function Register({ onLogin }) {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onBlur"
  });

  const onSubmit = async (data) => {
    setError(null);
    setIsLoading(true);

    try {
      await MainApi.signup(data);
      const res = await MainApi.signin({
        email: data.email,
        password: data.password,
      });

      if (res.token) {
        localStorage.setItem('token', res.token);
        onLogin();
        navigate('/movies', {replace: true});
      }
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  return (
      <section className="auth">
        <div className="auth__heading">
          <Logo/>
          <h1 className="auth__title">Добро пожаловать!</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="auth-form" action="#">
          <div className="auth-form__top">
            <span className="auth-form__caption">Имя</span>
            <input
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 40,
                  pattern: /^[a-яё]+(?:[ -][a-яё]+)*$/i
                })}
                className={'auth-form__input ' + (errors.name ? 'auth-form__input_type_error' : '')}
                name="name"
                type="text"
                id="nickname-input"
                disabled={isLoading}
            />
            <FieldError error={errors.name}/>
            <span className="auth-form__caption">E-mail</span>
            <input
                {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                className={'auth-form__input ' + (errors.email ? 'auth-form__input_type_error' : '')}
                name="email"
                type="email"
                id="email-input"
                disabled={isLoading}
            />
            <FieldError error={errors.email}/>
            <span className="auth-form__caption">Пароль</span>
            <input
                {...register("password", {required: true, minLength: 6})}
                className={'auth-form__input ' + (errors.password ? 'auth-form__input_type_error' : '')}
                type="password"
                name="password"
                id="password-input"
                disabled={isLoading}
            />
            <FieldError error={errors.password}/>
          </div>
          <div className="auth-form__bottom">
            {error && <span className="auth-form__error-msg">Произошла ошибка</span>}
            <button className="auth-form__btn-submit" type="submit" disabled={!isValid || isLoading}>Зарегистрироваться</button>
            <span className="auth-form__text">
                        Уже зарегистрированы? <Link to="/signin" className="auth-form__link">Войти</Link>
                    </span>
          </div>
        </form>
      </section>
  );
}

export default Register;
