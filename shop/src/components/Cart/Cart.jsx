import CartItem from '../CartItem/CartItem';
import CartFooter from '../CartFooter/cartFooter';
import EmptyCart from '../EmptyCart/EmptyCart';
import './cart.css';
const Cart = ({ items, updateQuantity, removeFromCart }) => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__title">
                    <i className="fa-solid fa-cart-shopping"></i> <span>cart</span>
                </h2>
                <h3 className="cart__count">
                    <span>{totalItems}</span> pc</h3>
            </div>
            <ul className="cart__items">
                {items.length > 0 ? (items.map((item) => (
                    <CartItem key={item.id} product={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
                ))) : <EmptyCart />}
            </ul>
            {items.length > 0 && <CartFooter items={items} />}
        </div>
    )
}

export default Cart;