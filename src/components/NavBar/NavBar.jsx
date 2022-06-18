import "./NavBar.css";

import { Link } from "react-router-dom";

import { navLinks } from "../../consts/navLinks";

function NavItem({ route, label }) {
  return (
    <li className="nav-bar__menu--nav-item">
      <Link to={route}>
        <span>{label}</span>
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__menu">
        {navLinks.map(({ route, label }) => (
          <NavItem key={route} route={route} label={label} />
        ))}
      </ul>
    </nav>
  );
}
