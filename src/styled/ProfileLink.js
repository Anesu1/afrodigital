import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border:none;
    background: transparent;
    color:#ffffff;
    font-size:18px;
    transition:0.3s;
@media(min-width:768px){
    height:50px;
    font-size:15px;
    max-width: 200px;
    transition:0.7s;
    border-radius:26px;
    width:150px;
    margin-bottom:30px;
    cursor: pointer;
    color:${props => props.theme.color.purple};
    border:1px solid ${props => props.theme.color.green};
}
    
`;

function ProfileLink({text}) {
    return (
        <Button>
            {text}
        </Button>
    )
}

export default ProfileLink
