import iconSave from '../../images/icon__save.svg'
import iconDelete from '../../images/icon__delete.svg'
import './MoviesCard.scss'

function MoviesCard(props) {
  return (
      <li className="movies__card">
        <div className="movies__heading">
          <div className="movies__info">
            <h2 className="movies__title">{props.title}</h2>
            <span className="movies__time">{props.time}</span>
          </div>
          <button className={'movies__card-btn ' + (props.saved ? 'movies__card-btn_active' : '')}>
            <img src={props.isSavedList ? iconDelete : iconSave} alt="Сохранить"/>
          </button>
        </div>
        <img className="movies__card-img" src={props.image} alt={props.title}/>
      </li>
  );
}

export default MoviesCard;
