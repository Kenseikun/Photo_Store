import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, TextareaAutosize, TextField } from "@material-ui/core";
import styled from "styled-components";
import Category from "../atoms/Category";
import Logo from "../atoms/Logo";
import SocialMedias from "../atoms/SocialMedias";

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

const DisplayContact = () => {
  const classes = useStyles();
  return (
    <>
      <DIVContactWrapper>
        <DIVLogoWrapper>
          <Logo inContact></Logo>
          <PLogoText>Digital & analog cameras</PLogoText>
        </DIVLogoWrapper>

        <DIVFormWrapper>
          <Category inContact>Contact</Category>
          <Form className={classes.root} noValidate autoComplete="off">
            <Input placeholder="Full name" type="text" required />
            <Input placeholder="Email" type="email" required />
            <Input placeholder="Phone" type="number" required />
            <TextareaAutosize
              label="Tap your message"
              style={{ color: "black" }}
              required
            ></TextareaAutosize>
            <Button variant="contained" color="primary">
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
