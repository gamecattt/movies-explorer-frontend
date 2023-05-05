import './Portfolio.scss';
import arrow from '../../images/arrow.svg';

function Portfolio() {
  return (
      <div className="portfolio">
        <h5 className="portfolio__title">Портфолио</h5>
        <nav className="portfolio__nav">
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <a href="https://github.com/gamecattt/how-to-learn" target='_blank' className="portfolio__link">
                <span className="portfolio__project-name">Статичный сайт</span>
                <img className="portfolio__arrow" src={arrow} alt="Ссылка"/>
              </a>
            </li>
            <li className="portfolio__item">
              <a href="https://github.com/gamecattt/russian-travel" target='_blank' className="portfolio__link">
                <span className="portfolio__project-name">Адаптивный сайт</span>
                <img className="portfolio__arrow" src={arrow} alt="Ссылка"/>
              </a>
            </li>
            <li className="portfolio__item">
              <a href="https://github.com/gamecattt/react-mesto-api-full-gha" target='_blank' className="portfolio__link" >
                <span className="portfolio__project-name">Одностраничное приложение</span>
                <img className="portfolio__arrow" src={arrow} alt="Ссылка"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Portfolio;
