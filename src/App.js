import React, {useState} from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

const App = () => {

    const [products, setProducts] = useState([
        {id: 1, name: 'Water', description: 'There is the same amount of water on Earth as there was when the Earth was formed.', isLike: false, isInBacket: false},
        {id: 2, name: 'Orange', description: 'Oranges are the largest citrus fruit in the world.', isLike: false, isInBacket: false},
        {id: 3, name: 'Knife', description: 'The term pen knife is typically used in Great Britain to describe a knife that is a small folding knife.', isLike: false, isInBacket: false},
        {id: 4, name: 'Tea', description: 'It takes around 2,000 tiny leaves to make just one pound of finished tea.', isLike: false, isInBacket: false},
        {id: 5, name: 'Meat', description: 'Meat is a complete, high-quality protein containing all of the essential amino acids your body needs for optimal health.', isLike: false, isInBacket: false},
        {id: 6, name: 'Book', description: 'Although it’s impossible for us to come up with an exact number, according to Google, they believe it is around 130 million books!', isLike: false, isInBacket: false},
        {id: 7, name: 'Computer', description: 'However the first modern computers were electronic calculating machines and were developed during the Second World War.', isLike: false, isInBacket: false},
        {id: 8, name: 'Picture', description: 'The Largest Camera Collection Consists of 4,425 Cameras. The First Photo of a Person Was Accidental.', isLike: false, isInBacket: false}
    ]);

    const [like, setLikes] = useState('');
    const addLike = (like, idElem) => {
        if (products[idElem-1].id === idElem && products[idElem-1].isLike ===  false) {
            products[idElem-1].isLike = !products[idElem-1].isLike;
            setLikes(++like);
        } else if (products[idElem-1].id === idElem && products[idElem-1].isLike === true) {
            products[idElem-1].isLike = !products[idElem-1].isLike;
            setLikes(--like);
        }
        if (like===0) setLikes('');
        setProducts(products);
    }

    const [inBacket, setInBacket] = useState('');
    const addInBacket = (inBacket, idElem) => {
        if (products[idElem-1].id === idElem && products[idElem-1].isInBacket ===  false) {
            products[idElem-1].isInBacket = !products[idElem-1].isInBacket;
            setInBacket(++inBacket);
        } else if (products[idElem-1].id === idElem && products[idElem-1].isInBacket === true) {
            products[idElem-1].isInBacket = !products[idElem-1].isInBacket;
            setInBacket(--inBacket);
        }
        if (inBacket===0) setInBacket('');
        setProducts(products);
    }

    return (
        <div className='App'>
            <Header like={like} inBacket={inBacket}/>
            <ProductList products={products} addLike={addLike} like={like} addInBacket={addInBacket} inBacket={inBacket}/>
        </div>
    );
};

export default App;