import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
  const { isLoggedIn, orders } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="orders-page">
        <div className="empty-orders">
          <h2>You are not logged in</h2>
          <p>Please log in or create an account to view your order history.</p>
          <button className="primary-action-btn" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>My Orders</h1>
      </div>
      
      {orders && orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.orderId} className="order-card">
              <div className="order-header">
                <div>
                  <div className="order-id">Order #: {order.orderId}</div>
                  <div className="order-date">Placed on: {new Date(order.date).toLocaleDateString()}</div>
                </div>
                <div className="order-status">{order.status}</div>
              </div>
              
              <div className="order-items">
                {order.items && order.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="order-item"
                    onClick={() => navigate(`/product/${item.id}`, { state: { product: item } })}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      src={`/image/${item.images?.[0] || 'placeholder.jpg'}`} 
                      alt={item.title} 
                      className="order-item-img" 
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=Image+Not+Found' }}
                    />
                    <div className="order-item-details">
                      <h3 className="order-item-title">{item.title}</h3>
                      <p className="order-item-price">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="order-footer">
                <span className="order-total-label">Order Total:</span>
                <span className="order-total-value">{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-orders">
          <h2>No orders yet</h2>
          <p>You haven't placed any orders with us yet.</p>
          <button className="primary-action-btn" onClick={() => navigate('/')}>Start Shopping</button>
        </div>
      )}
    </div>
  );
};

export default Orders;
