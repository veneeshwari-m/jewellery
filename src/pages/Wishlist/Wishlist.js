import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromWishlist } from '../../store/wishlistSlice';
import { addToCart } from '../../store/cartSlice';
import './Wishlist.css';

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item));
    // optionally navigate('/cart')
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1 className="wishlist-title">MY WISHLIST</h1>
        <p className="wishlist-subtitle">Save your favorite pieces for later.</p>
      </div>

      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2>Your Wishlist is Empty</h2>
            <p>You haven't added any items to your wishlist yet. Explore our collection and find something you love!</p>
            <button className="wishlist-continue-btn" onClick={() => navigate('/')}>CONTINUE SHOPPING</button>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item, index) => (
              <div key={index} className="wishlist-card">
                <div className="wishlist-card-image" onClick={() => navigate(`/product/${item.productCode}`, { state: { product: item } })}>
                  <img src={`/image/${item.images?.[0] || 'gold-4.jpg'}`} alt={item.title} />
                  <button 
                    className="wishlist-remove-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeFromWishlist(item));
                    }}
                    title="Remove from Wishlist"
                  >
                    ×
                  </button>
                </div>
                <div className="wishlist-card-info">
                  <h3 className="wishlist-card-title">{item.title}</h3>
                  <div className="wishlist-card-price">{item.price}</div>
                  <div className="wishlist-card-actions">
                    <button className="wishlist-action-btn move-to-cart" onClick={() => handleMoveToCart(item)}>
                      MOVE TO CART
                    </button>
                    <button className="wishlist-action-btn buy-now" onClick={() => navigate('/place-order', { state: { product: item } })}>
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
