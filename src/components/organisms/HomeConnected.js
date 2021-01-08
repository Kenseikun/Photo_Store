import React from "react";
import styled, { keyframes } from "styled-components";
import homeImg from "../../assets/landingImage/landingPageCamera.png";
import DisplayHome from "../molecules/DisplayHome";
import SocialMedias from "../atoms/SocialMedias";

const imgAnimate = keyframes`
  from {
    transform: translateX(200px) scale(0.2);
    opacity: 0;
    
  }

  to {
    transform:  translateX(0px) scale(1);
    opacity: 10;
   
  }
`;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100vh - 70px);
  overflow: hidden;
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
  animation: ${imgAnimate} 1s linear forwards;
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
