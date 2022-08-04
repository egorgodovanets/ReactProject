import React, { useState } from 'react';
import './App.css';
import StarArray from './components/StarArray/StarArray'
 
function App() {
 
    const [numIn, setNumIn] = useState('');
    const [array, setArray] = useState([
        {id: 1, name: 'Apple', isFilled: true},
        {id: 2, name: 'Orange', isFilled: true},
        {id: 3, name: 'Peppers', isFilled: false},
        {id: 4, name: 'Water', isFilled: true},
        {id: 5, name: 'Milk', isFilled: false},
        {id: 6, name: 'Meat', isFilled: false}
 ]);
    const markProduct = () => {
        array[numIn-1].isFilled = !array[numIn-1].isFilled;
        console.log(array[numIn-1]);
        setArray(array);
        setNumIn('');
    }
 
    return (
        <div className="App">
            <div className='Maria-Task'>
              <div className='Header'>
                  <h2>Products: {array.length}</h2>
                  <label>Enter numbers of product you want to starred:</label>
                  <input type='text' placeholder='Write number, please' value={numIn} onChange={e => setNumIn(e.target.value)}/>
                  <button className='button-go' onClick={markProduct}>Go</button>
              </div>
              <StarArray array={array} />
            </div>
        </div>
    );
}
 
export default App;
