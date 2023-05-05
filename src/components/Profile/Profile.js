import './Profile.scss'

function Profile() {
  return (
      <main className="content">
        <section className="user-info">
          <div className="user-info__main-content">
            <h1 className="user-info__title">Привет, Анна!</h1>
            <div className="user-info__row">
              <span>Имя</span>
              <span>Анна</span>
            </div>
            <div className="user-info__row">
              <span>E-mail</span>
              <span>pochta@yandex.ru</span>
            </div>
          </div>
          <div className="user-info__links">
            <a className="user-info__link" href="#">Редактировать</a>
            <a className="user-info__link user-info__link_type_color" href="#">Выйти из аккаунта</a>
          </div>
        </section>
      </main>
  );
}

export default Profile;
