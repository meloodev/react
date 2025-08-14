import './product.css';
const Cart = ({ product, addToCart }) => {
    const { name, price } = product;

    return (
        <li className="shop__item">
            <div className="item__descr">
                <h3 className="item__name">{name}</h3>
                <div className="item__price">{price}<span> GEL</span>
                </div>
            </div>
            <button onClick={() => addToCart(product)} className="item__btn">
                <i className="fa-solid fa-plus"></i>
                <span>Add to Cart</span>
            </button>
        </li>
    )
}

export default Cart;