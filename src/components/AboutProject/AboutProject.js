import Headline from "../Headline/Headline";
import './AboutProject.scss'

function AboutProject() {
  return (
      <section className="about-project extra-indent extra-indent_theme_double" id="about-project">
        <Headline text="О проекте"/>
        <div className="about-project__two-columns">
          <div className="about-project__column">
            <h4 className="about-project__subtitle">Дипломный проект включал 5 этапов</h4>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div className="about-project__column">
            <h4 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h4>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__scale">
          <div className="about-project__scale-left">
            <span className="about-project__scale-caption">1 неделя</span>
          </div>
          <div className="about-project__scale-right">
            <span className="about-project__scale-caption">4 недели</span>
          </div>
        </div>
        <div className="about-project__scale about-project__scale_theme_opacity">
          <div className="about-project__scale-left">
            <span className="about-project__scale-caption">Back-end</span>
          </div>
          <div className="about-project__scale-right">
            <span className="about-project__scale-caption">Front-end</span>
          </div>
        </div>
      </section>
  );
}

export default AboutProject;
