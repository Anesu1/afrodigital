import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Button from "../../styled/Button";
import Card from "../../styled/Card";
import Heading from "../../styled/Heading";
import TextLined from "../../styled/TextLined";

const CoursesWrapper = styled.section`
  padding: 5%;
  @media (min-width: 992px) {
    padding: 2%;
  }
  .video {
    height: 250px;
    overflow: hidden;
    width: 100%;
    border-radius: 26px;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 992px) {
      max-width: 500px;
      height: 310px;
    }
  }
  .course-top {
    margin-bottom: 30px;
    @media (min-width: 768px) {
      display: flex;
    }
    @media (min-width: 992px) {
      width: 80%;
      margin: 0 auto 60px;
    }
    .text {
      @media (min-width: 768px) {
        padding-left: 20px;
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          margin-top: 0;
        }
      }
      @media (min-width: 992px) {
        padding: 30px 0 30px 50px;
      }
    }
  }
  .course-bottom {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

function Courses() {
  return (
    <CoursesWrapper>
      <div className="course-top">
        <div className="video" id="video-home">
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=IeVgDNlgPok"
            controls
          />
        </div>
        <div className="text">
          <TextLined text="Our Courses" />
          <Heading>What is a Pan Degree? Watch the video to out.</Heading>
          <Button>Courses</Button>
        </div>
      </div>
      <div className="course-bottom">
        <Card
          title="Certified Digital Selling Specialist Course"
          link="#"
          text="Sharpen your digital selling skills with this practical program. you'll learn the art of prospecting for clients, holding successiful meetings and closing deals online. We will"
          image=""
        />
        <Card
          title="Pan Degree in Digital marketing Course"
          link="#"
          image=""
          text="The Pan Degree in Practical Digital Marketing online course aims to provide marketers and business leaders with useful and relavant digital skills."
        />
      </div>
    </CoursesWrapper>
  );
}

export default Courses;
