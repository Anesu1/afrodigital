import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import TextLined from "../../styled/TextLined";
import Paragraph from "../../styled/Paragraph";

const WhyWrapper = styled.section`
  padding:5%;
  p{
    span{
      color:${props => props.theme.color.green};
      font-size:40px;
      margin-bottom:unset;
      line-height:0;
    }
  }
  .why-item{
    margin-bottom:30px;
  }
  .video{
    height: 400px;
    width:100%;
    border-radius:26px;
    overflow:hidden;
  }
`;

function Why() {
  return (
    <WhyWrapper>
        <div className="why-item">
            <TextLined text="Why Choose Us" />
      <Heading>Africa's best online courses</Heading>
      <div className="why-inner">
        <div className="why-top">
          <Paragraph>
            <span>A</span>frodigital Pan University is an internationally
            accredited online learning platform. Our vision is to work with
            expirienced proffessionals to create more skill-based online courses
            called Pan Degrees. Afrodigital aims to develop a wide range of pan
            degrees for enterprenuers, digital marketers and leaders. Currently
            our course are accredited by CPD(Continuous Proffessional
            Developement) UK
          </Paragraph>
          <Paragraph>
            The idea came to life after an observation in the gap between the
            industry and what is taught in tertiary institutions The big
            corporates have structures to train their future leaders to acquire
            the skills and knowledge they need to keep their business going.
            Unfortunately the narrative is different for SMEs. They employ raw
            talent that generally lacks the practical skills required to get
            things done in real world.
          </Paragraph>
          <Paragraph>
            Pan degrees are designed to give students the skills they need to be
            able to become effective in specific roles. Pan degreed are designed
            and taught by proffesionals who are both expirienced and
            knowledgable about what is required in the industry for higher
            perfomance. Our vision is to become the largest online courses
            platform in Africa. Afrodigital will be offering people standard
            sets of skill that not only make them employable but also ale to run
            their business effectively.
          </Paragraph>
        </div>
      </div>
        </div>
      <div className="why-item">
      <TextLined text="Our Courses" />
      <Heading>Pan Degree in Practical Digital Marketing</Heading>
      <div className="video" id="video-home">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=IeVgDNlgPok"
            controls
          />
        </div>
      </div>
    </WhyWrapper>
  );
}

export default Why;
