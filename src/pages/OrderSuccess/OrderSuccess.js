import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState('');

  const orderData = location.state || {};

  useEffect(() => {
    // Generate a random order ID like ORD-8X39Y2
    const randomId = 'ORD-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderId(randomId);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order-success-page">
      <div className="order-success-container">
        
        <div className="success-icon-wrapper">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>

        <h1 className="success-title">Order Placed Successfully!</h1>
        <p className="success-subtitle">
          Thank you for shopping with us, {orderData.firstName || 'Guest'}. Your order has been confirmed.
        </p>

        <div className="order-details-card">
          <div className="order-info-row">
            <span className="order-label">Order ID:</span>
            <span className="order-value highlight">{orderId}</span>
          </div>
          <div className="order-info-row">
            <span className="order-label">Payment Method:</span>
            <span className="order-value">
              {orderData.paymentMethod === 'card' ? 'Credit/Debit Card' : 
               orderData.paymentMethod === 'upi' ? 'UPI / Net Banking' : 'Cash on Delivery'}
            </span>
          </div>
          <div className="order-info-row">
            <span className="order-label">Estimated Delivery:</span>
            <span className="order-value">3 - 5 Business Days</span>
          </div>
        </div>

        <p className="success-email-note">
          We have sent an order confirmation email to <strong>{orderData.email || 'your email'}</strong>.
        </p>

        <button className="continue-shopping-btn" onClick={() => navigate('/')}>
          CONTINUE SHOPPING
        </button>

      </div>
    </div>
  );
};

export default OrderSuccess;
