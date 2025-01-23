import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chi-siamo">CHI SIAMO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/prodotti">PRODOTTI</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
