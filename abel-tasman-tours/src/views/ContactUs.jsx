import React from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import ContactForm from '../components/Contact/ContactForm'

//Is the base contact us page, just calls functions to display
export default function ContactUs (){
    return(
        <>
        <h1 className='contact-us'>Contact Us</h1>
            <ContactForm />
            <Footer />
        </>
    )
}