import React from 'react';
import { Button } from '../Button/Button';
import './Hero.css';
import '../../App.css';

function Hero(){
    return(
        //Creates a video that autoplays at the top of the screen
        //The buttons and text just display over top of the video, each button has it's own css, can use the same as the other though
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted/>
            <h1>Tour Abel Tasman Now</h1>
            <p>Stunning Scenery Awaits</p>
            <div className='hero-btns'>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    Adventure Today
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                    >Watch Video<i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    ) 
}

export default Hero;