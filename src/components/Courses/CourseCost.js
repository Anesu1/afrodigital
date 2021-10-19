import Button from '../../styled/Button';
import React from 'react';
import styled from 'styled-components';
import TextLined from '../../styled/TextLined';
import CourseDetails from './CourseDetails';
import Heading from '../../styled/Heading';

const CostWrapper = styled.section`
    padding:5%;
    .img{
        height:400px;
        width:100%;
        border-radius: 26px;
        background: linear-gradient(
        to bottom,
        rgba(19, 19, 19, 0.5),
        rgba(41, 41, 41, 0.5)
      ),
      url(${(props) => props.img});
      background-size:cover;
    }
`;

function CourseCost() {
    return (
        <CostWrapper>
            <div className="cost-inner">
                <TextLined text="Courses" />
                <Heading>
                    Certified Digital Selling Specialist Course
                </Heading>
                <div className="img">
                    
                </div>
                <p><span>START: </span>6 October, 2021</p>
                <p><span>DURATION </span>10 Weeks</p>
                <p><span>ID </span>CDP101</p>
                <p><span>PRICE </span>$100.00</p>
                <Button></Button>
            </div>
            <CourseDetails />
        </CostWrapper>
    )
}

export default CourseCost
