/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { css, jsx } from '@emotion/core'
import SliderContent from './SliderContent'
import Slide from './Slide'
import Arrow from './Arrow'
import Dots from './Dots'

/**
 * @function Slider
 */

 //Gets the width of the browser window, in order to resize
const Slider = (props) => {
  const getWidth = () => window.innerWidth

  //Gets the translate value, to move the images
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })

  const { translate, transition, activeIndex } = state

  //Takes the image to the next slide by using state
  //Counts up from the current index in the array
  //Once it counts past the last image it will set the array back to the starting position
  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  //Takes the image to the previous slide by using state
  //Counts down from the current index in the array
  //Once it counts past the first image it will set the array back to the starting position
  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  //Three props to pass into slider content styling
  //The props.slides.map calls the images to use on the slides, passes them into content
  //The dots and arrows are outside of the slider content so they don't dissapear when the slide changes
  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth()* props.slides.length}
      >
        {
          props.slides.map((slide, i) => 
          <Slide 
            key={slide + i} 
            content={slide}
            />
          )
        }
      </SliderContent>

      <Arrow direction='left' handleClick={prevSlide}/>
      <Arrow direction='right'handleClick={nextSlide}/>

      <Dots slides={props.slides} activeIndex={activeIndex}/>
    </div>
  )
}

//Using inline styling using emotion; allows for styling in js
const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider