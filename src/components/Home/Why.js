import React from "react";
import styled from "styled-components";
import Button from "../../styled/Button";
import Slider from "react-slick";
import Heading from "../../styled/Heading";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Paragraph from "../../styled/Paragraph";
import TextLined from "../../styled/TextLined";

const WhyWrapper = styled.section`
  padding: 5%;
  .why-inner {
    margin-bottom: 30px;
    button {
      margin-bottom: 30px;
    }
  }
  .why-bottom {
    .logo {
      height: 100px;
      width: 210px;
      background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.img});
      margin-bottom: 20px;
    }
  }
  .item {
    .img {
      height: 300px;
      width: 100%;
      max-width: 500px;
      border-radius: 26px;
      background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.imageitem});
      display: flex;
      align-items: flex-end;
      p {
        padding: 18px;
        line-height:1.5;
        font-size: 25px;
        font-family: ${(props) => props.theme.fam.regular};
      }
    }
  }
`;

const NextButton = styled.div`
  cursor: pointer;
  right: 50px;
  top: -50px;
  background: #fff;
  height: 40px;
  width: 40px;
  transition: 0.7s;
  border-radius: 50%;
  outline: 2px solid ${(props) => props.theme.color.green};
  &:hover {
    background: ${(props) => props.theme.color.green};
    border: 1px solid #ffffff;
    outline: 2px solid ${(props) => props.theme.color.green};
    svg {
      color: #ffffff;
    }
  }
  &::before {
    color: transparent;
  }
  svg {
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.color.green};
    transform: translate(-50%, 50%);
  }
`;

const PrevButton = styled.div`
  cursor: pointer;
  left: unset;
  right: 120px;
  background: #fff;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: 0.7s;
  border-radius: 50%;
  outline: 2px solid ${(props) => props.theme.color.green};
  &:hover {
    background: ${(props) => props.theme.color.green};
    border: 1px solid #ffffff;
    outline: 2px solid ${(props) => props.theme.color.green};
    svg {
      color: #ffffff;
    }
  }
  &::before {
    color: transparent;
  }
  svg {
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.color.green};
    transform: translate(-50%, 50%);
  }
`;

function Why() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: (
      <PrevButton>
        <BsChevronLeft />
      </PrevButton>
    ),
    nextArrow: (
      <NextButton>
        <BsChevronRight />
      </NextButton>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <WhyWrapper>
      <div className="why-inner">
        <TextLined text="Why Choose Us" />

        <Heading>We help students across all Africa.</Heading>
        <Paragraph>
          Afrodigital aims to develop a wide range of pan degrees for
          entrepreneurs, digital marketers and leaders. We have alliances with
          universities and international organisations who are accrediting our
          courses.
        </Paragraph>
        <Button>All Courses</Button>

        <TextLined text="Accreditation" />
        <div className="why-bottom">
          <div className="logo">
            <img src="" alt="Logo" />
          </div>
          <div className="logo">
            <img src="" alt="logo" />
          </div>
          <div className="logo">
            <img src="" alt="logo" />
          </div>
        </div>
      </div>

      <div className="why-courses">
        <Slider {...settings}>
          <div className="item">
            <div className="img">
              <p>Expirienced Proffesionals</p>
            </div>
            <div className="text">
              <Paragraph>
                The intructors in all our online courses, in-person events and
                corporate training sessions are very expirienced proffessionals
                in their field. Our mission is to get many people to learn the
                practical skills they need to excel in any field we are
                covering. This means you are
              </Paragraph>
            </div>
          </div>
          <div className="item">
            <div className="img">
              <p>2 Expirienced Proffesionals</p>
            </div>
            <div className="text">
              <Paragraph>
                The instructors in all our online courses, in-one events and
                corporate training sessions are very expirienced proffessionals
                in their field. Our mission is to get many people to learn the
                practical skills they need to excel in any field we are
                covering. This means you are
              </Paragraph>
            </div>
          </div>
        </Slider>
      </div>
    </WhyWrapper>
  );
}

export default Why;
