import React from 'react';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const CardWrapper = styled.div`
    border-radius:26px;
    background:${props => props.backgroundImage};
    color:#ffff;
    h3{
        font-family:${props => props.theme.fam.regular};
        font-size:20px;
    }
    a{
        text-decoration:none;
        color:#ffffff;
    }
`;

function BlogCard() {
    return (
        <CardWrapper>
            <h3>{title}</h3>
            <Paragraph>{text}</Paragraph>
            <Link to={`/${link}`}>Read more <BsArrowRight /></Link>
        </CardWrapper>
    )
}

export default BlogCard
