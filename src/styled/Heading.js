import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.h2`
    font-size:23px;
    font-family:${props => props.theme.fam.regular};
    line-height:30px;
    @media(min-width:768px){
        font-size:32px;
        line-height: 1.3;
    }
    @media (min-width: 992px) {
    width: 390px;
    font-size: 40px;
    
  }
`;

function Heading({children}) {
    return (
        <HeadingWrapper>
            {children}
        </HeadingWrapper>
    )
}

export default Heading
