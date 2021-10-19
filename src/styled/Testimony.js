import React from 'react';
import styled from 'styled-components';

const TestWrapper = styled.div`
    background:${props => props.theme.color.green};
    color:#ffffff;
    border-radius:26px;
    max-width:600px;
    margin:0 auto;
    width:90%;
    margin-top:50px;
    padding:10px;
    position:relative;
    padding-top:50px;
    text-align:center;
    .img{
        position:absolute;
        left:50%;
        top:-20%;
        transform:translateX(-50%);
        height:100px;
        width:100px;
        border-radius:50%;
        background:grey;
        
    }
    h4{
        font-family: ${props => props.theme.fam.bold};
        font-size:25px;
        margin-bottom:10px;
    }
    p{
        font-family: ${props => props.theme.fam.regular};
        font-size:13px;
        line-height:1.3;
    }
    span{
        font-size:16px;
        font-family: ${props => props.theme.fam.regular};
    }
`;

function Testimony({img,title,role,text}) {
    return (
        <TestWrapper>
            <div className="img">
                        <img src={img} alt="" />
                    </div>
                    <div className="text">
                        <div className="title">
                           <h4>{title}</h4> 
                           <span>{role}</span>
                        </div>
                        <p>{text}</p>
                    </div>
        </TestWrapper>
    )
}

export default Testimony
