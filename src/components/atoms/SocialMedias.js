import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import fb from "../../assets/icons/fb.png";
import instagram from "../../assets/icons/instagram.png";
import twitter from "../../assets/icons/twitter.png";

const DisplayIconsWrapper = styled.div`
  overflow: hidden;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.violet};
  background-color: transparent;
  margin: 20px 0px;
`;

const Icons = styled.img`
  height: 50px;
  margin: 0 5px;

  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-50%);
  }

  ${({ inContact }) => inContact && css``}
`;

const SocialMedias = ({ inContact }) => {
  return (
    <DisplayIconsWrapper inContact={inContact}>
      <NavLink to="/">
        <Icons src={fb} att="social media icon"></Icons>
      </NavLink>
      <NavLink to="/a">
        <Icons src={instagram} att="social media icon"></Icons>
      </NavLink>
      <NavLink to="">
        <Icons src={twitter} att="social media icon"></Icons>
      </NavLink>
    </DisplayIconsWrapper>
  );
};

export default SocialMedias;
