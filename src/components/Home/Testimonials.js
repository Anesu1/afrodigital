import React from "react";
import styled from "styled-components";
import TextLined from "../../styled/TextLined";
import Slider from "react-slick";
import Heading from "../../styled/Heading";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Testimony from "../../styled/Testimony";

const TestWrapper = styled.section`
  @media (min-width: 768px) {
    padding: 5% 0;
  }
  > p,
  h2 {
    padding: 0 5%;
  }
  .carousel {
    margin: 10px 0 30px;
  }
  .slick-dots {
    transform: translateY(20px);
    li {
      button {
        &:before {
          font-size: 40px;
          opacity: 0.66;
          color: #013013;
        }
      }
    }
    .slick-active {
      button {
        &:before {
          opacity: 1;
        }
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
  top: -50px;
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

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    centerMode: true,
    centerPadding: "260px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <TestWrapper>
      <TextLined text="Testimonials" />
      <Heading>Hear what our students have to say</Heading>
      <div className="carousel">
        <Slider {...settings}>
          <Testimony
            img=""
            title="Fadziso Mashava"
            role="Product Designer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!, Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!"
          />
          <Testimony
            img=""
            title="Anesu Ndoro"
            role="Web Developer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!, Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!"
          />
          <Testimony
            img=""
            title="Trust"
            role="Producer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!"
          />
          <Testimony
            img=""
            title="Beyond"
            role="Designer"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestiae, excepturi porro accusamus eaque iure. Error voluptatum omnis quo minima!"
          />
        </Slider>
      </div>
    </TestWrapper>
  );
}

export default Testimonials;
