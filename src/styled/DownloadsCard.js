import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: linear-gradient(
      to bottom,
      rgba(19, 19, 19, 0.5),
      rgba(41, 41, 41, 0.5)
    ),
    url(${(props) => props.img});
    background-size:cover;
    height:250px;
    width:100%;
    border-radius:26px;
    color:#ffffff;
    display:flex;
    align-items: flex-end;
    margin-bottom:30px;
    @media(min-width:768px){
        width:47%;
    }
    p{
        margin:0 0 30px 5%;
    }
`;

function DownloadsCard({title, image}) {
    return (
        <CardWrapper img={image}>
            <p>{title}</p>
        </CardWrapper>
    )
}

export default DownloadsCard
