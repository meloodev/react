import { useState } from 'react';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import './App.css';

const products = [
  { id: 1, name: 'MacBook Air M2', price: 4055 },
  { id: 2, name: 'Samsung S921B Galaxy S24', price: 1739 },
  { id: 3, name: 'Apple iPhone 13 128GB', price: 1349 }
];
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div className="shop">
      <div className="container">
        <h1 className="shop__title"><i className="fa-solid fa-cart-shopping"></i> <span>shop magazine</span></h1>
        <div className="shop__cover">
          <div className="shop__catalog">
            <h2 className="shop__catalog-title">
              <i className="fa-solid fa-box-open"></i>
              <span>Product Catalog</span>
            </h2>
            <ul className="shop__items">
              {products.map((item) => (
                <Product key={item.id} product={item} addToCart={addToCart}
                />
              ))}
            </ul>
          </div>
          <Cart items={cart} />
        </div>
      </div>
    </div>
  )
}

export default App;