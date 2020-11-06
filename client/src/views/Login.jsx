import React from 'react';
import '../App.css';
import Footer from '../components/Footer/Footer';
import { Login, Register } from '../components/Login/Index'
//import { Login } from '../components/Login/LoginNew/Login'

//Is the base gallery page, just calls functions to display
export default function LoginPage (){
    return(
        <>
        <h1 className='login'>login</h1>
            <Login/>
            <Register/>
            <Footer />       
        </>
    )
}