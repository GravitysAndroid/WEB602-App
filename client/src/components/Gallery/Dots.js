/** @jsx jsx */
//import React from 'react'
import { css, jsx } from '@emotion/core'

//Does the inline styling for dots through emotion
//If dot is active it will be black, if not it will be white
const Dot = ({ active }) => (
  <span
    css={css`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};
    `}
  />
)

//Does the inline styling for dots through emotion
//This is general styling for the dots
//It is passed the slides and active index so it knows whether its position matches, in order to be active
const Dots = ({ slides, activeIndex }) => (
  <div
    css={css`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  >
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeIndex === i} />
    ))}
  </div>
)

export default Dots