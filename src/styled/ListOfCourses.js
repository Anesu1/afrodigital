import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ListDiv = styled.div`
  border: 1px solid #707070;
  padding: 5%;
  border-radius: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
  }
  .leftText {
    color: ${(props) => props.theme.color.green};
    display: flex;
    line-height: 1.3;
    align-items: center;
    @media (min-width: 768px) {
      margin: 0;
    }
    svg {
      color: ${(props) => props.theme.color.purple};
      margin-right: 20px;
      height: 30px;
      width: 30px;
    }
  }
  p {
    font-size: 18px;
  }
  .rightText {
    color: ${(props) => props.theme.color.purple};

    text-align: right;
    @media (min-width: 768px) {
      margin: 0;
      display: flex;
      line-height: 1.3;
      align-items: center;
    }
    svg {
      color: ${(props) => props.theme.color.green};
      height: 30px;
      width: 30px;
      margin-left: 20px;
      transform: translateY(5px);
      @media (min-width: 768px) {
        transform: translateY(0);
      }
    }
  }
`;

function ListOfCourses() {
  return (
    <ListDiv>
      <p className="leftText">
        <AiFillCheckCircle />
        <span>Pan Degree in Digital Marketing</span>
      </p>
      <p className="rightText">
        Completed <IoIosArrowDropdownCircle />
      </p>
    </ListDiv>
  );
}

export default ListOfCourses;
