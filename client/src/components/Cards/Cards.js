import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards.css';
import CardItem from './CardItem';

//Creates data to enter into the datastore which contains two different pictures
let cardDataHomeOne = [
/* {src:'images/img-9.jpg', 
text:'Take out kayaks into the sea', 
label:'Adventure', 
path:'/tours' }, 

{src:'images/img-1.jpg', 
text:'Explore the beautiful bays' ,
label:'Relax' ,
path:'/tours'} */];

//Creates data to enter into the datastore which contains three different pictures
let cardDataHomeTwo = [
/* {src:'images/img-10.jpg' ,
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
path:'/tours'} */
];

//Creates a list in which the data from the cardData gets passed into to display
/* const listItemsOne = cardDataHomeOne.map((data) =>  
  <CardItem 
    src={data.src}
    text={data.text} 
    label={data.label}
    path={data.path}
/>);

//Creates a list in which the data from the cardData gets passed into to display
const listItemsTwo = cardDataHomeTwo.map((data) => 
  <CardItem 
    src={data.src}
    text={data.text} 
    label={data.label}
    path={data.path}
/>);  */ 

function Cards() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState({ hits: [] });

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  useEffect( () => {
    const fetchData = async () =>{
      const result = await axios(
        '/api',
      );
      setData(result.data);
      cardDataHomeOne = result.data;
      cardDataHomeTwo = result.data;
      //alert(cardDataOne[0].label);
    }
    fetchData(); 
  });
  return (
      //Creates the actual cards for display
    <div className='cards'>
      <h1>Take a Look at The Destinations We Offer</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {cardDataHomeOne.map((item) => 
            <CardItem 
              src={item.src}
              text={item.text} 
              label={item.label}
              path={item.path}
          />)}
            {/* {listItemsOne} */}
          </ul>
          <ul className='cards__items'>
          {cardDataHomeTwo.map((item) => 
            <CardItem 
              src={item.src}
              text={item.text} 
              label={item.label}
              path={item.path}
          />)}
            {/* {listItemsTwo} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;