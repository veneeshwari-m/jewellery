import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-page">
      <div className="login-header-banner">
        <h2>Customer Login</h2>
      </div>
      
      <div className="login-container">
        
        <div className="login-form-container">
          <h3 className="login-section-title">Registered Customers</h3>
          <p className="login-subtitle">If you have an account, sign in with your email address.</p>
          
          <form className="login-form" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" required />
            </div>
            
            <div className="form-group">
              <label>Password <span className="required">*</span></label>
              <input type="password" required />
            </div>
            
            <button type="button" className="forgot-password-link" onClick={() => navigate('/forgot-password')}>Forgot Your Password?</button>
            
            <div className="login-action-buttons">
              <button type="submit" className="login-primary-btn">SIGN IN</button>
              <button 
                type="button" 
                className="login-secondary-btn"
                onClick={() => navigate('/create-account')}
              >
                CREATE AN ACCOUNT
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
