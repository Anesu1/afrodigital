import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import { BsArrowRight } from "react-icons/bs";

const CardWrapper = styled.div`
  border-radius: 26px;
  background: linear-gradient(
      to bottom,
      rgba(19, 19, 19, 0.5),
      rgba(41, 41, 41, 0.5)
    ),
    url(${(props) => props.img});
  padding: 5%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  color: #ffffff;
  max-width: 500px;
  background-size: cover;
  @media (min-width: 768px) {
    width: 40%;
    padding: 4%;
    height: 200px;
  }
  h3 {
    font-family: ${(props) => props.theme.fam.bold};
    font-size: 20px;
  }
  a {
    text-decoration: none;
    font-family: ${(props) => props.theme.fam.bold};
    color: #ffffff;
  }
`;

function BlogCard({ title, text, link }) {
  return (
    <CardWrapper className="blogCard">
      <h3>{title}</h3>
      <Paragraph>{text}</Paragraph>
      <Link to={`/${link}`}>
        Read more <BsArrowRight />
      </Link>
    </CardWrapper>
  );
}

export default BlogCard;
