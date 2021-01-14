import React from "react";
import styled from "styled-components";
import Category from "../atoms/Category";
import Logo from "../atoms/Logo";

const DIVAboutContainer = styled.div`
  position: relative;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DIVLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PShopName = styled.p`
  margin: 20px auto;
  font-size: 2em;
`;

const PAboutText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
  background-color: ${({ theme }) => theme.colors.violet};
  padding: 10px 50px;
  letter-spacing: 5px;
  text-align: right;
`;

const AboutConnected = () => {
  return (
    <DIVAboutContainer>
      <Category inAbout>Why us?</Category>
      <DIVLogoWrapper>
        <Logo inAbout></Logo>
        <PShopName>Digital & analog cameras</PShopName>
      </DIVLogoWrapper>
      <PAboutText>
        Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
        ipsa optio expedita at beatae eaque rerum blanditiis laborum, nulla
        dolorem repellat tempora, amet ut iure architecto quidem ullam, incidunt
        ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nobis
        veniam asperiores doloremque sequi mollitia aperiam fugiat
        exercitationem et esse sapiente quaerat debitis totam praesentium culpa,
        repellat officia ut voluptatem? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptas quis delectus consectetur vero, itaque amet
        aperiam reiciendis nam suscipit sit odio dicta facere ad odit qui
        debitis sint tempore magnam!
        <br />
        <br />
        <br />
        <br />
        Lorem impsum
      </PAboutText>
    </DIVAboutContainer>
  );
};

export default AboutConnected;
