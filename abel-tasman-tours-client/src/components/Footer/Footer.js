import React from 'react';
import { Button } from '../Button/Button';
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer(){
    return(
        //Creating a footer that will have all of the below including a text input
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join our online news letter for the latest deals!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime.
                </p>
                <div className='input-area'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your email'/>
                        <Button buttonStyle='btn--outline'>Subscribe now</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TTours <i className='fas fa-kiwi-bird'></i>
                        </Link>
                    </div>
                    <small className='website-rights'>TTours © 2020</small>
                    <div className='social-icons'>
                        <Link className='social-icons-link facebook' to='/' target='_blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icons-link instagram' to='/' target='_blank' aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                             <i class='fab fa-youtube' />
                        </Link>
                        <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        //The code above just impliments a bunch of dead links, that lead back to the home page, but displays like a real page
        //The links with social icons just display small icons of social media, pulls icon from fontawesome
    )
}

export default Footer