import React from 'react';
import styled from 'styled-components'

const BannerWrapper = styled.section`
  margin: 0 3%;
  padding-bottom:5%;
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
    @media(min-width:1200px){
        height:75vh;
    }
    h1 {
      padding: 0 5%;
      font-size: 28px;
      margin-bottom: 0;
      color: #ffffff;
      font-family: ${(props) => props.theme.fam.bold};
      @media (min-width: 768px) {
        font-size: 40px;
        margin-top: 100px;
        line-height: 51px;
        width:460px;

      }

    }
  
    
  }
  p {
      padding: 0 5%;
      color: #ffffff;
      font-size: 15px;
      line-height:1.3;
      font-family: ${(props) => props.theme.fam.regular};
        @media(min-width:768px){
            width:325px;
        }
    }
`;

function Banner({ dark, text, description}) {
  return (
    <BannerWrapper
      image="./img/bg.jpg"
      translate={dark ? "translateX(0)" : "translateX(36px)"}
      color={dark ? "#fff" : "#0B8138"}
    >
      <div className="banner-inner">
        <h1>{text}</h1>
        <p>{description}</p>
      
      </div>
      
    </BannerWrapper>
  );
}

export default Banner;
