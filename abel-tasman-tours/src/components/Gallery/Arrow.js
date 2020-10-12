/** @jsx jsx */
//import React from 'react'
import { css, jsx } from '@emotion/core'
import leftArrow from '../../arrows/left-arrow.svg'
import rightArrow from '../../arrows/right-arrow.svg'

//Direction prop recieves either left or right, handle click handles what arrow is clicked
const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
  >
    {direction === 'right' ? <img src={rightArrow} alt='' /> : <img src={leftArrow} alt=''/>}
  </div>
)
//If the direction is right then right arrow shows, if left the left arrow shows. Both can show
//Alot of the above is just CSS styling for the arrows

export default Arrow