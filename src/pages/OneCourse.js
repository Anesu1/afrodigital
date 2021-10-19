import React from 'react'
import Banner from '../components/Contacts/Banner'
import CourseCost from '../components/Courses/CourseCost'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function OneCourse({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
        <Banner text="Put your headline here"/> 
        <CourseCost />
     </div>
    )
}

export default connect(mapStateToProps)(OneCourse)