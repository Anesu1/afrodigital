import React from 'react'
import Banner from '../components/Contacts/Banner'
import LatestArticles from '../components/Courses/LatestArticles'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Courses({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
           <Banner text="Put your headline here"/> 
           <LatestArticles />
        </div>
    )
}

export default connect(mapStateToProps)(Courses)
