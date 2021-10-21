import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin-bottom: 30px;
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 992px) {
    display: flex;
    width: 50%;
  }
  .img-left {
    height: 250px;
    width: 100%;
    border-radius: 26px;
    overflow: hidden;
    background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.img});
    img {
      width: 100%;
    }
    @media (min-width: 992px) {
      width: 40%;
      height: 180px;
    }
  }
  .body {
    @media (min-width: 992px) {
      width: 50%;
      margin: 0 0 0 30px;
    }
    h3 {
      font-family: ${(props) => props.theme.fam.bold};
      color: ${(props) => props.theme.color.purple};
      font-size: 20px;
      line-height: 1.3;
    }
    p {
      font-family: ${(props) => props.theme.fam.regular};
      font-size: 15px;
      line-height: 1.3;
      color: ${(props) => props.theme.color.green};
    }
    a {
      font-family: ${(props) => props.theme.fam.semibold};
      color: ${(props) => props.theme.color.purple};
      text-decoration: none;
    }
  }
`;

function Card({ title, link, text, image }) {
  return (
    <CardWrapper>
      <div className="img-left">
        <img src={image} alt="" />
      </div>
      <div className="body">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link}>Read More...</a>
      </div>
    </CardWrapper>
  );
}

export default Card;
