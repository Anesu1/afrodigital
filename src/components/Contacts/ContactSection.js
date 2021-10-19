import React from 'react';
import styled from 'styled-components';
import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import Heading from '../../styled/Heading';
import Paragraph from '../../styled/Paragraph';
import Map from '../../styled/Map';
import Button from '../../styled/Button';

const ContactWrapper = styled.section`

`;

function ContactSection() {
    return (
        <ContactWrapper>
            <div className="contact-inner">
                <Heading>Contact Form</Heading>
                <form action="">
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input type="text"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email Address</InputLabel>
                    <Input type="email"/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input type="number"/>
                </FormControl>
                <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                />
                <Button type="submit">Submit</Button>
                </form>
            </div>
            <div className="contact-inner">
                <Heading>
                    Contact Details
                </Heading>
                <Paragraph>12 Trent Road, Avonlea. Harare, Zimbabwe</Paragraph>
                <Paragraph>admin@afrodigital.org</Paragraph>
                <Paragraph>+263 78 072 8108(Calls & whatsapp)</Paragraph>
                <div className="map">
                    <Map />
                </div>
            </div>
        </ContactWrapper>
    )
}

export default ContactSection
