import logo from '../../images/logo.svg'
import './Logo.scss'
import {Link} from "react-router-dom";

function Logo() {
  return (
      <Link className="logo" to="/">
        <img className="logo__img" src={logo} alt="Логотип"/>
      </Link>
  );
}

export default Logo;
