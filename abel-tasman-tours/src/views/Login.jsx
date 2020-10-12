import React from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import { Login } from '../components/Login/Index'

//Is the base gallery page, just calls functions to display
export default function LoginPage (){
    return(
        <>
        <h1 className='login'>login</h1>
            <Login />
            <Footer />
        </>
    )
}