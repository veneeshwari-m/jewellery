import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <h1 className="page-title">Create New Customer Account</h1>
        
        <div className="form-grid">
          {/* Left Column */}
          <div className="form-column">
            <div className="social-profile-section">
              <h2 className="section-subtitle">Login With Social Profile</h2>
              
              <div className="social-buttons">
                <button className="social-btn facebook-btn">
                  <span className="social-icon fb-icon">f</span>
                  Login with Facebook
                </button>
                <button className="social-btn google-btn">
                  <span className="social-icon g-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/>
                      <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"/>
                      <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"/>
                      <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/>
                    </svg>
                  </span>
                  Login with Google
                </button>
              </div>
            </div>

            <h2 className="section-subtitle mt-4">Personal Information</h2>
            
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

            <button className="create-account-btn">CREATE AN ACCOUNT</button>
          </div>

          {/* Right Column */}
          <div className="form-column">
            <h2 className="section-subtitle">Sign-in Information</h2>
            
            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" className="form-input active-input" />
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
