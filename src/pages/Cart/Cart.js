import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemove = (productCode) => {
    dispatch(removeFromCart({ productCode }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Assuming price format like "₹75,850.23"
      const numericPrice = parseFloat(item.price.replace(/[^\d.-]/g, ''));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <div className="cart-page-container">
      <h1 className="cart-page-title">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart-content">
          <div className="empty-cart-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="empty-cart-svg">
              {/* Shopping Bag */}
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
              {/* Plus badge on bottom right */}
              <circle cx="18" cy="18" r="4.5" fill="#ffffff" stroke="currentColor" strokeWidth="1.2" />
              <line x1="18" y1="16" x2="18" y2="20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="16" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          
          <p className="empty-cart-message">You have no items in your shopping cart.</p>
          
          <button className="continue-shopping-btn" onClick={() => navigate('/')}>
            CONTINUE SHOPPING
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <Link to={`/product/${item.productCode}`} state={{ product: item }}>
                    <img src={`/image/${item.images[0]}`} alt={item.title} />
                  </Link>
                </div>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">
                    <Link to={`/product/${item.productCode}`} state={{ product: item }}>{item.title}</Link>
                  </h3>
                  <p className="cart-item-code">Product Code: {item.productCode}</p>
                  <div className="cart-item-price-qty">
                    <span className="cart-item-price">{item.price}</span>
                    <span className="cart-item-quantity">Qty: {item.quantity}</span>
                  </div>
                  <button className="cart-item-remove" onClick={() => handleRemove(item.productCode)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3 className="cart-summary-title">Order Summary</h3>
            <div className="cart-summary-row">
              <span>Subtotal:</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <div className="cart-summary-row cart-total">
              <span>Total:</span>
              <span>{formatPrice(calculateTotal())}</span>
            </div>
            <button className="checkout-btn" onClick={() => navigate('/place-order', { state: { product: cartItems[0] } })}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
