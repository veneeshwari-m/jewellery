import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAddress, removeAddress, logout } from '../../store/userSlice';
import './Profile.css';

const Profile = () => {
  const { isLoggedIn, details, addresses } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // If not logged in, you could redirect to login here. 
    // For this prototype, we'll just allow it to render or show a message.
  }, []);

  const handleAddressChange = (e) => {
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  };

  const handleAddAddress = (e) => {
    e.preventDefault();
    dispatch(addAddress(addressData));
    setAddressData({ street: '', city: '', state: '', zip: '', country: '' });
    setShowAddressForm(false);
  };

  const confirmLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  if (!isLoggedIn && !details.firstName) {
    return (
      <div className="profile-page">
        <div className="profile-container empty-profile">
          <h2>You are not logged in</h2>
          <p>Please log in or create an account to view your profile.</p>
          <button className="primary-action-btn" onClick={() => navigate('/login')}>Go to Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      
      <div className="profile-container">
        {/* User Details Section */}
        <section className="profile-section card">
          <div className="section-header">
            <h2>Personal Information</h2>
            <button className="primary-action-btn" onClick={() => navigate('/orders')}>My Orders</button>
          </div>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">First Name</span>
              <span className="detail-value">{details.firstName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Last Name</span>
              <span className="detail-value">{details.lastName}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email Address</span>
              <span className="detail-value">{details.email}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Mobile Number</span>
              <span className="detail-value">{details.mobile}</span>
            </div>
          </div>
        </section>

        {/* Addresses Section */}
        <section className="profile-section card">
          <div className="section-header">
            <h2>Manage Addresses</h2>
            {!showAddressForm && (
              <button className="primary-action-btn" onClick={() => setShowAddressForm(true)}>+ Add Address</button>
            )}
          </div>

          {showAddressForm && (
            <form className="address-form" onSubmit={handleAddAddress}>
              <h3>New Address</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Street Address</label>
                  <input type="text" name="street" required value={addressData.street} onChange={handleAddressChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="city" required value={addressData.city} onChange={handleAddressChange} />
                </div>
                <div className="form-group">
                  <label>State / Province</label>
                  <input type="text" name="state" required value={addressData.state} onChange={handleAddressChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Zip / Postal Code</label>
                  <input type="text" name="zip" required value={addressData.zip} onChange={handleAddressChange} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <input type="text" name="country" required value={addressData.country} onChange={handleAddressChange} />
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save Address</button>
                <button type="button" className="cancel-btn" onClick={() => setShowAddressForm(false)}>Cancel</button>
              </div>
            </form>
          )}

          <div className="addresses-list">
            {addresses.length === 0 ? (
              <p className="no-data-msg">You have no saved addresses yet.</p>
            ) : (
              <div className="address-grid">
                {addresses.map(addr => (
                  <div key={addr.id} className="address-card">
                    <p>{addr.street}</p>
                    <p>{addr.city}, {addr.state} {addr.zip}</p>
                    <p>{addr.country}</p>
                    <button className="remove-btn" onClick={() => dispatch(removeAddress(addr.id))}>Remove</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Logout Section at the bottom */}
        <div className="profile-actions-bottom" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '20px' }}>
          <span 
            className="logout-text-link" 
            onClick={handleLogout} 
            style={{ 
              color: '#888', 
              textDecoration: 'underline', 
              cursor: 'pointer', 
              fontSize: '0.9rem' 
            }}
          >
            Log Out
          </span>
        </div>
      </div>

      {/* Custom Logout Confirmation Popup */}
      {showLogoutConfirm && (
        <div className="custom-popup-overlay">
          <div className="custom-popup-modal slide-in-left">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out of your account?</p>
            <div className="custom-popup-actions">
              <button className="popup-btn-cancel" onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
              <button className="popup-btn-confirm" onClick={confirmLogout}>Log Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
