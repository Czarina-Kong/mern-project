import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { Route, Link } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Route exact path = "/" component = {Home}></Route>
      <Route exact path = "/page1" component = {Page1}></Route>
      <Route exact path = "/page2" component = {Page2}></Route>
      <Route exact path = "/page3" component = {Page3}></Route>
    </div>

  );
}

export default App;
