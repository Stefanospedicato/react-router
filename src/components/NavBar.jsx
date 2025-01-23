import { NavLink } from "react-router-dom";
import navbarMenu from "../../data/navbarMenu";

const NavBar = () => {
  const { id, name, url } = navbarMenu;
  return (
    <nav>
      <ul className="nav">
        {/* <li className="nav-item">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/chi-siamo">CHI SIAMO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/prodotti">PRODOTTI</NavLink>
        </li> */}
        {navbarMenu.map((item) => (
          <li key={item.id} className="nav-item">
            <NavLink to={item.url}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
