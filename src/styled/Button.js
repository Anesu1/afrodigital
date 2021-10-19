import React from 'react';
import styled from 'styled-components'

const ButtonWrapper = styled.button`
    border:none;
    background:${props => props.theme.color.purple};
    color:#fff;
    height:40px;
    border-radius:49px;
    font-size:13px;
    width:120px;
    font-family:${props => props.theme.fam.regular};
`;

function Button({children}) {
    return (
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    )
}

export default Button
