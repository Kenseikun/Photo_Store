import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, TextareaAutosize, TextField } from "@material-ui/core";
import styled from "styled-components";
import Category from "../atoms/Category";
import Logo from "../atoms/Logo";
import SocialMedias from "../atoms/SocialMedias";
import GoogleMap from "../GoogleMap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "gray",
    },
  },
}));

const DIVContactWrapper = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100%;
`;

const DIVLogoWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PLogoText = styled.p``;
const DIVFormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.violet};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const inputsStyle = {
  width: "350px",
  margin: "10px auto",
  color: "#fff",
};
const textareaStyle = {
  width: "500px",
  margin: "30px auto",
  padding: "10px",
  outline: "none",
};

const DisplayContact = () => {
  const classes = useStyles();
  return (
    <>
      <DIVContactWrapper>
        <DIVLogoWrapper>
          {/* <Logo inContact></Logo>
          <PLogoText>Digital & analog cameras</PLogoText> */}
          <GoogleMap></GoogleMap>
        </DIVLogoWrapper>

        <DIVFormWrapper>
          <Category inContact>Contact</Category>
          <Form
            className={classes.root}
            noValidate
            autoComplete="off"
            type="submit"
          >
            <Input
              placeholder="Full name"
              type="text"
              required
              style={inputsStyle}
            />
            <Input
              placeholder="Email"
              type="email"
              required
              style={inputsStyle}
            />
            <Input
              placeholder="Phone"
              type="number"
              required
              style={inputsStyle}
            />
            <TextareaAutosize
              label="Tap your message"
              style={textareaStyle}
              required
              rows="10"
            ></TextareaAutosize>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Form>
          <SocialMedias inContact />
        </DIVFormWrapper>
      </DIVContactWrapper>
    </>
  );
};

export default DisplayContact;
