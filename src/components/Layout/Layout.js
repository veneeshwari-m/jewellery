import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Home/Home.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

// Initial default rates matching the user screenshot exactly
const DEFAULT_RATES = {
  gold22k: 13945,
  gold24k: 15213,
  gold18k: 11410,
  silver: 270,
  platinum: 7473,
  lastUpdated: '06/05/26 3:54 PM'
};

// Trend history multipliers to generate past 7 days of rates dynamically
const TREND_MULTIPLIERS = {
  gold22k: [0.97, 0.98, 0.99, 0.985, 1.005, 0.995, 1.0],
  gold24k: [0.975, 0.982, 0.988, 0.984, 1.003, 0.997, 1.0],
  gold18k: [0.965, 0.978, 0.991, 0.986, 1.008, 0.994, 1.0],
  silver: [0.95, 0.965, 0.98, 0.97, 1.02, 0.99, 1.0],
  platinum: [0.98, 0.985, 0.99, 0.985, 1.01, 0.995, 1.0]
};

const DATES = ["05/30", "05/31", "06/01", "06/02", "06/03", "06/04", "06/05"];

const MOCK_PRODUCTS = [
  { id: 'feat-1', title: 'Featured Gold Bangle', image: 'page-3.1.jpg', price: '₹ 57,994.15' },
  { id: 'feat-2', title: 'Featured Solitaire Ring', image: 'page-3.2.jpg', price: '₹ 81,351.46' },
  { id: 'feat-3', title: 'Featured Gold Earrings', image: 'page-3.3.jpg', price: '₹ 51,163.20' },
  { id: 'feat-4', title: 'Featured Gold Pendant', image: 'page-3.4.jpg', price: '₹ 45,890.62' },
  { id: 'cat-1', title: 'Gold Bangles Collection', image: 'page-4.1.png', price: '₹ 45,000.00' },
  { id: 'cat-2', title: 'Gold Malai Collection', image: 'page-4.2.jpg', price: '₹ 1,45,000.00' },
  { id: 'cat-3', title: 'Gold Necklace Set', image: 'page-4.3.png', price: '₹ 85,000.00' },
];

