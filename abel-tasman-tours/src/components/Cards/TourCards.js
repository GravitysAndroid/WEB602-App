import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cards.css';
import CardItem from './CardItem';

//Creates data to enter into the datastore which contains three different pictures

let cardDataOne = [
  /* {src:'images/img-3.jpg' ,
  text:'Take the kayaks out into the open waters around Golden Bay' ,
  label:'Price: $401' ,
  path:'/tours' }, 
  
  {src:'images/img-3.jpg' ,
  text:'Take a tramp through the native bush' ,
  label:'Price: $200' ,
  path:'/tours'},

  {src:'images/img-3.jpg' ,
  text:'Get up close with the local wildlife' ,
  label:'Price: $500' ,
  path:'/tours'}  */
];

//Creates data to enter into the datastore which contains three different pictures
let cardDataTwo = [
  /* {src:'images/img-3.jpg' ,
  text:'Outdoor three day camp' ,
  label:'Price: $600' ,
  path:'/tours'},
    
  {src:'images/img-3.jpg' ,
  text:'Take a tour around two unique bays' ,
  label:'Price: $100' ,
  path:'/tours'},
    
  {src:'images/img-3.jpg' ,
  text:'Explore the wonderful land marks around the area' ,
  label:'Price: $200' ,
  path:'/tours'} */
];

//Creates data to enter into the datastore which contains three different pictures
let cardDataThree = [
  /* {src:'images/img-3.jpg' ,
  text:'Go inland through the bush and experience river crossing' ,
  label:'Price: $300' ,
  path:'/tours'},
      
  {src:'images/img-3.jpg' ,
  text:'Go for an adrenaline packed ride down a river in a raft ' ,
  label:'Price: $400' ,
  path:'/tours'},
      
  {src:'images/img-3.jpg' ,
  text:'Take a helicopter to a secluded beach' ,
  label:'Price: $700' ,
  path:'/tours'} */
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

//Creates a list in which the data from the cardData gets passed into to display
const listItemsThree = cardDataThree.map((data) => 
  <CardItem 
    src={data.src}
    text={data.text} 
    label={data.label}
    path={data.path}
/>);

function TourCards() {
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
      cardDataOne = result.data;
      cardDataTwo = result.data;
      cardDataThree = result.data;
      //alert(cardDataOne[0].label);
    }
    fetchData(); 
  });

  /* if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else { */
    return (
        //Creates the actual cards for display and wraps them to how I want them formatted
      <div className='cards'>
        <h1>Get lost in a world of wonder, with the amazing tours we offer</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
          <ul className='cards__items'>
          {cardDataOne.map((item) => 
            <CardItem 
              src={item.src}
              text={item.text} 
              label={item.label}
              path={item.path}
          />)}
         {/*  {listItemsOne} */}
            </ul>
            <ul className='cards__items'>
            {cardDataTwo.map((item) => 
            <CardItem 
              src={item.src}
              text={item.text} 
              label={item.label}
              path={item.path}
          />)}
              {/* {listItemsTwo} */}
            </ul>
            <ul className='cards__items'>
            {cardDataThree.map((item) => 
            <CardItem 
              src={item.src}
              text={item.text} 
              label={item.label}
              path={item.path}
          />)}
              {/* {listItemsThree} */}
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default TourCards;