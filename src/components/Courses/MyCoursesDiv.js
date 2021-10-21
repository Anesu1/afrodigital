import React from "react";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import ListOfCourses from "../../styled/ListOfCourses";
import { IoIosArrowUp } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const DivWrapper = styled.section`
  padding: 5%;
  .img {
    height: 70px;
    width: 70px;
    border: 1px solid ${(props) => props.theme.color.green};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 30px;
    svg {
      height: 40px;
      width: 40px;
      color: ${(props) => props.theme.color.green};
    }
  }
  h3 {
    text-align: center;
    margin: 20px 0;
    font-size: 20px;
    color: ${(props) => props.theme.color.purple};
    font-family: ${(props) => props.theme.fam.semibold};
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }
  a {
    text-decoration: none;
    margin: auto;
    display: block;
    width: max-content;
    padding: 10px;
    font-family: ${(props) => props.theme.fam.bold};
    color: ${(props) => props.theme.color.green};
  }
  .summary {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    margin: auto;
    @media (min-width: 768px) {
      max-width: 400px;
    }
    .summary-inner {
      width: 25%;
      text-align: center;
      color: ${(props) => props.theme.color.purple};
      padding: 10px 0;
      &:nth-child(2) {
        padding: 10px 20px;
        border-right: 1px solid ${(props) => props.theme.color.green};
        border-left: 1px solid ${(props) => props.theme.color.green};
      }
      p {
        font-size: 22px;
        line-height: 0;
      }
    }
  }
  .header {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
    align-items: center;
    .search {
      margin-right: 30px;
      input {
        width: 200px;
        max-width: 0;
        transition: 0.7s;
        height: 50px;
        border: none;
        overflow: hidden;
        background: transparent;
        border-bottom: 1px solid ${(props) => props.theme.color.purple};
        &:focus {
          outline: none;
        }
      }
      svg {
        height: 20px;
        width: 20px;
        color: ${(props) => props.theme.color.purple};
        @media (min-width: 768px) {
          transform: translateY(10px);
        }
      }
    }
    p {
      color: ${(props) => props.theme.color.green};
    }
  }
`;

function MyCoursesDiv() {
  return (
    <DivWrapper>
      <div className="img">
        <BiUser />
      </div>
      <h3>FADZISO MASHAVA</h3>
      <Link to="/">Edit Profile</Link>
      <div className="summary">
        <div className="summary-inner">
          <p>1</p>
          <span>Course</span>
        </div>
        <div className="summary-inner">
          <p>1</p>
          <span>Completed</span>
        </div>
        <div className="summary-inner">
          <p>1</p>
          <span>Certificate</span>
        </div>
      </div>
      <div className="header">
        <div className="search">
          <input type="text" />
          <FaSearch />
        </div>
        <p>
          <IoIosArrowUp /> Collapse All
        </p>
      </div>
      <ListOfCourses />
    </DivWrapper>
  );
}

export default MyCoursesDiv;
