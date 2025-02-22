import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";
import Signup from "./components/signup"
import Signin from "./components/signin"

function App() {
  return (
   <React.Fragment>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />   
          <Route path="/Signup" component={Signup} /> 
          <Route path="/Signin" component={Signin} /> 
          <Route path="/cart" component={Cart} /> 
          <Route component={Default} /> 
          

      </Switch>
      <Modal />
      
   </React.Fragment>  
  );
}

export default App;
