import logo from './logo.svg';
import './App.css';
import { Star } from './components/Star/star';

const productArray = [
  {
    id: 2,
    name: 'Product 2',
    isFilled: true
  },
  {
    id: 3,
    name: 'Product 3',
    isFilled: true
  },
  {
    id: 3,
    name: 'Product 3',
    isFilled: false
  }
];


function App() {

let newArray = productArray.map(product => (<Star id={product.id} name={product.name} isFilled={product.isFilled}/>));

  return (
    <div className="App">
      {newArray}
    </div>
  );
}

export default App;
