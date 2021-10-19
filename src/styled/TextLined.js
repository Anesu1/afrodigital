import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.p`
    color:${props => props.theme.color.purple};
    font-family:${props => props.theme.fam.regular};
    position:relative;
    font-size:15px;
    margin-left:120px;
    margin-bottom:30px;
    span{
        width:100px;
        border-radius:10px;
        height:3px;
        background:${props => props.theme.color.purple};
        position: absolute;
        top:50%;
        transform:translate(-120px,-50%);
    }
`;

function TextLined({text}) {
    return (
        <TextWrapper>
                    <span></span>
                    {text}
        </TextWrapper>
    )
}

export default TextLined
