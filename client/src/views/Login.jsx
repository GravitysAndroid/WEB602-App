import React from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
//import { Login, Register } from '../components/Login/Index'
import LoginUsingContext from '../components/Login/LoginNew/LoginUsingContext';

//Is the base gallery page, just calls functions to display
export default function LoginPage (){
    return(
        <>
        <h1 className='login'>login</h1>
           <LoginUsingContext/>
            {/* <Register/> */}
            <Footer />       
        </>
    )
}