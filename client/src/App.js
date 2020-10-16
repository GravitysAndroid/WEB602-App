import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home.jsx';
import Tours from './views/Tours';
import Gallery from './views/Gallery';
import ContactUs from './views/ContactUs';
import Login from './views/Login';

//The app displays the nav bar and sets the routes for the links/routes
function App() {
  return (
    //Sets the routes for each page to be displayed on
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tours' exact component={Tours} />
        <Route path='/gallery' exact component={Gallery} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
    </>
  );
}

export default App; 