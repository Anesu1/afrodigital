import React from "react";
import styled from "styled-components";

const ArticleWrapper = styled.div`
  border-radius: 26px;
  background: linear-gradient(
      to bottom,
      rgba(19, 19, 19, 0.5),
      rgba(41, 41, 41, 0.5)
    ),
    url(${(props) => props.img});
  height: 250px;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 768px) {
    width: 32%;
    height: 150px;
  }
  @media (min-width: 992px) {
    width: 100%;
  }
  p {
    padding: 20px;
    color: #ffffff;
    line-height: 1.3;
    font-family: ${(props) => props.theme.fam.semibold};
  }
`;

function Article({ img, text }) {
  return (
    <ArticleWrapper img={img}>
      <p>{text}</p>
    </ArticleWrapper>
  );
}

export default Article;
