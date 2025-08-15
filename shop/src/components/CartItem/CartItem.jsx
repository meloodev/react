import { useState } from 'react';
import './cartItem.css';
const CartItem = ({ product, updateQuantity, removeFromCart }) => {
    const { id, name, price, quantity } = product;

    const increment = () => {
        if (quantity < 100) {
            updateQuantity(id, quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            updateQuantity(id, quantity - 1);
        }
    }

    const total = price * quantity

    return (
        <li className="cart__item">
            <div className="cart__item-counter">
                <h4 className="cart__item-title">{name}</h4>
                <div className="cart__item-btns">
                    <button disabled={quantity <= 1} onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button  disabled={quantity >= 100} onClick={increment}>+</button>
                </div>
            </div>
            <div className="cart__item-details">
                <div className="cart__item-remove" onClick={() => removeFromCart(id)}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="cart__item-calculation">
                    <span>{price}</span>
                    <span>gel</span>
                    <span>x</span>
                    <span>{quantity}</span>
                </div>
                <div className="cart__item-total">
                    <span className="cart__item-totalprice">{total.toFixed(2)}</span>
                    <span>gel</span>
                </div>
            </div>
        </li>
    )
}

export default CartItem;