function Layout({ children }) {
  const [rates] = useState(DEFAULT_RATES);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('gold22k'); // gold22k, gold24k, gold18k, silver, platinum
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const user = useSelector(state => state.user);
  
  const cartItemsCount = useSelector(state => state.cart.items.length);
  const wishlistItemsCount = useSelector(state => state.wishlist.items.length);

  // SVG Chart Tooltip State
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Auto-scroll to sections helper
  const scrollToSection = (id) => {
    if (pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate historical data based on current rates
  const getHistoryData = (metalKey) => {
    const currentRate = rates[metalKey];
    const multipliers = TREND_MULTIPLIERS[metalKey] || TREND_MULTIPLIERS.gold22k;
    return DATES.map((date, index) => {
      const rate = Math.round(currentRate * multipliers[index]);
      const prevRate = index > 0 ? Math.round(currentRate * multipliers[index - 1]) : rate;
      const change = rate - prevRate;
      return { date, rate, change };
    });
  };

  const historyData = getHistoryData(activeTab);

  // Render SVG Chart for Modal
  const renderChart = () => {
    if (historyData.length === 0) return null;

    const ratesList = historyData.map(d => d.rate);
    const minRate = Math.min(...ratesList) * 0.99;
    const maxRate = Math.max(...ratesList) * 1.01;
    const rateRange = maxRate - minRate;

    const chartWidth = 560;
    const chartHeight = 180;
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;

    const points = historyData.map((d, index) => {
      const x = paddingLeft + (index * (chartWidth - paddingLeft - paddingRight) / (historyData.length - 1));
      const y = chartHeight - paddingBottom - ((d.rate - minRate) * (chartHeight - paddingTop - paddingBottom) / rateRange);
      return { x, y, date: d.date, rate: d.rate, index };
    });

    const pathData = points.reduce((acc, p, i) => {
      return i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`;
    }, "");

    const areaData = `
      ${pathData} 
      L ${points[points.length - 1].x} ${chartHeight - paddingBottom} 
      L ${points[0].x} ${chartHeight - paddingBottom} 
      Z
    `;

    return (
      <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="chart-svg">
        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
          const y = paddingTop + ratio * (chartHeight - paddingTop - paddingBottom);
          const rateVal = Math.round(maxRate - ratio * rateRange);
          return (
            <g key={i}>
              <line 
                x1={paddingLeft} 
                y1={y} 
                x2={chartWidth - paddingRight} 
                y2={y} 
                stroke="#eae6df" 
                strokeWidth="1" 
                strokeDasharray="4 4"
              />
              <text 
                x={paddingLeft - 8} 
                y={y + 4} 
                textAnchor="end" 
                fontSize="10" 
                fill="#78716c" 
                fontWeight="500"
              >
                ₹{rateVal.toLocaleString('en-IN')}
              </text>
            </g>
          );
        })}

        {/* Shaded Area */}
        <path d={areaData} fill="url(#chartGradient)" opacity="0.15" />

        {/* Main Line */}
        <path d={pathData} fill="none" stroke="var(--primary-color)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* X-axis dates & vertical lines */}
        {points.map((p, i) => (
          <g key={i}>
            <line 
              x1={p.x} 
              y1={paddingTop} 
              x2={p.x} 
              y2={chartHeight - paddingBottom} 
              stroke="#eae6df" 
              strokeWidth="1" 
              strokeDasharray="2 2"
            />
            <text 
              x={p.x} 
              y={chartHeight - paddingBottom + 18} 
              textAnchor="middle" 
              fontSize="10" 
              fill="#78716c" 
              fontWeight="600"
            >
              {p.date}
            </text>
            
            {/* Interactive Circle anchors */}
            <circle 
              cx={p.x} 
              cy={p.y} 
              r="5" 
              fill="var(--bg-card)" 
              stroke="var(--primary-color)" 
              strokeWidth="3"
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => setHoveredPoint(p)}
              onMouseLeave={() => setHoveredPoint(null)}
            />
          </g>
        ))}

        {/* Gradients definition */}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary-color)" />
            <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  // The rate items to be rendered in the marquee
  const renderRateItems = () => (
    <>
      <div className="rate-item">
        <span className="rate-label">GOLD RATE 22k (1gm):</span>
        <span className="rate-val">₹{rates.gold22k.toLocaleString('en-IN')}</span>
      </div>
      <div className="rate-item">
        <span className="rate-label">GOLD RATE 24k (1gm):</span>
        <span className="rate-val">₹{rates.gold24k.toLocaleString('en-IN')}</span>
      </div>
      <div className="rate-item">
        <span className="rate-label">GOLD RATE 18k (1gm):</span>
        <span className="rate-val">₹{rates.gold18k.toLocaleString('en-IN')}</span>
      </div>
      <div className="rate-item">
        <span className="rate-label">SILVER RATE (1gm):</span>
        <span className="rate-val">₹{rates.silver.toLocaleString('en-IN')}</span>
      </div>
      <div className="rate-item">
        <span className="rate-label">PLATINUM (1gm):</span>
        <span className="rate-val">₹{rates.platinum.toLocaleString('en-IN')}</span>
      </div>
      <div className="updated-time-badge">
        Last updated Time: <strong>{rates.lastUpdated}</strong>
      </div>
    </>
  );

  return (
    <div className="App">
      
      {/* 1. RATE BOARD BANNER */}
      <div id="rates" className="rate-board-container">
        <div className="rate-board-wrapper">
          <div className="rates-row">
            <div className="rates-content">
              {renderRateItems()}
            </div>
            {/* Duplicated for seamless mobile marquee */}
            <div className="rates-content duplicate-content">
              {renderRateItems()}
            </div>
          </div>
          <button 
            className="rate-history-btn"
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/rate-history');
            }}
          >
            RATE HISTORY
          </button>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="main-header">
        {/* Top Utility Bar */}
        <div className="top-utility-bar">
          <div className="utility-left">
            <button onClick={() => navigate('/contact-us')} className="utility-link bold-link">CONTACT US</button>
            <span style={{ color: '#ccc', margin: '0 8px' }}>|</span>
            <button onClick={() => navigate('/enquiry-form')} className="utility-link bold-link">ENQUIRY FORM</button>
            <button onClick={() => navigate('/store-locator')} className="utility-link bold-link" style={{ marginLeft: '12px' }}>STORE LOCATOR</button>
          </div>
          <div className="utility-right">
            <button onClick={() => navigate('/create-account')} className="utility-link bold-link">CREATE AN ACCOUNT</button>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="navbar-new">
          <div className="navbar-left">
            <svg 
              className="mobile-hamburger-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <img 
              src="/image/logo.png" 
              alt="Jewel Logo" 
              className="jewel-logo-img" 
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer' }}
            />
          </div>

          <div className="navbar-center">
            <div className="search-bar-container" style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                className={`search-input ${isMobileSearchOpen ? 'mobile-active' : ''}`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(e.target.value.length > 0);
                }}
                onFocus={() => {
                  if (searchQuery.length > 0) setShowSearchResults(true);
                }}
                onBlur={() => setShowSearchResults(false)}
              />
              <svg 
                className="search-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
              {showSearchResults && (
                <div className="search-results-dropdown" style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  width: '100%',
                  minWidth: isMobileSearchOpen ? '250px' : 'auto',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  borderRadius: '4px',
                  marginTop: '8px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  zIndex: 1001,
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                      <div 
                        key={product.id}
                        onMouseDown={(e) => {
                          // Prevent input blur before click registers
                          e.preventDefault();
                          setShowSearchResults(false);
                          setSearchQuery('');
                          setIsMobileSearchOpen(false);
                          navigate(`/product/${product.id}`, { state: { product } });
                        }}
                        className="search-result-item"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          padding: '10px',
                          borderBottom: '1px solid #eee',
                          cursor: 'pointer',
                          gap: '12px',
                          textDecoration: 'none'
                        }}
                      >
                        <img src={`/image/${product.image}`} alt={product.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '0.9rem', color: '#333', fontWeight: '500' }}>{product.title}</span>
                          <span style={{ fontSize: '0.85rem', color: 'var(--primary-color)' }}>{product.price}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ padding: '15px', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="navbar-right">
            <div className="contact-phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="phone-details">
                <span className="phone-number">+1234 567 8900</span>
                <span className="phone-hours">10AM to 6PM IST</span>
              </div>
            </div>

            {user?.isLoggedIn ? (
              <button className="nav-action-item" onClick={() => navigate('/profile')}>
                <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="8.5" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="17 11 19 13 23 9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Profile</span>
              </button>
            ) : (
              <button className="nav-action-item" onClick={() => navigate('/login')}>
                <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Login</span>
              </button>
            )}

            <button className="nav-action-item" onClick={() => navigate('/wishlist')}>
              <div style={{ position: 'relative', display: 'inline-flex' }}>
                <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="cart-badge-count">{wishlistItemsCount}</span>
              </div>
              <span>Wishlist</span>
            </button>

            <div className="cart-dropdown-container">
              <button className="nav-action-item" onClick={() => setIsCartOpen(!isCartOpen)}>
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="cart-badge-count">{cartItemsCount}</span>
                </div>
                <span>Cart</span>
              </button>

              {isCartOpen && (
                <div className="mini-cart-dropdown">
                  <div className="mini-cart-header">
                    <span className="mini-cart-count">{cartItemsCount} ITEM{cartItemsCount !== 1 && 'S'}</span>
                    <button 
                      className="mini-cart-view-btn" 
                      onClick={() => {
                        navigate('/cart');
                        setIsCartOpen(false);
                      }}
                    >
                      View Cart
                    </button>
                  </div>
                  <div className="mini-cart-body">
                    {cartItemsCount === 0 ? (
                      <p>You have no items in your shopping cart.</p>
                    ) : (
                      <p>You have {cartItemsCount} item{cartItemsCount !== 1 && 's'} in your cart.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Categories Navbar */}
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="layout-content">
        {children}
      </main>

      {/* 6. FOOTER */}
      {pathname !== '/about-us' && pathname !== '/corporate-governance' && <Footer scrollToSection={scrollToSection} />}

      {/* 8. RATE HISTORY MODAL */}
      {isHistoryOpen && (
        <div className="modal-overlay" onClick={() => setIsHistoryOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header">
              <h2 className="modal-title">Live Rate Trends & History</h2>
              <button 
                className="modal-close-btn"
                onClick={() => setIsHistoryOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--primary-color)', fontWeight: 700 }}>
                Last updated Time: <strong style={{ color: '#333' }}>{rates.lastUpdated}</strong>
              </div>
              
              {/* Tab Selector */}
              <div className="modal-tabs">
                <button 
                  className={`modal-tab-btn ${activeTab === 'gold22k' ? 'active' : ''}`}
                  onClick={() => setActiveTab('gold22k')}
                >
                  Gold 22K
                </button>
                <button 
                  className={`modal-tab-btn ${activeTab === 'gold24k' ? 'active' : ''}`}
                  onClick={() => setActiveTab('gold24k')}
                >
                  Gold 24K
                </button>
                <button 
                  className={`modal-tab-btn ${activeTab === 'gold18k' ? 'active' : ''}`}
                  onClick={() => setActiveTab('gold18k')}
                >
                  Gold 18K
                </button>
                <button 
                  className={`modal-tab-btn ${activeTab === 'silver' ? 'active' : ''}`}
                  onClick={() => setActiveTab('silver')}
                >
                  Silver
                </button>
                <button 
                  className={`modal-tab-btn ${activeTab === 'platinum' ? 'active' : ''}`}
                  onClick={() => setActiveTab('platinum')}
                >
                  Platinum
                </button>
              </div>

              {/* Chart Visualizer */}
              <div className="chart-section">
                <h3 className="chart-title">7-Day Trend Chart</h3>
                
                <div className="chart-svg-container">
                  {renderChart()}

                  {/* SVG Tooltip */}
                  {hoveredPoint && (
                    <div 
                      className="chart-tooltip-bubble"
                      style={{ 
                        left: `${(hoveredPoint.x / 560) * 100}%`, 
                        top: `${(hoveredPoint.y / 180) * 100}%` 
                      }}
                    >
                      <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>{hoveredPoint.date}</span>
                      <span>₹{hoveredPoint.rate.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>
                
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
                  💡 Hover over trend nodes to see details. Trends generated relative to current live values.
                </p>
              </div>

              {/* History Table */}
              <div className="table-section">
                <h3 className="table-title">Daily Rates Log</h3>
                <div className="history-table-wrapper">
                  <table className="history-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Rate (per 1gm)</th>
                        <th>Daily Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historyData.slice().reverse().map((d, index) => (
                        <tr key={index}>
                          <td style={{ fontWeight: 600 }}>{d.date}</td>
                          <td style={{ fontWeight: 700, color: 'var(--primary-color)' }}>
                            ₹{d.rate.toLocaleString('en-IN')}
                          </td>
                          <td>
                            {d.change === 0 ? (
                              <span style={{ color: 'var(--text-muted)' }}>-</span>
                            ) : d.change > 0 ? (
                              <span className="trend-up">▲ +₹{d.change.toLocaleString('en-IN')}</span>
                            ) : (
                              <span className="trend-down">▼ -₹{Math.abs(d.change).toLocaleString('en-IN')}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Layout;
