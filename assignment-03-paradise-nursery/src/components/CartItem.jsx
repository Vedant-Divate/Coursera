import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  selectCartItems,
  selectTotalAmount,
  selectTotalQuantity,
} from '../redux/CartSlice.jsx';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount);
  const totalQuantity = useSelector(selectTotalQuantity);
  const [checkoutMsg, setCheckoutMsg] = useState('');

  const handleCheckout = () => {
    setCheckoutMsg('Checkout is Coming Soon! Thank you for visiting Paradise Nursery.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/plants" className="btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <p className="subtitle">
        {totalQuantity} item{totalQuantity !== 1 ? 's' : ''} in your cart
      </p>
      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-row">
            <img src={item.image} alt={item.name} className="cart-thumb" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>Unit price: ${item.price}</p>
              <p className="line-total">Total: ${item.price * item.quantity}</p>
            </div>
            <div className="qty-controls">
              <button onClick={() => dispatch(decrementQuantity(item.id))} aria-label="Decrease quantity">
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(incrementQuantity(item.id))} aria-label="Increase quantity">
                +
              </button>
            </div>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeItem(item.id))}
              aria-label={`Remove ${item.name}`}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <h2 className="cart-total">Total cart amount: ${totalAmount}</h2>
      <div className="cart-actions">
        <button className="btn primary" onClick={handleCheckout}>
          Checkout
        </button>
        <Link to="/plants" className="btn">
          Continue Shopping
        </Link>
      </div>
      {checkoutMsg && <p className="coming-soon">{checkoutMsg}</p>}
    </div>
  );
}

export default CartItem;
