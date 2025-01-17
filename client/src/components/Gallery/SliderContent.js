//import React from 'react'
import styled from '@emotion/styled'

//Using inline styling using emotion; allows for styling in js
//Translate 'pushes' the images not on screen off to the side and displays one image
const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`

export default SliderContent