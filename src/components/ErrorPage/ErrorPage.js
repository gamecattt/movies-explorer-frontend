import './ErrorPage.scss'
import {useNavigate} from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
      <section className="error">
        <h1 className="error__title">404</h1>
        <p className="error__text">Страница не найдена</p>
        <button className="error__link" onClick={goBack}>Назад</button>
      </section>
  );
}

export default ErrorPage;
