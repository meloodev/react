import CartItem from '../CartItem/CartItem';
import CartFooter from '../CartFooter/cartFooter';
import EmptyCart from '../EmptyCart/EmptyCart';
import './cart.css';
const Cart = ({ items }) => {
    //console.log(items)
    return (
        <div className="cart">
            <div className="cart__header">
                <h2 className="cart__title">
                    <i className="fa-solid fa-cart-shopping"></i> <span>cart</span>
                </h2>
                <h3 className="cart__count">
                    <span>1</span> pc</h3>
            </div>
            <ul className="cart__items">
                {items.length > 0 ? (items.map((item) => (
                    <CartItem key={item.id} product={item} />
                ))) : <EmptyCart />}
            </ul>
            <CartFooter />
        </div>
    )
}

export default Cart;