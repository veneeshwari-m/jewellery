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
        
        {/* Left Column: Social Login */}
        <div className="login-social-col">
          <h3 className="login-section-title">Login With Social Profile</h3>
          <div className="social-login-buttons">
            <button className="social-btn facebook-btn">
              <span className="social-icon">f</span>
              <span className="social-text">Login with Facebook</span>
            </button>
            <button className="social-btn google-btn">
              <span className="social-icon google-icon">G</span>
              <span className="social-text">Login with Google</span>
            </button>
          </div>
        </div>

        {/* Right Column: Email Login */}
        <div className="login-email-col">
          <h3 className="login-section-title">Registered Customers</h3>
          <p className="login-subtitle">If you have an account, sign in with your email address.</p>
          
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" required />
            </div>
            
            <div className="form-group">
              <label>Password <span className="required">*</span></label>
              <input type="password" required />
            </div>
            
            <a href="#" className="forgot-password-link">Forgot Your Password?</a>
            
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
