import React from 'react';
//import Flux from "@4geeksacademy/react-flux-dash";
import '../App.css';
import TourCards from '../components/Cards/TourCards';
import Footer from '../components/Footer/Footer';

//Is the base gallery page, just calls functions to display
export default function Tours (){
    return(
        <>
        <h1 className='tours'>Tours</h1>
            <TourCards />
            <Footer />
        </>
    )
}