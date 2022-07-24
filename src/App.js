import React from 'react';
import './App.css';
import { Star } from './components/Star/star';
import { Header } from './components/Header/Header';

const productArray = [
  {
    name: 'Product 2',
    isFilled: true
  },
  {
    name: 'Product 3',
    isFilled: true
  },
  {
    name: 'Product 3',
    isFilled: false
  },{
    name: 'Product 3',
    isFilled: false
  },{
    name: 'Product 3',
    isFilled: false
  },{
    name: 'Product 3',
    isFilled: false
  }
];


function App() {

let newArray = productArray.map((product, index) => (<Star key={index+1} id={index+1} name={product.name} isFilled={product.isFilled}/>));

  return (
    <div className="App">
      <Header length={newArray.length}/>
      <div className='star-container'>
        {newArray}
      </div>
    </div>
  );
}

export default App;
