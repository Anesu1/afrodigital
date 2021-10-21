import { FormControl, Input, InputLabel } from "@material-ui/core";
import React from "react";
import Button from '../../styled/Button'
import styled from "styled-components";

const DetailsWrapper = styled.form`
    padding:5%;
    @media(min-width:768px){
        padding-top:0;
        transform:translateY(-50px);
    }
    .detail-inner{
        @media(min-width:768px){
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
    }
    }
    .MuiFormControl-root{
        width:100%;
        margin-bottom:20px;
        @media(min-width:768px){
        width:47%;
    }
        input{
            height:35px;
            font-size:15px;
        }
        label{
            color:${props => props.theme.color.green};
            font-size:15px;
        }
        .MuiInput-underline{
           &:after{
            border-bottom-color:${props => props.theme.color.green}; 
        }
        &:before{
           border-bottom-color:#353535; 
        } 
        }
        
    }
    button{
        font-family:${props => props.theme.fam.regular};
        width:max-content;
        padding:0 20px;
        @media(min-width:768px){
            display: block;
    margin: auto 0 0 auto;
        }
    }
`;

function AccountDetails() {
  return (
    <DetailsWrapper>
      <div className="detail-inner">
        <FormControl>
          <InputLabel>First Name</InputLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input type="text" />
        </FormControl>
      </div>
      <div className="detail-inner">
        <FormControl>
          <InputLabel>Display Name</InputLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>Email Address</InputLabel>
          <Input type="text" />
        </FormControl>
      </div>
      <div className="detail-inner">
        <FormControl>
          <InputLabel>Current Password</InputLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <InputLabel>New Password</InputLabel>
          <Input type="text" />
        </FormControl>
      </div>

      <FormControl>
        <InputLabel>Confirm New Password</InputLabel>
        <Input type="text" />
      </FormControl>

      <Button type="submit">Save new changes</Button>
    </DetailsWrapper>
  );
}

export default AccountDetails;
