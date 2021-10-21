import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const LatestWrapper = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 60px;
  }
  .text {
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  .img {
    height: 300px;
    width: 100%;
    background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.backgroundImage});
    border-radius: 26px;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.purple};
    font-family: ${(props) => props.theme.fam.bold};
  }
`;

function LatestItem({ backgroundImage, title, text, link }) {
  return (
    <LatestWrapper backgroundImage={backgroundImage}>
      <div className="img"></div>
      <div className="text">
        <Heading>{title}</Heading>
        <Paragraph>{text}</Paragraph>
        <Link to={`/${link}`}>Read more</Link>
      </div>
    </LatestWrapper>
  );
}

export default LatestItem;
