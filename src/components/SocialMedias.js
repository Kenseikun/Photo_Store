import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import fb from "../assets/icons/fb.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

// const activeIconStyle = {
//   transform: "translateY(-50%)",
// };

const DisplayIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  height: 30px;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.violet};
`;

const Icons = styled.img`
  height: 60px;
  margin: 0 5px;

  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-50%);
  }
`;

const SocialMedias = () => {
  return (
    <DisplayIconsWrapper>
      <NavLink to="/">
        <Icons src={fb} att="social media icon"></Icons>
      </NavLink>
      <NavLink to="/">
        <Icons src={instagram} att="social media icon"></Icons>
      </NavLink>
      <NavLink to="/">
        <Icons src={twitter} att="social media icon"></Icons>
      </NavLink>
    </DisplayIconsWrapper>
  );
};

export default SocialMedias;
