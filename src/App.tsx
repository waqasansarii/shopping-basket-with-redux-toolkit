import React from 'react';
import {MainList} from './components/items/index'  
import MainHeader from './components/header';
import './App.css';
import MainBasket from './components/basket';

function App() {
  return (
    <div >
      <MainHeader />
      <div className='app'>
      <MainList />
      <MainBasket />
      </div>
    </div>
  );
}

export default App;
