import React from "react";
import Logo from "../atoms/Logo";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

const NavBar = () => {
  return (
    <nav>
      <Link to={routes.home}>
        <Logo />
      </Link>

      <ul>
        <li>
          <Link to={routes.about}>Why us?</Link>
        </li>
        <li>
          <Link to={routes.products}>Products</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
