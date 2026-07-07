import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="forgot-password-page">
      <div className="login-header-banner">
        <h2>Forgot Your Password?</h2>
      </div>
      
      <div className="login-container">
        <div className="login-form-container">
          <p className="login-subtitle">Please enter your email address below to receive a password reset link.</p>
          
          <form className="login-form" onSubmit={(e) => { 
            e.preventDefault(); 
            alert("A password reset link has been sent to your email address.");
            navigate('/login'); 
          }}>
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" required />
            </div>
            
            <div className="login-action-buttons">
              <button type="submit" className="login-primary-btn">RESET MY PASSWORD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
