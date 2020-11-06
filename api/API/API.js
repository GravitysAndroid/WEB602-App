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

/* const sendGrid = require('@sendGrid/mail')

app.post('/api/email', (req, res, next) => {

  console.log(req.body);

  //sendGrid.setApiKey('');
  const msg = {
      to: 'haydenwill95@gmail.com',
      from: req.body.email,
      subject: 'Website Contact',
      text: req.body.message
  }

  sendGrid.send(msg)
      .then(result => {
          res.status(200).json({
              success: true
          });
      })
      .catch(err => {
          console.log('error: ', err);
          res.status(401).json({
              success: false
          });
      });
}); */

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

