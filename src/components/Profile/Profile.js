import React from 'react';
import styled from 'styled-components';
import ProfileNavigation from '../../styled/ProfileNavigation';
import {connect} from 'react-redux'

const ProfileWrapper = styled.section`
    display: flex;
    flex-wrap:wrap;
`;

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Profile({dark}) {
    return (
        <ProfileWrapper className={dark ? 'dark' : 'light'}>
          <ProfileNavigation /> 
          
        </ProfileWrapper>
    )
}

export default connect(mapStateToProps)(Profile)
