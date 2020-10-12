import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    //To start the initial state will be set to false
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //Sets the state to the opposite value of what is currently clicked  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //If the window is a certain size it resizes the navbar to fit the screen
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //Only renders the login button one time, so it doesn't show again
  useEffect(() => {
    showButton();
  }, []);

  //Just checks to see if the window has resized and adjusts accordingly
  window.addEventListener('resize', showButton);

  return (
      //Creates all of the different navbar components as well as the title and logo
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TTours
            <i class='fas fa-kiwi-bird' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tours'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tours
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
        </div>
      </nav>
    </>
    //Sets the style of the login button to outline, manually
  );
}

export default Navbar;
