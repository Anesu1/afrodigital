import React from 'react'
import WhyUs from '../components/About/WhyUs'
import Banner from '../components/Contacts/Banner'
import Why from '../components/About/Why'
import {connect} from 'react-redux'
import OurStory from '../components/About/OurStory'

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function About({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
           <Banner text="Who is Afrodigital" description="Learn more about us"/> 
            <Why />
            <OurStory />
            <WhyUs />
            
        </div>
    )
}

export default connect(mapStateToProps)(About)
