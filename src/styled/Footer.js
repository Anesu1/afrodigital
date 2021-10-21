/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    background:#000000;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    padding:5%;
    @media(min-width:768px){
            padding-bottom:1%;
        }
    h5{
        margin-bottom:20px;
        font-size:25px;
        color:${props => props.theme.color.purple};
        font-family:${props => props.theme.fam.bold};
    }
    .follow{
        color:#fff;
        font-family:${props => props.theme.fam.regular};
        @media(min-width:768px){
            font-size:15px;
        }
    }
    .social-icons{
        display:flex;
        justify-content: space-between;
        width:50%;
        margin:30px 0;
        @media(min-width:768px){
            max-width:250px;
            margin-bottom:30px;
        }
        svg{
            font-size:30px;
            color:${props => props.theme.color.green};
            @media(min-width:768px){
            font-size:35px;
        }
        }
    }
    .last{
        font-family: ${props => props.theme.fam.regular};
        color:#fff;
        line-height:25px;
        @media(min-width:768px){
            font-size:15px;
        }
        a{
            color:${props => props.theme.color.green};
            text-decoration:none;
        }
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <h5>Afrodigital Pan University</h5>
            <p className="follow">Follow us on Social</p>
            <div className="social-icons">
                <a href="#">
                  <FaFacebook />  
                </a>
                <a href="#">
                   <FaLinkedinIn /> 
                </a>
                <a href="#">
                   <FaTwitter />  
                </a>
                <a href="#">
                    <FaInstagram /> 
                </a>
             </div>
            <p className="last">Copyright @2021 | Disclaimer | Privacy Policy | Terms | <a href="https://www.linkedin.com/in/fadziso-leeroy-mashava-9a90081b8/">Designed by Fadziso Mashava</a></p>
        </FooterWrapper>
    )
}

export default Footer
