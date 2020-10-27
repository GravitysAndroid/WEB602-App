import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import Footer from '../components/Footer/Footer';
import Slider from '../components/Gallery/Slider';

//The store for the images
let images = [
    'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2c%2FNZ310315_Abel_Tasman_Te_Pukatea_Bay_05.jpg?expires=692799725737&s=24326a8c195a83f1cf4eed524231cc44',
    'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fwww.doc.govt.nz%2Fcontentassets%2F7bef9c206877431683e20b4fe33ad481%2Fmaitai-bay-hero.jpg?expires=70719730991&s=7a92215532e0db6b5f822712913ea5c6',
    'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd2%2FSunset_Over_Golden_Bay_%2528128526109%2529.jpeg?expires=70719731107&s=4866839a6ff38c099fca05f45dbd2a56',
    'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FHawksbay_beach_karachi_pakistan.jpg?expires=70719731244&s=9bba2db17cbf2a6be1725da72a5c72b7'
]

 const listItemsOne = images.map((item) =>  
  <Slider
    slides={item.images}
/>); 

//Is the base gallery page, just calls functions to display

export default function Gallery (){
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
      images = result.data;
      //alert(cardDataOne[0].label);
    }
    fetchData(); 
  });
  return(
    <>
      <h1 className='gallery'>Gallery</h1>
      <Slider  slides={images} />
      <Footer />
    </>
  )
}