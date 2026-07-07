import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../../store/userSlice';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const product = location.state?.product || {
    title: "Elegant Crown Kids Gold Bangles",
    price: "₹75,850.23",
    images: ['gold-bangles.png']
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(placeOrder({
      items: [product],
      total: product.price,
      shipping: formData
    }));
    setShowPopup(true);
  };

  return (
    <div className="place-order-page">
      <div className="place-order-container">
        <h1 className="place-order-title">Place Your Order</h1>
        
        <div className="place-order-content">
          <form className="place-order-form" onSubmit={handleSubmit}>
            
            <section className="form-section">
              <h2 className="section-title">Contact Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2 className="section-title">Shipping Address</h2>
              <div className="form-group">
                <label>Street Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label>Pincode</label>
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} required />
                </div>
              </div>
            </section>

            <section className="form-section">
              <h2 className="section-title">Payment Method</h2>
              <div className="payment-methods">
                <label className={`payment-option ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="card" 
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <span>Credit/Debit Card</span>
                </label>
                <label className={`payment-option ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="upi" 
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleInputChange}
                  />
                  <span>UPI / Net Banking</span>
                </label>
                <label className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="cod" 
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>
            </section>

            <button type="submit" className="confirm-order-btn">CONFIRM ORDER</button>
          </form>

          <div className="order-summary-sidebar">
            <h2 className="section-title">Order Summary</h2>
            <div className="summary-product">
              <div className="summary-img-wrapper">
                <img src={`/image/${product.images[0]}`} alt={product.title} />
              </div>
              <div className="summary-product-details">
                <h3>{product.title}</h3>
                <p>Qty: 1</p>
                <p className="summary-price">{product.price}</p>
              </div>
            </div>
            
            <hr className="summary-divider" />
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{product.price}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <hr className="summary-divider" />
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>{product.price}</span>
            </div>
          </div>
        </div>
      </div>
      
      {showPopup && (
        <div className="order-popup-overlay">
          <div className="order-popup-content">
            <div className="success-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Order Placed Successfully!</h2>
            <p>Thank you for your purchase, {formData.firstName}. Your order has been confirmed.</p>
            <button className="continue-btn" onClick={() => navigate('/')}>Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
