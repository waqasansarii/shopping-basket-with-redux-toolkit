import React from 'react';
import {MainList} from './components/items/index'  
import Main_Header from './components/header';
import './App.css';
import MainBasket from './components/basket';

function App() {
  return (
    <div >
      <Main_Header />
      <div className='app'>
      <MainList />
      <MainBasket />
      </div>
    </div>
  );
}

export default App;
