import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

/*Sets up styles for easy deploy*/
const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
/*Sets up sizes for easy deploy*/
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
    //If the button has a style, use buttonStyle, if not then use the first style in the STYLE array
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
//If the button has a size, use buttonSize, if not then use the first size in the SIZE array 
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
      //Here it will almost always return primary and medium unless it is overriden
    <Link to='/login' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
