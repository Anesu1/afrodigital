import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ProfileLink from "./ProfileLink";
import { AiFillRightCircle } from "react-icons/ai";
import { connect, useDispatch } from "react-redux";
import { setOpenSide } from "../redux/sideBarSlice";
import Downloads from "../components/Profile/Downloads";
import AccountDetailsPage from "../pages/AccountDetailsPage";
import Orders from "../components/Profile/Orders";
import { Route } from "react-router-dom";
import LogOut from "../components/Profile/LogOut";

const NavigationWrapper = styled.div`
  position: relative;
  width:100%;
  @media(min-width:768px){
    display:flex;
    flex-wrap:wrap;
    
  }
  h3 {
    color: ${(props) => props.theme.color.purple};
    padding: 5%;
    margin-left: 60px;
    @media(min-width:768px){
      margin-left:0;
      width:100%;
      padding:2% 5%;
    }
  }
  .active {
    button {
      font-weight: 900;
      @media (min-width: 768px) {
        background: ${(props) => props.theme.color.purple};
        color: #ffffff;
        font-weight:normal;
        border-color: ${(props) => props.theme.color.purple};
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 9;
    top: 0;
    background: ${(props) => props.theme.color.green};
    padding: 30px 0;
    max-width: 50px;
    max-height: 0px;
    border-bottom-right-radius: 26px;
    border-top-right-radius: 26px;
    transition: 0.7s;
    overflow: hidden;
    @media(min-width:768px){
      max-width:unset;
      max-height:unset;
      background: transparent;
      position:unset;
      padding: 0 5%;
    }
    .sideMenu {
      position: absolute;
      top: 5%;
      right: 10px;
      @media(min-width:768px){
      display:none;
    }
      svg {
        height: 30px;
        width: 30px;
        color: #ffffff;
      }
    }
    a {
      opacity: 0;
      pointer-events: none;
      width: max-content;
      transition: 0.7s;
      @media(min-width:768px){
      pointer-events: unset;
      opacity: 1;
    }
      button {
        padding: 20px; 
        @media(min-width:768px){
      padding:0;
    }

      }
    }
  }
  .opened {
    max-width: 300px;
    max-height: 600px;
    a {
      pointer-events: unset;
      opacity: 1;
    }
  }
`;

const mapStateToProps = (state) => ({
  openSide: state.sideBar.openSide,
});

function ProfileNavigation({ openSide }) {
  const dispatch = useDispatch();
  return (
    <NavigationWrapper>
      <h3>Hi, Fadziso</h3>

      <div className={openSide ? "menu opened" : "menu"}>
        <div
          className="sideMenu"
          onClick={() => dispatch(setOpenSide(!openSide))}
        >
          <AiFillRightCircle />
        </div>
        <NavLink to="/profile/orders" exact activeClassName="active" onClick={() => dispatch(setOpenSide(false))}>
          <ProfileLink text="Orders" />
        </NavLink>
        <NavLink to="/profile/downloads" activeClassName="active" onClick={() => dispatch(setOpenSide(false))}>
          <ProfileLink text="Downloads" />
        </NavLink>
        <NavLink to="/profile/account-details" activeClassName="active" onClick={() => dispatch(setOpenSide(false))}>
          <ProfileLink text="Account Details" />
        </NavLink>
        <NavLink to="/profile/logout" activeClassName="active" onClick={() => dispatch(setOpenSide(false))}>
          <ProfileLink text="Log Out" />
        </NavLink>
      </div>

      <Route path="/profile/downloads" component={Downloads} />
      <Route path="/profile/account-details" component={AccountDetailsPage} />
      <Route path="/profile/orders" component={Orders} />
      <Route path="/profile/logout" component={LogOut} />
    </NavigationWrapper>
  );
}

export default connect(mapStateToProps)(ProfileNavigation);
