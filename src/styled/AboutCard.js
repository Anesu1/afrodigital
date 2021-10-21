import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const CardWrapper = styled.div`
    color:#ffffff;
    border-radius:26px;
    height:auto;
    width:100%;
    @media(min-width:768px){
      width:47%;
      margin-bottom:30px;
    }
    h3{
        font-size:20px;
        font-family:${props => props.theme.fam.regular};
        padding:20px;
        margin-bottom:10px;
        line-height:1.5;
    }
    p{
        padding:0 20px 20px 20px;
        margin-bottom:10px;
    }
`;

function AboutCard({ title, text }) {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <Paragraph>{text}</Paragraph>
    </CardWrapper>
  );
}

export default AboutCard;
