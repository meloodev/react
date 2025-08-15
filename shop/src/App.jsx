import { useState } from 'react';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import './App.css';

const products = [
  { id: 1, name: 'MacBook Air M2', price: 10 },
  { id: 2, name: 'Samsung S921B Galaxy S24', price: 10 },
  { id: 3, name: 'Apple iPhone 13 128GB', price: 10 }
];
const App = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
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
          <Cart
            items={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  )
}

export default App;