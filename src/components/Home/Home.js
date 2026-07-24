import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsSimOpen, setIsHistoryOpen, setActiveTab, setHoveredPoint } from '../../store/uiSlice';
import { setRates } from '../../store/ratesSlice';
import './Home.css';

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


function Home() {
  // Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rates = useSelector((state) => state.rates);
  const { isSimOpen, isHistoryOpen, activeTab, hoveredPoint } = useSelector((state) => state.ui);

  // Auto-scroll to sections helper
  const scrollToSection = (id) => {
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
              onMouseEnter={() => dispatch(setHoveredPoint(p))}
              onMouseLeave={() => dispatch(setHoveredPoint(null))}
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

  return (
    <div className="App">

      {/* 3. HERO SECTION (Full-width Promotional Banner) */}
      <header id="hero" className="hero-banner-section" onClick={() => scrollToSection('calculator')}>
        <img
          src="/image/hero_banner.png"
          alt="Big Box Big Savings Offer Banner"
          className="hero-banner-image"
        />
      </header>

      {/* 4. BRAND FEATURES SECTION */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-scroll-track">
            <div className="feature-item">
              <img src="/image/page-2.1.png" alt="Listed Company" className="feature-icon-img" />
              <span className="feature-text">Listed Company</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.2.png" alt="Best Price" className="feature-icon-img" />
              <span className="feature-text">Best Price</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.3.png" alt="Secure Retail" className="feature-icon-img" />
              <span className="feature-text">Secure Retail</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.4.png" alt="100% Refund" className="feature-icon-img" />
              <span className="feature-text">100% Refund</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.5.png" alt="15 Days Return" className="feature-icon-img" />
              <span className="feature-text">15 Days Return</span>
            </div>
          </div>
          {/* Duplicated for seamless mobile marquee */}
          <div className="features-scroll-track duplicate-features">
            <div className="feature-item">
              <img src="/image/page-2.1.png" alt="Listed Company" className="feature-icon-img" />
              <span className="feature-text">Listed Company</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.2.png" alt="Best Price" className="feature-icon-img" />
              <span className="feature-text">Best Price</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.3.png" alt="Secure Retail" className="feature-icon-img" />
              <span className="feature-text">Secure Retail</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.4.png" alt="100% Refund" className="feature-icon-img" />
              <span className="feature-text">100% Refund</span>
            </div>
            <div className="feature-item">
              <img src="/image/page-2.5.png" alt="15 Days Return" className="feature-icon-img" />
              <span className="feature-text">15 Days Return</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SECTION */}
      <section id="collections" className="section-container">
        <div className="section-header-left">
          <h2 className="section-title-left">FEATURED PRODUCT</h2>
        </div>

        <div className="featured-products-grid">
          <div className="featured-product-card" onClick={() => { window.scrollTo(0, 0); navigate('/product/feat-1', { state: { product: { id: 'feat-1', title: 'Featured Gold Bangle', image: 'page-3.1.jpg', price: '₹ 57,994.15' } } }); }}>
            <div className="product-image-container">
              <img src="/image/page-3.1.jpg" alt="Featured Gold Bangle" className="product-image" />
            </div>
            <div className="product-info">
              <span className="product-weight">Weight: 3.13 gm</span>
              <span className="product-price">₹ 57,994.15</span>
            </div>
          </div>

          <div className="featured-product-card" onClick={() => { window.scrollTo(0, 0); navigate('/product/feat-2', { state: { product: { id: 'feat-2', title: 'Featured Solitaire Ring', image: 'page-3.2.jpg', price: '₹ 81,351.46' } } }); }}>
            <div className="product-image-container">
              <img src="/image/page-3.2.jpg" alt="Featured Solitaire Ring" className="product-image" />
            </div>
            <div className="product-info">
              <span className="product-weight">Weight: 4.75 gm</span>
              <span className="product-price">₹ 81,351.46</span>
            </div>
          </div>

          <div className="featured-product-card" onClick={() => { window.scrollTo(0, 0); navigate('/product/feat-3', { state: { product: { id: 'feat-3', title: 'Featured Gold Earrings', image: 'page-3.3.jpg', price: '₹ 51,163.20' } } }); }}>
            <div className="product-image-container">
              <img src="/image/page-3.3.jpg" alt="Featured Gold Earrings" className="product-image" />
            </div>
            <div className="product-info">
              <span className="product-weight">Weight: 3.07 gm</span>
              <span className="product-price">₹ 51,163.20</span>
            </div>
          </div>

          <div className="featured-product-card" onClick={() => { window.scrollTo(0, 0); navigate('/product/feat-4', { state: { product: { id: 'feat-4', title: 'Featured Gold Pendant', image: 'page-3.4.jpg', price: '₹ 45,890.62' } } }); }}>
            <div className="product-image-container">
              <img src="/image/page-3.4.jpg" alt="Featured Gold Pendant" className="product-image" />
            </div>
            <div className="product-info">
              <span className="product-weight">Weight: 2.47 gm</span>
              <span className="product-price">₹ 45,890.62</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SHOP BY CATEGORY SECTION */}
      <section id="categories" className="categories-section">
        <div className="categories-container">
          <div className="section-header-center">
            <span className="line"></span>
            <h2 className="section-title-center">SHOP BY CATEGORY</h2>
            <span className="line"></span>
          </div>

          <div className="categories-grid">
            <div className="category-card" onClick={() => { window.scrollTo(0, 0); navigate('/category/gold-jewellery', { state: { subcategory: 'Gold Earrings' } }); }}>
              <img src="/image/page-4.1.png" alt="GOLD BANGLES" className="category-image" />
            </div>
            <div className="category-card" onClick={() => { window.scrollTo(0, 0); navigate('/category/gold-jewellery', { state: { subcategory: 'Gold Malai' } }); }}>
              <img src="/image/page-4.2.jpg" alt="GOLD MALAI" className="category-image" />
            </div>
            <div className="category-card" onClick={() => { window.scrollTo(0, 0); navigate('/category/gold-jewellery', { state: { subcategory: 'Gold Necklace' } }); }}>
              <img src="/image/page-4.3.png" alt="GOLD NECKLACE" className="category-image" />
            </div>
            <div className="category-card" onClick={() => { window.scrollTo(0, 0); navigate('/category/gold-jewellery', { state: { subcategory: 'Gold Bangles' } }); }}>
              <img src="/image/page-4.4.png" alt="GOLD EARINGS" className="category-image" />
            </div>
            <div className="category-card" onClick={() => { window.scrollTo(0, 0); navigate('/category/gold-jewellery', { state: { subcategory: 'Gold Pendant' } }); }}>
              <img src="/image/page-5.1.jpg" alt="GOLD PENDANT" className="category-image" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. JUST ARRIVED SECTION */}
      <section id="just-arrived" className="section-container">
        <div className="section-header-left">
          <h2 className="section-title-left">JUST ARRIVED</h2>
        </div>

        <div className="just-arrived-grid">
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.1.jpg" alt="Just Arrived Jhumka 1" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.2.jpg" alt="Just Arrived Jhumka 2" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.3.jpg" alt="Just Arrived Jhumka 3" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.4.jpg" alt="Just Arrived Jhumka 4" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.5.jpg" alt="Just Arrived Jhumka 5" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.6.jpg" alt="Just Arrived Jhumka 6" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.7.jpg" alt="Just Arrived Jhumka 7" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.8.jpg" alt="Just Arrived Jhumka 8" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.9.jpg" alt="Just Arrived Jhumka 9" className="just-arrived-image" />
          </div>
          <div className="just-arrived-card" onClick={() => scrollToSection('calculator')}>
            <img src="/image/page-5.10.jpg" alt="Just Arrived Jhumka 10" className="just-arrived-image" />
          </div>
        </div>
      </section>

      {/* 8. PRODUCT GROUPS SECTION (Best Sellers, Top Rated, Featured) */}
      <section id="product-groups" className="section-container">
        <div className="product-groups-container">
          <div className="groups-header-row">
            <div className="group-header-col">
              <h3 className="group-header-title">BEST SELLING PRODUCT</h3>
            </div>
            <div className="group-header-col">
              <h3 className="group-header-title">TOP RATED PRODUCTS</h3>
            </div>
            <div className="group-header-col">
              <h3 className="group-header-title">FEATURED PRODUCT</h3>
            </div>
          </div>

          <div className="groups-content-grid">
            {/* Column 1: Best Selling */}
            <div className="group-column" data-title="BEST SELLING PRODUCT">
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.1.1.png" alt="Best Seller 1" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 1 gm</span>
                  <span className="group-item-price">₹ 16,633.47</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.2.1.png" alt="Best Seller 2" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 10 gm</span>
                  <span className="group-item-price">₹ 166,335.73</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.3.1.png" alt="Best Seller 3" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 2 gm</span>
                  <span className="group-item-price">₹ 33,266.94</span>
                </div>
              </div>
            </div>

            {/* Column 2: Top Rated */}
            <div className="group-column" data-title="TOP RATED PRODUCTS">
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.1.2.png" alt="Top Rated 1" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-price">₹ 57,994.15</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.2.2.jpg" alt="Top Rated 2" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-price">₹ 57,994.15</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.3.2.jpg" alt="Top Rated 3" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-price">₹ 57,994.15</span>
                </div>
              </div>
            </div>

            {/* Column 3: Featured */}
            <div className="group-column" data-title="FEATURED PRODUCT">
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.1.3.jpg" alt="Featured Col 1" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 1 gm</span>
                  <span className="group-item-price">₹ 16,633.47</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.2.3.jpg" alt="Featured Col 2" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 1 gm</span>
                  <span className="group-item-price">₹ 16,633.47</span>
                </div>
              </div>
              <div className="group-row-item" onClick={() => scrollToSection('calculator')}>
                <img src="/image/page-6.3.3.png" alt="Featured Col 3" className="group-item-img" />
                <div className="group-item-details">
                  <span className="group-item-weight">Weight: 1 gm</span>
                  <span className="group-item-price">₹ 16,633.47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SAVINGS SCHEMES SECTION */}
      <section id="schemes" className="section-container">
        <div className="section-header-left">
          <h2 className="section-title-left">CHOOSE FROM OUR BEST SAVINGS SCHEMES</h2>
        </div>

        <div className="schemes-grid">
          {/* Scheme 1 */}
          <div className="scheme-column">
            <div className="scheme-img-container">
              <img src="/image/page-7.1.png" alt="Super Gold Saving Scheme" className="scheme-main-img" />
            </div>
            <div className="scheme-details">
              <h4 className="scheme-subtitle">SUPER GOLD SAVING SCHEME</h4>
              <p className="scheme-desc">
                The Super Gold Scheme builds your gold assets at regular <button onClick={() => scrollToSection('calculator')} className="scheme-readmore">Read more</button>
              </p>
              <div className="scheme-buttons">
                <button className="scheme-btn-primary" onClick={() => scrollToSection('calculator')}>QUICKJOIN</button>
                <button className="scheme-btn-primary" onClick={() => scrollToSection('calculator')}>QUICKPAY</button>
              </div>
            </div>
          </div>

          {/* Scheme 2 */}
          <div className="scheme-column">
            <div className="scheme-img-container">
              <img src="/image/r-logo.png" alt="Digi Gold Saving Scheme" className="scheme-main-img" />
            </div>
            <div className="scheme-details">
              <h4 className="scheme-subtitle">DIGI GOLD SAVING SCHEME</h4>
              <p className="scheme-desc">
                The Digi Gold Scheme builds your gold assets at regular <button onClick={() => scrollToSection('calculator')} className="scheme-readmore">Read more</button>
              </p>
              <div className="scheme-badges">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="scheme-badge-img" />
                </a>
                <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="scheme-badge-img" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION (What People Are Saying) */}
      <section id="testimonials" className="section-container">
        <div className="section-header-left">
          <h2 className="section-title-left">WHAT PEOPLE ARE SAYING</h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/image/l-review.png" alt="What People Are Saying - Review 1" className="testimonial-img" />
          </div>
          <div className="testimonial-card">
            <img src="/image/r-review.png" alt="What People Are Saying - Review 2" className="testimonial-img" />
          </div>
        </div>
      </section>

      {/* 7. LIVE RATES SIMULATOR PANEL */}
      <button
        className="simulator-trigger"
        onClick={() => dispatch(setIsSimOpen(!isSimOpen))}
      >
        <span>⚙</span> Live Rates Panel
      </button>

      {isSimOpen && (
        <div className="simulator-panel">
          <div className="simulator-header">
            <span className="simulator-title">Rates Simulator</span>
            <button style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }} onClick={() => dispatch(setIsSimOpen(false))}>×</button>
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Gold 22k (₹)</label>
            <input
              type="number"
              className="simulator-input"
              value={rates.gold22k}
              onChange={(e) => dispatch(setRates({ ...rates, gold22k: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Gold 24k (₹)</label>
            <input
              type="number"
              className="simulator-input"
              value={rates.gold24k}
              onChange={(e) => dispatch(setRates({ ...rates, gold24k: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Gold 18k (₹)</label>
            <input
              type="number"
              className="simulator-input"
              value={rates.gold18k}
              onChange={(e) => dispatch(setRates({ ...rates, gold18k: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Silver (₹)</label>
            <input
              type="number"
              className="simulator-input"
              value={rates.silver}
              onChange={(e) => dispatch(setRates({ ...rates, silver: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Platinum (₹)</label>
            <input
              type="number"
              className="simulator-input"
              value={rates.platinum}
              onChange={(e) => dispatch(setRates({ ...rates, platinum: parseInt(e.target.value) || 0 }))}
            />
          </div>

          <div className="simulator-row">
            <label className="simulator-label">Last Updated</label>
            <input
              type="text"
              className="simulator-input"
              style={{ width: '150px' }}
              value={rates.lastUpdated}
              onChange={(e) => dispatch(setRates({ ...rates, lastUpdated: e.target.value }))}
            />
          </div>

          <button
            className="simulator-reset-btn"
            onClick={() => dispatch(setRates(DEFAULT_RATES))}
          >
            Reset to Reference Screenshot Rates
          </button>
        </div>
      )}

      {/* 8. RATE HISTORY MODAL */}
      {isHistoryOpen && (
        <div className="modal-overlay" onClick={() => dispatch(setIsHistoryOpen(false))}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <div className="modal-header">
              <h2 className="modal-title">Live Rate Trends & History</h2>
              <button
                className="modal-close-btn"
                onClick={() => dispatch(setIsHistoryOpen(false))}
              >
                ×
              </button>
            </div>

            <div className="modal-body">
              {/* Tab Selector */}
              <div className="modal-tabs">
                <button
                  className={`modal-tab-btn ${activeTab === 'gold22k' ? 'active' : ''}`}
                  onClick={() => dispatch(setActiveTab('gold22k'))}
                >
                  Gold 22K
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === 'gold24k' ? 'active' : ''}`}
                  onClick={() => dispatch(setActiveTab('gold24k'))}
                >
                  Gold 24K
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === 'gold18k' ? 'active' : ''}`}
                  onClick={() => dispatch(setActiveTab('gold18k'))}
                >
                  Gold 18K
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === 'silver' ? 'active' : ''}`}
                  onClick={() => dispatch(setActiveTab('silver'))}
                >
                  Silver
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === 'platinum' ? 'active' : ''}`}
                  onClick={() => dispatch(setActiveTab('platinum'))}
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

export default Home;
