import React from "react";
import styled from "styled-components";
import TextLined from "../../styled/TextLined";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const StoryWrapper = styled.section`
  padding: 5%;
  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
  }
  .story-inner {
    background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.imageitem});
    height: 400px;
    width: 100%;
    border-radius: 26px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
    @media (min-width: 992px) {
      width: 40%;
      height: 500px;
    }
    p {
      padding: 20px;
      color: #ffffff;
      font-size: 18px;
    }
  }
  .story-item {
    @media (min-width: 992px) {
      width: 55%;
    }
  }
  .text {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    > p {
      @media (min-width: 768px) {
        width: 47%;
      }
    }
    .p {
      @media (min-width: 768px) {
        width: 47%;
      }
    }
  }
`;

function OurStory() {
  return (
    <StoryWrapper>
      <div className="story-inner">
        <img src="" alt="" />
        <Paragraph>Trust Nhokovedzo, Founder</Paragraph>
      </div>
      <div className="story-item">
        <TextLined text="Our Story" />
        <Heading>How we started</Heading>
        <div className="text">
          <Paragraph>
            Our founder Trust Nhokovedzo went around ZImbabwe in 2017 conducting
            training under Google Digital Skill Training program. This
            expirirence gave him an opportunity to see the state of digital
            marketing practically in Zimbabwe. When then shared his expirience
            with other Google trainers from across the continent-it was clear
            that the challenges were the same. After conducting the Google
            Digital Skills training, most of the students would ask 'so where
            can we learn this further?'
          </Paragraph>
          <div className="p">
            <Paragraph>
              To this question, there wasn't a good answer except to refer to
              the internet resources most of which are not Africanized. This led
              to the formation of Afrodigital Skills Training as a business in
              2017.
            </Paragraph>
            <Paragraph>
              When we approached the local educational authorities to get our
              courses accredited, we hit many brick walls and setbacks. After
              trying for two years, we decided to get international
              accreditation and introducing our own qualifications called
              pan-degrees.
            </Paragraph>
          </div>
        </div>
      </div>
    </StoryWrapper>
  );
}

export default OurStory;
