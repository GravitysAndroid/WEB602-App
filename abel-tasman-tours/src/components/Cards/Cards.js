import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

//Creates data to enter into the datastore which contains two different pictures
const cardDataOne = [
{src:'images/img-9.jpg', 
text:'Take out kayaks into the sea', 
label:'Adventure', 
path:'/tours' }, 

{src:'images/img-1.jpg', 
text:'Explore the beautiful bays' ,
label:'Relax' ,
path:'/tours'}];

//Creates data to enter into the datastore which contains three different pictures
const cardDataTwo = [
{src:'images/img-10.jpg' ,
text:'Camp underneath the stars' ,
label:'Adventure' ,
path:'/tours'},

{src:'images/img-4.jfif', 
text:'Relax and sunbathe on the hot sand', 
label:'Relax', 
path:'/tours'},

{src:'images/img-8.jpg' ,
text:'Look at iconic landmarks' ,
label:'Explore' ,
path:'/tours'}
];

//Creates a list in which the data from the cardData gets passed into to display
const listItemsOne = cardDataOne.map((data) =>  
  <CardItem 
    src={data.src}
    text={data.text} 
    label={data.label}
    path={data.path}
/>);

//Creates a list in which the data from the cardData gets passed into to display
const listItemsTwo = cardDataTwo.map((data) => 
  <CardItem 
    src={data.src}
    text={data.text} 
    label={data.label}
    path={data.path}
/>);

function Cards() {
  return (
      //Creates the actual cards for display
    <div className='cards'>
      <h1>Take a Look at The Destinations We Offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {listItemsOne}
          </ul>
          <ul className='cards__items'>
            {listItemsTwo}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;