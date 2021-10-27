/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import styled from "styled-components";
import {useQuery, gql} from '@apollo/client'
import { Typography } from "@material-ui/core";

const BannerWrapper = styled.section`
  margin: 0 3%;
  padding-bottom: 90px;
  position: relative;
  .banner-inner {
    height: 80vh;
    width: 100%;
    background: linear-gradient(to bottom, #00000065, #00000065),
      url(${(props) => props.image});
    background-size: cover;
    border-radius: 49px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 768px) {
      height: 660px;
      justify-content: flex-start;
      align-items: flex-start;
    }
    @media (min-width: 1200px) {
      height: 75vh;
    }
    h1 {
      padding: 0 5%;
      font-size: 28px;
      margin-bottom: 0;
      color: #ffffff;
      font-family: ${(props) => props.theme.fam.semibold};
      @media (min-width: 768px) {
        font-size: 50px;
        margin-top: 100px;
        line-height: 51px;
        width: 550px;
      }
    }
    p {
      padding: 0 5%;
      color: #ffffff;
      font-size: 15px;
      line-height: 1.3;
      font-family: ${(props) => props.theme.fam.regular};
      @media (min-width: 768px) {
        width: 325px;
      }
    }
    .banner-bottom {
      display: none;
      transition: 0.7s;
      @media (min-width: 768px) {
        display: flex;
        position: absolute;
        bottom: 30px;
        left: 2%;
        flex-wrap: wrap;
        border-radius: 26px;
        border: 1px solid;
        padding: 0 20px;
        width: 77%;
      }
      @media (min-width: 992px) {
        width: 60%;
        left: 5%;
      }
      table {
        width: 100%;
      }
      h4 {
        color: ${(props) => props.theme.color.purple};
        width: 100%;
        font-family: ${(props) => props.theme.fam.bold};
      }
      .up-course {
        display: flex;
        margin-bottom: 20px;
        font-family: ${(props) => props.theme.fam.semibold};
        td {
          font-size: 13px;
        }
        .num {
          width: 15%;
          font-family: ${(props) => props.theme.fam.bold};
        }
        .title {
          color: ${(props) => props.theme.color.purple};
          width: 60%;
        }
        .period {
          width: 15%;
        }
        .time {
          color: ${(props) => props.theme.color.green};
          width: 20%;
        }
      }
    }
  }
  .switch {
    position: absolute;
    bottom: 0;
    right: 3%;
    .button {
      width: 60px;
      height: 30px;
      outline: 2px solid ${(props) => props.color};
      display: flex;
      padding: 0 5px;
      transition: 0.7s;
      align-items: center;
      border-radius:26px 26px 26px 26px !important;
      span {
        height: 25px;
        transform: ${(props) => props.translate};
        width: 25px;
        background: ${(props) => props.color};
        position: absolute;
        font-family: ${(props) => props.theme.fam.semibold};
        border-radius: 50%;
        transition: 0.7s;
      }
    }
  }
`;

export const AFRO_CONTENT = gql`
  query MyQuery {
    page(id: "cG9zdDo2") {
      content
    }
  }


`



function Banner({ dark, setDark, setLight }) {
  const { loading, error, data } = useQuery(AFRO_CONTENT);

  //the website was built with wp bakery age builder 
  

  if (loading) return <img src="./img/loading.gif" alt="" />;
  if (error) return <p>Error :(</p>;
  return (
    <BannerWrapper
      image
      translate={dark ? "translateX(0)" : "translateX(36px)"}
      color={dark ? "#fff" : "#0B8138"}
    >
      <div className="banner-inner">
        <h1>{}</h1>
        <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: data.page.content}} />
        <p>
        {}
        </p>
        <div className="banner-bottom">
          <h4>{}</h4>
          <table>
            <tr className="up-course">
              <td className="num">{}</td>
              <td className="title">
                {}
              </td>
              <td className="period">{}</td>
              <td className="time">{}</td>
            </tr>
            <tr className="up-course">
              <td className="num">{}</td>
              <td className="title">{}</td>
              <td className="period">{}</td>
              <td className="time">{}</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="switch">
        <div
          style={{ borderRadius: 26  }}
          className="button"
          onClick={dark ? setLight : setDark}
        >
          <span></span>
        </div>
        <p>{dark ? "dark mode" : "light mode"}</p>
      </div>
    </BannerWrapper>
  );
}

export default Banner;
