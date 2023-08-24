import Headline from "../Headline/Headline";
import './Techs.scss';

function Techs() {
  return (
      <section className="techs extra-indent extra-indent_theme_double" id="techs">
        <Headline text="Технологии"/>
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item">
            <span className="techs__link">HTML</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">CSS</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">JS</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">React</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">Git</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">Express.js</span>
          </li>
          <li className="techs__item">
            <span className="techs__link">mongoDB</span>
          </li>
        </ul>
      </section>
  );
}

export default Techs;
