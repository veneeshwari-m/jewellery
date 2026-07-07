import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="create-account-page">
      <div className="create-account-header">
        <h1 className="page-title">Create New Customer Account</h1>
      </div>
      
      <div className="create-account-container">
        <div className="form-grid">
          {/* Left Column */}
          <div className="form-column">
            <h2 className="section-subtitle">Personal Information</h2>
            
            <div className="input-group">
              <label>First Name <span className="required">*</span></label>
              <input type="text" className="form-input" />
            </div>

            <div className="input-group">
              <label>Last Name <span className="required">*</span></label>
              <input type="text" className="form-input" />
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="terms" className="custom-checkbox" />
              <label htmlFor="terms">
                I agree, <span className="terms-link">Terms & Conditions</span>
              </label>
            </div>

            <button className="create-account-btn" onClick={() => navigate('/login')}>CREATE AN ACCOUNT</button>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <h2 className="section-subtitle">Sign-in Information</h2>
            
            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" className="form-input" />
            </div>

            <div className="input-group">
              <label>Password <span className="required">*</span></label>
              <input type="password" className="form-input" />
              <span className="password-strength">Password Strength: No Password</span>
            </div>

            <div className="input-group">
              <label>Confirm Password <span className="required">*</span></label>
              <input type="password" className="form-input" />
            </div>

            <div className="input-group">
              <label>Mobile <span className="required">*</span></label>
              <input type="tel" className="form-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
