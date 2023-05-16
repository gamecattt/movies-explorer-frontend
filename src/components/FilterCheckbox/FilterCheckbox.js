import './FilterCheckbox.scss'

function FilterCheckbox({checked, onChange}) {

  function handleChange(e) {
    onChange(e)
  }

  return (
      <label className="filter-checkbox" htmlFor="korotkometrazhki">
        <input className="filter-checkbox__input" type="checkbox" id="korotkometrazhki" onChange={handleChange}
               checked={checked}/>
        <i className="filter-checkbox__icon"/>
        Короткометражки
      </label>
  );
}

export default FilterCheckbox;
