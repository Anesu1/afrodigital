import React from "react";
import styled from "styled-components";
import AboutCard from "../../styled/AboutCard";
import Heading from "../../styled/Heading";

const WhyUsWrapper = styled.section`
  padding: 5%;
  .why-bottom {
    div {
      background: ${(props) => props.theme.color.purple};
      &:first-child,
      &:nth-child(3),
      &:nth-child(5) {
        background: ${(props) => props.theme.color.green};
      }
    }
  }
`;

function WhyUs() {
  return (
    <WhyUsWrapper>
      <div className="why-top">
        <Heading>Why our online courses platform?</Heading>
        <img src="./img/logo.png" alt="" />
      </div>
      <div className="why-bottom">
        <AboutCard
          title="Learn from expirienced proffessionals."
          text="The instructors in all our online courses, in person events and corporate training sessions are very expirienced proffessionals in their field. Our mission is to get many people to learn the practical skills they need to excel in any field we are covering. This means you are guarenteed to have high-quality content and very rich content in all our courses."
        />
        <AboutCard
          title="Understanding of adult education."
          text="Our courses are designed in line with adult education principles. They are built around practical skills that the learners want to have. They only theory that is necessary for participants to excel in their trade. This makes it very different from purely academic qualifications which are knoledge-based. All our courses are designed for people who need skills and do not have time to learn unnecessary content."
        />
        <AboutCard
          title="We give back the community."
          text='Not all our online courses and events are paid for! We have free events for people who need to have dogotal skills but may not afford to get them. For example, we have a free class on "How to use Google like a pro" and "Business Skills for women Enterpreneurs". We also participate in other conferences and events to give free lectures and presantations.'
        />
        <AboutCard
          title="International Accreditation."
          text="Our online courses and events are accredited with CPD UK. The certificates from the CPD UK approved programs are recognized everyrwhere in the world. They also have continuous learning points."
        />
        <AboutCard
          title="Community and cross-pollination."
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eum deleniti, porro labore temporibus quas amet harum omnis dicta aliquam dolorem hic tempora totam laudantium nam, architecto mollitia illo ullam!"
        />
      </div>
    </WhyUsWrapper>
  );
}

export default WhyUs;
