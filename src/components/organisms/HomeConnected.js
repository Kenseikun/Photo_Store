import React from "react";
import styled, { css } from "styled-components";
import homeImg from "../../assets/landingImage/landingPageCamera.png";
import DisplayHome from "../molecules/DisplayHome";
import SocialMedias from "../atoms/SocialMedias";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 70px);
`;
const HomeImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
const HomeImage = styled.img`
  height: 60vh;
  margin: 30px auto;
`;

const HomeConnected = () => {
  return (
    <HomeWrapper>
      <DisplayHome></DisplayHome>
      <HomeImageWrapper>
        <HomeImage src={homeImg}></HomeImage>
        <SocialMedias></SocialMedias>
      </HomeImageWrapper>
    </HomeWrapper>
  );
};

export default HomeConnected;
