import './cartFooter.css';

const CartFooter = () => {
    return (
        <div className="cart__footer">
            <div className="cart__footer-head">
                <div className="cart__footer-descr">
                    <h4 className="cart__footer-subtitle">items:</h4>
                    <div className="cart__footer-title">total:</div>
                </div>
                <div className="cart__footer-calculation">
                    <div className="cart__footer-count">2<span> pc</span>
                    </div>
                    <div className="cart__footer-totalprice">53500<span> gel</span>
                    </div>
                </div>
            </div>
            <button className="cart__checkout">
                <i className="fa-solid fa-credit-card"></i>
                <span>Checkout</span>
            </button>
        </div>
    )
}

export default CartFooter;