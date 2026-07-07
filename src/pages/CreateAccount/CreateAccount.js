import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/userSlice';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(registerUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      mobile: formData.mobile,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        zip: formData.zip
      }
    }));
    navigate('/profile');
  };

  return (
    <div className="create-account-page">
      <div className="create-account-header">
        <h1 className="page-title">Create New Customer Account</h1>
      </div>
      
      <div className="create-account-container">
        <form className="form-grid" onSubmit={handleSubmit}>
          {/* Left Column */}
          <div className="form-column">
            <h2 className="section-subtitle">Personal Information</h2>
            
            <div className="input-group">
              <label>First Name <span className="required">*</span></label>
              <input type="text" name="firstName" className="form-input" required value={formData.firstName} onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Last Name <span className="required">*</span></label>
              <input type="text" name="lastName" className="form-input" required value={formData.lastName} onChange={handleChange} />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" className="custom-checkbox" required />
              <label htmlFor="terms">
                I agree, <span className="terms-link">Terms & Conditions</span>
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <h2 className="section-subtitle">Sign-in Information</h2>
            
            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" className="form-input" required value={formData.email} onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Password <span className="required">*</span></label>
              <input type="password" name="password" className="form-input" required value={formData.password} onChange={handleChange} />
              <span className="password-strength">Password Strength: {formData.password.length > 5 ? 'Strong' : 'No Password'}</span>
            </div>

            <div className="input-group">
              <label>Confirm Password <span className="required">*</span></label>
              <input type="password" name="confirmPassword" className="form-input" required value={formData.confirmPassword} onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Mobile <span className="required">*</span></label>
              <input type="tel" name="mobile" className="form-input" required value={formData.mobile} onChange={handleChange} />
            </div>
          </div>
          
          {/* Address Information - Full Width */}
          <div className="form-column" style={{ gridColumn: '1 / -1', marginTop: '20px' }}>
            <h2 className="section-subtitle">Address Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="input-group">
                <label>Street Address <span className="required">*</span></label>
                <input type="text" name="street" className="form-input" required value={formData.street} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>City <span className="required">*</span></label>
                <input type="text" name="city" className="form-input" required value={formData.city} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>State <span className="required">*</span></label>
                <input type="text" name="state" className="form-input" required value={formData.state} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Zip/Postal Code <span className="required">*</span></label>
                <input type="text" name="zip" className="form-input" required value={formData.zip} onChange={handleChange} />
              </div>
            </div>
          </div>
          
          <div className="form-actions-full-width" style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button type="submit" className="create-account-btn" style={{ minWidth: '250px' }}>CREATE AN ACCOUNT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
