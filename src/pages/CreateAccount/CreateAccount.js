import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/userSlice';
import './CreateAccount.css';

const CreateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: ''
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
      mobile: formData.mobile
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
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  className="form-input" 
                  required 
                  value={formData.password} 
                  onChange={handleChange}
                  style={{ paddingRight: '40px' }}
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="password-toggle-btn"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666'
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              <span className="password-strength">Password Strength: {formData.password.length > 5 ? 'Strong' : 'No Password'}</span>
            </div>

            <div className="input-group">
              <label>Confirm Password <span className="required">*</span></label>
              <div className="password-input-wrapper" style={{ position: 'relative' }}>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  name="confirmPassword" 
                  className="form-input" 
                  required 
                  value={formData.confirmPassword} 
                  onChange={handleChange}
                  style={{ paddingRight: '40px' }}
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                  className="password-toggle-btn"
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666'
                  }}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>Mobile <span className="required">*</span></label>
              <input type="tel" name="mobile" className="form-input" required value={formData.mobile} onChange={handleChange} />
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
