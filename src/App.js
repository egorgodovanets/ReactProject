import logo from './logo.svg';
import './App.css';
import { Star } from './components/Star/star';

function App() {
  return (
    <div className="App">
      <Star id={2} name='Product' isFilled={false}/>
    </div>
  );
}

export default App;
