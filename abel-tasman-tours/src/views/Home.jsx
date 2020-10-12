import React from 'react';
import '../App.css';
import Hero from '../components/Hero/Hero'
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';

//Is the base gallery page, just calls functions to display
function Home (){
    return(
        <>
            <Hero />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;