import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigate = useNavigate();
  
  const navItems = [
    { label: 'HOME', hasDropdown: false },
    { 
      label: 'GOLD JEWELLERY', 
      hasDropdown: true,
      megaMenu: [
        { img: 'gold-1.jpg', text: 'GOLD BANGLES' },
        { img: 'gold-2.jpg', text: 'GOLD MALAI' },
        { img: 'gold-3.jpg', text: 'GOLD NECKLACE' },
        { img: 'gold-4.jpg', text: 'GOLD EARINGS' },
        { img: 'gold-5.jpg', text: 'GOLD PENDANT' },
        { img: 'gold-6.jpg', text: 'GOLD BRACELET' },
        { img: 'gold-7.jpg', text: 'GOLD RING' },
        { img: 'gold-8.jpg', text: 'GOLD CHAIN' },
        { img: 'gold-9.jpg', text: 'GOLD NETHICHUTTI' },
      ]
    },
    { 
      label: 'HOME DECOR', 
      hasDropdown: true,
      megaMenu: [
        { img: 'home-1.jpg', text: 'GIFTS' },
        { img: 'home-2.jpg', text: 'IDOLS' },
        { img: 'home-3.jpg', text: 'FRAMES' },
      ]
    },
    { 
      label: 'DIAMOND', 
      hasDropdown: true,
      megaMenu: [
        { img: 'diamond-1.jpg', text: 'DIAMOND BANGLES' },
        { img: 'diamond-2.png', text: 'DIAMOND BRACELETS' },
        { img: 'diamond-3.jpg', text: 'DIAMOND PENDANTS' },
        { img: 'diamond-4.jpg', text: 'DIAMOND NECKLACE' },
        { img: 'diamond-5.jpg', text: 'DIAMOND RINGS' },
        { img: 'diamond-6.jpg', text: 'DIAMOND EARRINGS' },
      ]
    },
    { 
      label: 'COINS', 
      hasDropdown: true,
      megaMenu: [
        { img: 'coin-1.jpg', text: 'GOLD COINS' },
        { img: 'coin-2.jpg', text: 'PURE COINS' },
      ]
    },
    { 
      label: 'SILVER', 
      hasDropdown: true,
      megaMenu: [
        { img: 'silver-1.jpg', text: 'SILVER ARTICLES' },
        { img: 'silver-2.jpg', text: 'POOJA ARTICLES' },
      ]
    },
    { 
      label: 'SILVER JEWELLRY', 
      hasDropdown: true,
      megaMenu: [
        { img: 'jew-1.jpg', text: 'KIDS WEAR' },
        { img: 'jew-2.jpg', text: 'ANKLETS' },
        { img: 'jew-3.jpg', text: 'CHAIN' },
        { img: 'jew-4.jpg', text: 'EARINGS' },
        { img: 'jew-5.jpg', text: 'MALAI' },
      ]
    },
    { label: 'DIGIGOLD APP', hasDropdown: true },
    { label: 'SCHEMES', hasDropdown: true },
    { label: 'CORPORATE GIFTS', hasDropdown: false },
  ];

  const [forceClose, setForceClose] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMegaMenuClick = (e, targetPath) => {
    e.stopPropagation();
    navigate(targetPath);
    setForceClose(true);
    setTimeout(() => setForceClose(false), 300); // Re-enable after click
  };

  return (
    <>
      <nav 
        className="category-navbar"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="category-navbar-container">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`category-nav-item ${item.megaMenu ? 'has-mega-menu' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => {
                const slug = item.label === 'HOME' ? '/' : `/category/${item.label.toLowerCase().replace(/\s+/g, '-')}`;
                navigate(slug);
                setForceClose(true);
                setHoveredIndex(null);
                setTimeout(() => setForceClose(false), 300);
              }}
              style={{ cursor: 'pointer' }}
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              
              {/* Arrow directly under the nav item */}
              {hoveredIndex === index && item.megaMenu && !forceClose && (
                <div className="mega-menu-arrow"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mega Menu Dropdown centered on the entire navbar */}
        {hoveredIndex !== null && navItems[hoveredIndex].megaMenu && !forceClose && (
          <div className="mega-menu centered-mega-menu">
            <div 
              className="mega-menu-grid"
              style={{ 
                '--cols': Math.min(5, navItems[hoveredIndex].megaMenu.length)
              }}
            >
              {navItems[hoveredIndex].megaMenu.map((mItem, mIndex) => (
                <div 
                  className="mega-menu-item" 
                  key={mIndex}
                  onClick={(e) => handleMegaMenuClick(e, `/category/${navItems[hoveredIndex].label.toLowerCase().replace(/\s+/g, '-')}`)}
                >
                  <div className="mega-menu-img-container">
                    <img src={`/image/${mItem.img}`} alt={mItem.text} />
                  </div>
                  <span className="mega-menu-text">{mItem.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
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
                    const slug = item.label === 'HOME' ? '/' : `/category/${item.label.toLowerCase().replace(/\s+/g, '-')}`;
                    navigate(slug);
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
