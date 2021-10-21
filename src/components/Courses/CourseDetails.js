import React from "react";
import styled from "styled-components";
import Heading from "../../styled/Heading";
import Paragraph from "../../styled/Paragraph";

const DetailsWrapper = styled.div`
  margin-top: 30px;
  @media (min-width: 992px) {
    width: 47.5%;
  }
  .detail {
    display: flex;
    margin-bottom: 30px;
    .img {
      width: 130px;
      height: 130px;
      min-width: 130px;
    }
    .text {
      margin-left: 10px;
      flex: 1;
      span {
        font-size: 18px;
      }
      h2 {
        font-family: ${(props) => props.theme.fam.bold};

        @media (min-width: 768px) {
          width: auto;
          font-size: 25px;
        }
      }
    }
  }
  p {
    font-size:15px;
    span {
      color: ${(props) => props.theme.color.green};
      font-size: 40px;
      margin-bottom: unset;
      line-height: 0;
    }
  }
  .modules {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      margint-top: 50px;
    }
    .module-inner {
      h4 {
        color: ${(props) => props.theme.color.green};
        font-size: 21px;
        @media (min-width: 768px) {
          margin-top: 0;
        }
      }
      h5 {
        color: ${(props) => props.theme.color.green};
        font-size: 15px;
        font-family:${props => props.theme.fam.bold};
      }
      ol {
        list-style: lower-alpha;
        padding: 0 5%;
      }
      li {
        font-size: 15px;
        line-height: 1.3;
      }
    }
  }
`;

function CourseDetails() {
  return (
    <DetailsWrapper>
      <div className="detail">
        <div className="img">
          <img src="" alt="" />
        </div>
        <div className="text">
          <Heading>Trust Nhokovedzo</Heading>
          <span>Instructor</span>
        </div>
      </div>
      <Paragraph>
        <span>S</span>harpen your digital selling skills with this practical
        program. You'll learn the art of prospecting for clients, holding
        successiful meetings and closing deals online.
      </Paragraph>
      <Paragraph>
        We will show you how to find, target, attract and engage propects and
        building deeper post-sales relationships using a range of new digital
        tactics and tools.
      </Paragraph>
      <div className="modules">
        <div className="module-inner">
          <h4>The Courses Modules</h4>
          <h5>1. Sales vs Marketing</h5>
          <ol>
            <li>The important differences</li>
            <li>Lead generation</li>
            <li>Digital Marketing Framework</li>
            <li>Joint sales and marketing roles</li>
          </ol>
          <h5>2. Fundamentals of Selling</h5>
          <ol>
            <li>Qualifying sales leads</li>
            <li>Sales funnels</li>
            <li>Lead Management</li>
            <li>Building relationships</li>
          </ol>
          <h5>3. Virtually Selling Fundamentals</h5>
          <ol>
            <li>Virtual selling imperatives</li>
            <li>Differences between in-person & virtual selling</li>
          </ol>
        </div>
        <div className="module-inner">
          <ol start="3">
            <li>Consultative Selling: Seller's Adaptations</li>
            <li>Mastering the Mediums of Virtual Selling</li>
            <li>Online Engagement</li>
            <li>Mastering Online Meetings</li>
          </ol>
          <h5>4. Virtual Selling Framework</h5>
          <ol>
            <li>Introducing the Virtual Sales Framework</li>
            <li>Building Rapport Online</li>
            <li>Uncovering Aspiration & Afflictions</li>
            <li>Making the Impact & ROI</li>
            <li>The Impact Model</li>
          </ol>
          <h5>5. The Pitch</h5>
          <ol>
            <li>The Convincing Story Framework</li>
            <li>Presenting Sales Pitches</li>
          </ol>
          <h5>6. Closing Sales</h5>
          <ol>
            <li>Collaborating with buyers</li>
            <li>How to scale up-selling</li>
            <li>Habits of Successful Salesperson</li>
          </ol>
        </div>
      </div>
    </DetailsWrapper>
  );
}

export default CourseDetails;
