/** @jsx jsx */
//import React from 'react'
import { css, jsx } from '@emotion/core'

//Does the inline styling for the slide, using emotion
const Slide = ({ content }) => (
  <div
    css={css`
      height: 100;
      width: 100%;
      background-image: url('${content}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
  />
)
//Instead of using the div, you can use an image tag; could be used if datastore is required
//<img src={content} />

export default Slide