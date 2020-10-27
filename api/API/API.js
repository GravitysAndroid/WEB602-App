const express = require('express')
const app = express()
const port = 3001

const cardDataHomeOne = [
  {src:'images/img-9.jpg', 
  text:'Take out kayaks into the sea', 
  label:'Adventure', 
  path:'/tours' }, 
  
  {src:'images/img-1.jpg', 
  text:'Explore the beautiful bays' ,
  label:'Relax' ,
  path:'/tours'}
];

const cardDataHomeTwo = [
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

const cardDataOne = [
    {src:'images/img-3.jpg' ,
    text:'Take the kayaks out into the open waters around Golden Bay' ,
    label:'Price: $400' ,
    path:'/tours' }, 
    
    {src:'images/img-3.jpg' ,
    text:'Take a tramp through the native bush' ,
    label:'Price: $200' ,
    path:'/tours'},
  
    {src:'images/img-3.jpg' ,
    text:'Get up close with the local wildlife' ,
    label:'Price: $500' ,
    path:'/tours'}
];

const cardDataTwo = [
  {src:'images/img-3.jpg' ,
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
  path:'/tours'}
];

const cardDataThree = [
  {src:'images/img-3.jpg' ,
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
  path:'/tours'}
];

const images = [
  'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2c%2FNZ310315_Abel_Tasman_Te_Pukatea_Bay_05.jpg?expires=692799725737&s=24326a8c195a83f1cf4eed524231cc44',
  'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fwww.doc.govt.nz%2Fcontentassets%2F7bef9c206877431683e20b4fe33ad481%2Fmaitai-bay-hero.jpg?expires=70719730991&s=7a92215532e0db6b5f822712913ea5c6',
  'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fd2%2FSunset_Over_Golden_Bay_%2528128526109%2529.jpeg?expires=70719731107&s=4866839a6ff38c099fca05f45dbd2a56',
  'https://haydenreactwebpage.imgix.net/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffc%2FHawksbay_beach_karachi_pakistan.jpg?expires=70719731244&s=9bba2db17cbf2a6be1725da72a5c72b7'
]

app.get('/api/', (req, res) => {
  res.send(cardDataOne)
  res.send(cardDataTwo)
  res.send(cardDataThree)

  res.send(cardDataHomeOne)
  res.send(cardDataHomeTwo)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

