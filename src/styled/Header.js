/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { CgClose, CgMenu } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { connect, useDispatch } from "react-redux";
import { setOpen } from "../redux/menuSlice";

const HeaderWrapper = styled.header`
  font-family: ${(props) => props.theme.fam.regular};

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
  }
  .logo {
    width: 180px;
    position:relative;
    z-index:99;
  }
  .hamburger {
    position: absolute;
    right: 5%;
    top: 25px;
    @media (min-width: 992px) {
      display: none;
    }
    svg {
      height: 30px;
      width: 30px;
      color: ${(props) => props.theme.color.green};
    }
  }
  .menu {
    position: absolute;
    transition: 0.7s;
    width: 100%;
    z-index: 9;
    max-width: 0;
    overflow-x: hidden;
    height: 100vh;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    @media (min-width: 768px) {
      height: 740px;
      box-shadow: 0px 3px 11px #0000003d;
    }
    @media (min-width: 992px) {
      position: relative;
      max-width: unset;
      height: auto;
      flex: 1;
      justify-content: flex-end;
      flex-direction: row;
      margin-right: 60px;
      overflow: visible;
      box-shadow: unset;
    }

    .close {
      position: absolute;
      right: 5%;
      top: 25px;
      @media (min-width: 992px) {
        display: none;
      }
      svg {
        height: 30px;
        width: 30px;
        color: ${(props) => props.theme.color.green};
      }
    }
    li {
      width: max-content;
      a {
        text-decoration: none;
        display: block;
        padding: 20px;
        font-weight: bold;
        font-family: ${props => props.theme.fam.semibold};
        color: ${(props) => props.theme.color.green};
        @media (min-width: 1200px) {
          margin: 0 20px;
        }
      }
    }
    .forDropdown{
      &:hover{
        .dropDown{
          opacity:1;
        transform: translateY(0);
        max-height:150px;
        }
      }
    }
    .dropDown{
      text-align:center;
      transition:0.7s;
      transform: translateY(30px);
      display:flex;
      align-items:center;
      opacity:0;
      flex-direction:column;
      max-height:0;
      overflow: hidden;
      @media(min-width:992px){
        position:absolute;
      }
      li{
        a{
          @media(min-width:992px){
            font-size:15px;
            padding:10px 20px;
            &:hover{
              color:#10aa4b;
            }
          }
        }
      }
    }
  }
  .active {
    max-width: 1000px;
  }
  .user {
    position: absolute;
    top: 25px;
    z-index: 3;
    right: 20%;
    text-decoration: none;
    @media (min-width: 768px) {
      right: 12%;
    }
    @media (min-width: 992px) {
      position: unset;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    svg {
      height: 30px;
      width: 30px;
      color: ${(props) => props.theme.color.green};
    }
    span {
      display: none;
      font-family: ${props => props.theme.fam.semibold};
      @media (min-width: 992px) {
        display: block;
        font-size: 10px;
        font-weight: 900;
      }
    }
  }
`;

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
  open: state.menu.open
});

function Header({ dark, open }) {
  
  const dispatch = useDispatch()

  return (
    <HeaderWrapper className={dark ? "dark" : "light"}>
      <Link to="/">
        <img src="/img/logo.png" className="logo" alt="" />
      </Link>
      <div className="hamburger" onClick={() => dispatch(setOpen(true))}>
        <CgMenu />
      </div>
      <ul className={open ? "menu active" : "menu"}>
        <div className="close" onClick={() => dispatch(setOpen(false))}>
          <CgClose />
        </div>

        <li onClick={() => dispatch(setOpen(false))}>
          <Link to="/about">About Us</Link>
        </li>
        <li className="forDropdown">
          <a href="#">
            My Courses <FiChevronDown />
          </a>
          <ul className="dropDown">
            <li onClick={() => dispatch(setOpen(false))}>
              <Link to="/all-courses">
                All Courses
              </Link>
            </li>
            <li onClick={() => dispatch(setOpen(false))}>
              <Link to="/my-courses">
                My Courses
              </Link>
            </li>
            <li onClick={() => dispatch(setOpen(false))}>
              <Link to="/one-course">
                One Course
              </Link>
            </li>
          </ul>
        </li>
        <li onClick={() => dispatch(setOpen(false))}>
          <Link to="/blog">Blog</Link>
        </li>
        <li onClick={() => dispatch(setOpen(false))}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <Link to="/profile" className="user">
        <BiUser />
        <span className={dark ? 'dark' : 'light'}>Profile</span>
      </Link>
    </HeaderWrapper>
  );
}

export default connect(mapStateToProps)(Header);
