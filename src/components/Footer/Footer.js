import './Footer.scss'
import {useLocation} from "react-router-dom";

function Footer() {

  return (
    <footer className="footer">
      <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <span className="footer__author" lang="en">&copy; {new Date().getFullYear()} GameCattt</span>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item"><a className="footer__link" href="https://practicum.yandex.ru/" target='_blank'>Яндекс.Практикум</a></li>
            <li className="footer__item"><a className="footer__link" href="https://github.com/gamecattt" target='_blank'>Github</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
