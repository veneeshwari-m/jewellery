import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../../store/userSlice';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registeredAccounts = useSelector(state => state.user.registeredAccounts);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Find the registered account by email and password
    const foundUser = registeredAccounts.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      dispatch(setUserDetails(foundUser));
      navigate('/');
    } else {
      // Fallback for demo purposes if no user matches
      if (email === 'demo@example.com' || registeredAccounts.length === 0) {
        dispatch(setUserDetails({
          firstName: 'Demo',
          lastName: 'User',
          email: 'demo@example.com',
          mobile: '1234567890'
        }));
        navigate('/');
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-header-banner">
        <h2>Customer Login</h2>
      </div>
      
      <div className="login-container">
        
        <div className="login-form-container">
          <h3 className="login-section-title">Registered Customers</h3>
          <p className="login-subtitle">If you have an account, sign in with your email address.</p>
          
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            
            <div className="form-group">
              <label>Password <span className="required">*</span></label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
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
