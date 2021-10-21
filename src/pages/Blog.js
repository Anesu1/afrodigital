import React from 'react'
import {connect} from 'react-redux';
import Banner from '../components/Contacts/Banner'
import BlogSection from '../components/Blog/BlogSection'

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Blog({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
           <Banner text="Headline for most recent article here"/> 
           <BlogSection />
        </div>
    )
}

export default connect(mapStateToProps)(Blog)
