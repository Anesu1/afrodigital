import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.h2`
    font-size:23px;
    font-family:${props => props.theme.fam.bold};
    line-height:30px;
    @media(min-width:768px){
        font-size:32px;
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
