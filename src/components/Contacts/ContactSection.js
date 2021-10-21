import React from "react";
import styled from "styled-components";
import { FormControl, Input, InputLabel, TextField } from "@material-ui/core";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";
import Map from "../../styled/Map";
import Button from "../../styled/Button";

const ContactWrapper = styled.section`
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 10px;
    input {
      height: 40px;
      color: ${(props) => props.theme.color.green};
      &::placeholder {
        color: ${(props) => props.theme.color.green};
      }
    }
    .MuiInput-underline {
      &:after {
        border-bottom-color: ${(props) => props.theme.color.green};
      }
      &:before {
        border-bottom-color: #4b4b4b;
      }
    }
    textarea {
      color: ${(props) => props.theme.color.green};
    }
    label {
      color: ${(props) => props.theme.color.green};
    }
    button {
      margin-left: auto;
      display: block;
      margin-top: 40px;
    }
  }
  .contact-inner {
    @media (min-width: 768px) {
      width: 40%;
    }
    h2 {
      color: ${(props) => props.theme.color.purple};
      font-family: ${(props) => props.theme.fam.bold};
    }
    p {
      color: ${(props) => props.theme.color.green};
    }
    .map {
      height: 300px;
      width: 100%;
      overflow: hidden;
      border-radius: 26px;
      margin-top: 40px;
    }
  }
`;

function ContactSection() {
  return (
    <ContactWrapper>
      <div className="contact-inner">
        <Heading>Contact Form</Heading>
        <form action="">
          <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <InputLabel>Email Address</InputLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <InputLabel>Phone Number</InputLabel>
            <Input type="number" />
          </FormControl>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="contact-inner">
        <Heading>Contact Details</Heading>
        <Paragraph>12 Trent Road, Avonlea. Harare, Zimbabwe</Paragraph>
        <Paragraph>admin@afrodigital.org</Paragraph>
        <Paragraph>+263 78 072 8108(Calls & whatsapp)</Paragraph>
        <div className="map">
          <Map />
        </div>
      </div>
    </ContactWrapper>
  );
}

export default ContactSection;
