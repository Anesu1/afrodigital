import React from 'react'
import Banner from '../components/Contacts/Banner'
import ContactSection from '../components/Contacts/ContactSection'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    dark: state.theme.dark
  });

function Contact({dark}) {
    return (
        <div className={dark ? 'dark' : 'light'}>
                       <Banner text="Headline for most recent article here" /> 
                       <ContactSection />

        </div>
    )
}

export default connect(mapStateToProps)(Contact)
