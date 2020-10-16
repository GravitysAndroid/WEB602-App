import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    //Creates the card item and the different components that it uses
  return (
      //Sets the path of the card item to whatever is set in the cards.js 
      //Sets the pic wrap to be whatever is passed into the label on cards.js 
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel around these many locations'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
