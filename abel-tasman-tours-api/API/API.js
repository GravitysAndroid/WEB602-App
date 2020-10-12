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
  

app.get('/api/', (req, res) => {
  res.send(cardDataOne)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

