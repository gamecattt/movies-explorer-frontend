import './FilterCheckbox.scss'

function FilterCheckbox() {
  return (
      <label className="filter-checkbox" htmlFor="korotkometrazhki">
        <input className="filter-checkbox__input" type="checkbox" name="" id="korotkometrazhki"/>
        <i className="filter-checkbox__icon"/>
        Короткометражки
      </label>
  );
}

export default FilterCheckbox;
