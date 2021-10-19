import React from 'react';
import styled from 'styled-components';

const ParagraphWrapper = styled.p`
    font-size:15px;
    font-family:${props => props.theme.fam.regular};
    line-height:1.5;
`;

function Paragraph({children}) {
    return (
        <ParagraphWrapper>
            {children}
        </ParagraphWrapper>
    )
}

export default Paragraph
