import './Profile.scss'
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import MainApi from "../../utils/MainApi";
import FieldError from "../FieldError";

function Profile({onLogout, onUpdate}) {

  const currentUser = useContext(CurrentUserContext);

  const [error, setError] = useState(null);

  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onBlur",
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    }
  });

  const handleLogout = (e) => {
    e.preventDefault();
    onLogout();
  }

  const onSubmit = (data) => {
    setError(null);
    if (data.name === currentUser.name && data.email === currentUser.email) {
      return;
    }

    MainApi
        .updateProfile(data)
        .then((user) => {
          onUpdate(user);
          alert('Профиль обновлен!')
        })
        .catch((err) => setError(err));
  }

  return (
      <main className="content">
        <form className="user-info" action="#" onSubmit={handleSubmit(onSubmit)}>
          <div className="user-info__main-content">
            <h1 className="user-info__title">Привет, {currentUser.name}!</h1>
            <div className="user-info__row">
              <span>Имя</span>
              <input
                  {...register("name", {
                    required: true,
                    minLength: 2,
                    maxLength: 40,
                    pattern: /^[a-яё]+(?:[ -][a-яё]+)*$/i
                  })}
                  type="text"
                  placeholder="Имя"
                  className="user-info__input"
              />
            </div>
            <FieldError error={errors.name}/>
            <div className="user-info__row">
              <span>E-mail</span>
              <input
                  {...register("email", {required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}
                  type="email"
                  placeholder="Email"
                  className="user-info__input"
              />
            </div>
            <FieldError error={errors.email}/>
          </div>
          <div className="user-info__links">
            {error && <span className="auth-form__error-msg">Произошла ошибка</span>}
            <button type="submit" className="user-info__link">Редактировать</button>
            <a className="user-info__link user-info__link_type_color" href="#" onClick={handleLogout}>Выйти из
              аккаунта</a>
          </div>
        </form>
      </main>
  );
}

export default Profile;
