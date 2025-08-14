import './cartItem.css';
const CartItem = ({product}) => {
    const {name, price} = product;
    return (
        <li className="cart__item">
            <div className="cart__item-counter">
                <h4 className="cart__item-title">{name}</h4>
                <div className="cart__item-btns">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div className="cart__item-details">
                <div className="cart__item-remove">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="cart__item-calculation">
                    <span>{price}</span>
                    <span>gel</span>
                    <span>x</span>
                    <span>1</span>
                </div>
                <div className="cart__item-total">
                    <span className="cart__item-totalprice">20 278,05</span>
                    <span>gel</span>
                </div>
            </div>
        </li>
    )
}

export default CartItem;