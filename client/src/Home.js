import React, { Component } from 'react';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap'

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function Home() {
  return (
    <Provider store={store}>
      <div className="Home">
        <Container>
          <ItemModal/>
          <ShoppingList/>  
        </Container>
      </div>
    </Provider>
  );
}

export default Home;
