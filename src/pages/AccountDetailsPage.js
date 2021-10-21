/* eslint-disable no-unused-vars */
import React from "react";
import AccountDetails from "../components/Profile/AccountDetails";
import ProfileNavigation from "../styled/ProfileNavigation";
import styled from 'styled-components';
import {connect} from 'react-redux';

const FormDetailsWrapper = styled.div`
 @media(min-width:768px){
     flex:1;
 }
`


const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function AccountDetailsPage({dark}) {
  return (
    <FormDetailsWrapper className={dark ? 'dark' : 'light'}>
      <AccountDetails />
      
    </FormDetailsWrapper>
  );
}

export default connect(mapStateToProps)(AccountDetailsPage);
