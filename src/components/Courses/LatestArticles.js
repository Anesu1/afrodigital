import React from 'react';
import styled from 'styled-components';
import Heading from '../../styled/Heading';
import LatestItem from '../../styled/LatestItem';
import TextLined from '../../styled/TextLined';

const LatestWrapper = styled.section`
    padding:5%;     
   
    h2{
        width:100%;
        line-height:1.5;
        br{
            display:none;
            @media(min-width:768px){
                display: block;
            }
        }
    }
`;

function LatestArticles() {
    return (
        <LatestWrapper>
            <TextLined text="All courses"/>
            <Heading>
                Take a look at our latest <br /> articles
                </Heading>
            <LatestItem backgroundImage="" title="Cerified Digital Selling Specialist Course" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempore, perspiciatis at dolores iure qui velit quisquam quidem rem, aut voluptates molestiae veritatis doloremque, voluptate sed consequatur eum vero! Obcaecati." link="to"/>
            <LatestItem backgroundImage="" title="Pan Degree in Practical Digital Marketing" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor tempore, perspiciatis at dolores iure qui velit quisquam quidem rem, aut voluptates molestiae veritatis doloremque, voluptate sed consequatur eum vero! Obcaecati." link="to"/>
        </LatestWrapper>
    )
}

export default LatestArticles
