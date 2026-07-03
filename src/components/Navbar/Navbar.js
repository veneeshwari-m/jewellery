import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { label: 'HOME', hasDropdown: false },
    { label: 'GOLD JEWELLERY', hasDropdown: true },
    { label: 'HOME DECOR', hasDropdown: true },
    { label: 'DIAMOND', hasDropdown: true },
    { label: 'COINS', hasDropdown: true },
    { label: 'SILVER', hasDropdown: true },
    { label: 'SILVER JEWELLRY', hasDropdown: true },
    { label: 'DIGIGOLD APP', hasDropdown: true },
    { label: 'SCHEMES', hasDropdown: true },
    { label: 'CORPORATE GIFTS', hasDropdown: false },
  ];

  return (
    <>
      <nav className="category-navbar">
        <div className="category-navbar-container">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="category-nav-item"
              onClick={() => {
                if (item.label === 'HOME') {
                  navigate('/');
                }
              }}
              style={{ cursor: item.label === 'HOME' ? 'pointer' : 'default' }}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Off-Canvas Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay background */}
          <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
          
          {/* Sliding drawer */}
          <div className="mobile-menu-drawer">
            <div className="mobile-menu-header">
              <div className="mobile-menu-tab menu-tab active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                Menu
              </div>
              <div className="mobile-menu-tab account-tab" onClick={() => {
                navigate('/create-account');
                setIsMobileMenuOpen(false);
              }}>
                Account
              </div>
            </div>

            <div className="mobile-menu-items">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="mobile-menu-item"
                  onClick={() => {
                    if (item.label === 'HOME') {
                      navigate('/');
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
