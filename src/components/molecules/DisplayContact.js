import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input, TextareaAutosize, TextField } from "@material-ui/core";
import styled from "styled-components";
import Category from "../atoms/Category";
import Logo from "../atoms/Logo";
import SocialMedias from "../atoms/SocialMedias";
import GoogleMap from "../GoogleMap";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "grey",
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

const StyledForm = styled.form`
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
  color: "black",
};

const contactValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Enter your full name"),
  email: Yup.string().required("Enter your email").email("Invalid email"),
  message: Yup.string().required("enter your message"),
});

const DisplayContact = () => {
  const classes = useStyles();

  const handleEmailSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_EMAILJS_ID}`,
        `${process.env.REACT_APP_EMAILJS_TEMP}`,
        e.target,
        `${process.env.REACT_APP_EMAILJS_USER}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              message: "",
            }}
            validationSchema={contactValidationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, handleChange }) => (
              <StyledForm onSubmit={handleEmailSend}>
                <Input
                  placeholder="Full name"
                  type="text"
                  style={inputsStyle}
                  name="fullName"
                  value={values.fullName}
                  onChange={handleChange}
                />
                <div style={{ color: "red" }}>
                  <ErrorMessage name="fullName" />
                </div>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  style={inputsStyle}
                />
                <ErrorMessage name="email" />

                {/* <Input
                  placeholder="Phone"
                  name="contactPhoneInput"
                  type="number"
                  style={inputsStyle}
                /> */}
                <TextareaAutosize
                  placeholder="Tap your message..."
                  name="message"
                  style={textareaStyle}
                  rows="10"
                  value={values.message}
                  onChange={handleChange}
                />
                <ErrorMessage name="message" />

                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </StyledForm>
            )}
          </Formik>

          <SocialMedias inContact />
        </DIVFormWrapper>
      </DIVContactWrapper>
    </>
  );
};

export default DisplayContact;
