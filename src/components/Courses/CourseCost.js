import Button from "../../styled/Button";
import React from "react";
import styled from "styled-components";
import TextLined from "../../styled/TextLined";
import CourseDetails from "./CourseDetails";
import Heading from "../../styled/Heading";

const CostWrapper = styled.section`
  padding: 5%;
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .img {
    height: 400px;
    width: 100%;
    border-radius: 26px;
    background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.img});
    background-size: cover;
  }
  p {
    font-family: ${(props) => props.theme.fam.regular};
    font-size: 20px;
    margin-bottom: 30px;
    span {
      color: ${(props) => props.theme.color.green};
      font-family: ${(props) => props.theme.fam.bold};
    }
  }
  .cost-inner {
    @media (min-width: 992px) {
      width: 47.5%;
    }
  }
`;

function CourseCost() {
  return (
    <CostWrapper>
      <div className="cost-inner">
        <TextLined text="Courses" />
        <Heading>Certified Digital Selling Specialist Course</Heading>
        <div className="img"></div>
        <p>
          <span>START: </span>6 October, 2021
        </p>
        <p>
          <span>DURATION </span>10 Weeks
        </p>
        <p>
          <span>ID </span>CDP101
        </p>
        <p>
          <span>PRICE </span>$100.00
        </p>
        <Button>Enroll</Button>
      </div>
      <CourseDetails />
    </CostWrapper>
  );
}

export default CourseCost;
