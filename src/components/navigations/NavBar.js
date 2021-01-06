import React, { useContext } from "react";
import Logo from "../atoms/Logo";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import cartIcon from "../../assets/icons/shopping-bag.svg";
import Button from "../atoms/Button";
import RootContext from "../../context";

const activeNavLinkStyle = {
  borderBottom: "1px solid red",
};

const DisplayNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const DisplayUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

const NavBar = () => {
  const context = useContext(RootContext);
  const { handleCartOpen } = context;
  return (
    <DisplayNav>
      <Link to={routes.home}>
        <Logo />
      </Link>

      <DisplayUl>
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
        <li>
          <Button icon={cartIcon} cartBtn onClickFn={handleCartOpen}>
            1
          </Button>
        </li>
      </DisplayUl>
    </DisplayNav>
  );
};

export default NavBar;
