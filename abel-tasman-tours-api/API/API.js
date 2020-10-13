const express = require('express')
const app = express()
const port = 3001

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
  

app.get('/api/', (req, res) => {
  res.send(cardDataOne)
  res.send(cardDataTwo)
  res.send(cardDataThree)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

