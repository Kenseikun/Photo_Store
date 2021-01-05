import React from "react";
import Logo from "../atoms/Logo";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";

const activeNavLinkStyle = {
  border: "1px solid red",
};

const NavBar = () => {
  return (
    <nav>
      <Link to={routes.home}>
        <Logo />
      </Link>

      <ul>
        <li>
          <NavLink to={routes.about} activeStyle={activeNavLinkStyle}>
            Why us?
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.products} activeStyle={activeNavLinkStyle}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.contact} activeStyle={activeNavLinkStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
