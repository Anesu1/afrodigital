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
    @media(min-width:768px){
        max-width:500px;
        height:250px;
        padding-top:70px;
    }
    @media(min-width:992px){
        max-width:600px;
        height:200px;
        p{
            padding:0 5%;
        }
        
    }
    @media(min-width:1200px){
        
        padding:50px 5%;
    }
    .img{
        position:absolute;
        left:50%;
        top:-20%;
        transform:translateX(-50%);
        height:100px;
        width:100px;
        border-radius:50%;
        background:grey;
        @media(min-width:768px){
        top:-10%;
    }
    }
    .title{
        @media(min-width:768px){
            display: flex;
    align-items: flex-end;
    justify-content: center;
    margin:30px auto 30px;
        }
    }
    h4{
        font-family: ${props => props.theme.fam.bold};
        font-size:25px;
        margin-bottom:10px;
        @media(min-width:768px){
            margin-bottom:0;
            margin-right:30px;
        }
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
