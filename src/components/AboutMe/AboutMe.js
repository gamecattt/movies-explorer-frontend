import Headline from "../Headline/Headline";
import Portfolio from "../Portfolio/Portfolio";
import './AboutMe.scss';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
      <section className="about-me extra-indent extra-indent_theme_double" id="about-me">
        <Headline text="Студент"/>
        <div className="about-me__info">
          <div className="about-me__main-text">
            <div className="about-me__top-text">
              <h4 className="about-me__name">Анна</h4>
              <p className="about-me__line">Фронтенд-разработчик, 33 года</p>
              <p className="about-me__description">
                Я родилась и живу в разных местах - жизнь меня помотала, закончила Инжэкон по
                специальности "Экономика и управление в нефтегазе", а позже СПБГУ - "Бухучет и
                аудит". У меня нет даже кота. Я люблю слушать музыку, коллекционирую винил,
                катаюсь на велосипеде, бегаю, плаваю и качаю железо, но похудеть к лету так и не
                получается! А ещё я строю красивый город в ПлюсСити. Работала экономистом в сфере
                Гособоронзаказа, но год назад решила сменить сферу деятельности.
              </p>
            </div>
            <a href="https://github.com/gamecattt" target="_blank" className="about-me__link">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студента"/>
        </div>
        <Portfolio/>
      </section>
  );
}

export default AboutMe;
