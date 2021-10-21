import React from 'react';
import MyCoursesDiv from '../components/Courses/MyCoursesDiv';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    dark: state.theme.dark
  });
  

function MyCourses({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
            <MyCoursesDiv />
        </div>
    )
}

export default connect(mapStateToProps)(MyCourses)
