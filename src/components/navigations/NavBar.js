import React, { useContext } from "react";
import Logo from "../atoms/Logo";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";
import styled from "styled-components";
import cartIcon from "../../assets/icons/shopping-bag.svg";
import Button from "../atoms/Button";
import RootContext from "../../context";
import Search from "../organisms/Search";

const activeNavLinkStyle = {
  borderBottom: `2px solid #ac003e`,
};

const DisplayNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 10px;
`;

const DisplayUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  list-style: none;
`;

const DisplayLi = styled.li`
  font-size: 20px;
  font-weight: 500;

  &:hover {
    opacity: 0.6;
  }
`;

const NavBar = () => {
  const context = useContext(RootContext);
  const { handleCartOpen, cart, productsInCartQuantity } = context;
  return (
    <DisplayNav>
      <Link to={routes.home}>
        <Logo />
      </Link>
      <DisplayUl>
        <DisplayLi>
          <NavLink exact to={routes.home} activeStyle={activeNavLinkStyle}>
            Home
          </NavLink>
        </DisplayLi>
        <DisplayLi>
          <NavLink to={routes.about} activeStyle={activeNavLinkStyle}>
            Why us?
          </NavLink>
        </DisplayLi>
        <DisplayLi>
          <NavLink to={routes.products} activeStyle={activeNavLinkStyle}>
            Products
          </NavLink>
        </DisplayLi>
        <DisplayLi>
          <NavLink to={routes.contact} activeStyle={activeNavLinkStyle}>
            Contact
          </NavLink>
        </DisplayLi>
        <DisplayLi>
          <Button icon={cartIcon} cartBtn onClickFn={handleCartOpen}>
            {productsInCartQuantity}
          </Button>
        </DisplayLi>
        <DisplayLi>
          <Search />
        </DisplayLi>
      </DisplayUl>
    </DisplayNav>
  );
};

export default NavBar;
