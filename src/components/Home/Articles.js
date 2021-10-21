import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Article from "../../styled/Article";
import TextLined from "../../styled/TextLined";
import { BsArrowRight } from "react-icons/bs";

const ArticleWrapper = styled.section`
  margin: 5%;
  padding-bottom: 30px;
  margin-bottom: 0;
  .article-inner {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
    }
  }
  .article-item {
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
    justify-content: flex-end;
    flex-direction: column;
    font-family: ${(props) => props.theme.fam.regular};
    @media (min-width: 992px) {
      height: auto;
      width: 66%;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }
    p {
      padding: 20px 20px 10px 20px;
      color: #ffffff;
      font-size: 20px;
      line-height: 1.3;
      font-family: ${(props) => props.theme.fam.regular};
      @media (min-width: 992px) {
        width: 390px;
        font-size: 40px;
      }
    }
    a {
      display: block;
      padding: 0 30px 30px 20px;
      text-decoration: none;
      color: #ffffff;
      font-family: ${(props) => props.theme.fam.regular};
      svg {
        margin-left: 10px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        @media (min-width: 768px) {
          transform: unset;
          top: unset;
        }
      }
    }
  }
  .article-right {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    @media (min-width: 992px) {
      width: 32%;
      flex-direction: column;
    }
  }
`;

function Articles() {
  return (
    <ArticleWrapper>
      <TextLined text="Our Articles" />
      <div className="article-inner">
        <div className="article-item">
          <p>Put Your headline here</p>
          <Link to="/">
            Read your article <BsArrowRight />
          </Link>
        </div>
        <div className="article-right">
          <Article img="" text="Put your headline here" />
          <Article img="" text="Put your headline here" />
          <Article img="" text="Put your headline here" />
        </div>
      </div>
    </ArticleWrapper>
  );
}

export default Articles;
