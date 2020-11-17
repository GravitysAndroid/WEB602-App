var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');
var loginRouter = require('./routes/login');
var commentRouter = require('./routes/comment');
const bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(bodyParser.raw());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
app.use("/login", loginRouter);
app.use("/comment",commentRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

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

app.get('/api/', (req, res) => {
  res.send(cardDataOne)
  res.send(cardDataTwo)
  res.send(cardDataThree)

  res.send(cardDataHomeOne)
  res.send(cardDataHomeTwo)
})

module.exports = app;
