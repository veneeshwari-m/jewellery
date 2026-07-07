import React, { useEffect } from 'react';
import './RateHistory.css';

const RateHistory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rate-history-page">
      <div className="rh-header-banner">
        <h1 className="rh-title">Rates History</h1>
      </div>
      
      <div className="rh-content">
        <div className="rh-card">
          <div className="rh-last-updated">
            Last updated Time: <strong>06/05/26 3:54 PM</strong>
          </div>
          
          <div className="rh-grid">
            <div className="rh-item">
              <span className="rh-rate">₹10653</span>
              <span className="rh-label">Gold 18K</span>
            </div>
            
            <div className="rh-item">
              <span className="rh-rate">₹10653</span>
              <span className="rh-label">Gold 22K</span>
            </div>
            
            <div className="rh-item">
              <span className="rh-rate">₹14204</span>
              <span className="rh-label">Gold 24K</span>
            </div>
            
            <div className="rh-item">
              <span className="rh-rate">₹245.00</span>
              <span className="rh-label">Silver</span>
            </div>
            
            <div className="rh-item">
              <span className="rh-rate">₹6402</span>
              <span className="rh-label">Platinum</span>
            </div>
          </div>
        </div>
        
        {/* Graph Section */}
        <div className="rh-graph-section">
          <h2 className="rh-graph-title">Gold Rate Graph</h2>
          <p className="rh-graph-subtitle">Rs./gram-22Karat</p>
          
          <div className="rh-svg-container">
            <span className="rh-y-label">PRICES IN RS PER GRAM</span>
            
            <svg viewBox="0 0 800 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Horizontal Grid Lines */}
              <line x1="0" y1="0" x2="800" y2="0" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="50" x2="800" y2="50" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="250" x2="800" y2="250" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="300" x2="800" y2="300" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="350" x2="800" y2="350" stroke="#ccc" strokeWidth="1" />
              <line x1="0" y1="400" x2="800" y2="400" stroke="#ccc" strokeWidth="1" />
              
              {/* Vertical Grid Lines */}
              <line x1="0" y1="0" x2="0" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="88.8" y1="0" x2="88.8" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="177.7" y1="0" x2="177.7" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="266.6" y1="0" x2="266.6" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="355.5" y1="0" x2="355.5" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="444.4" y1="0" x2="444.4" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="533.3" y1="0" x2="533.3" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="622.2" y1="0" x2="622.2" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="711.1" y1="0" x2="711.1" y2="400" stroke="#ccc" strokeWidth="1" />
              <line x1="800" y1="0" x2="800" y2="400" stroke="#ccc" strokeWidth="1" />
              
              {/* Y Axis Labels (Mapped to Grid lines) */}
              <text x="-15" y="5" fontSize="10" fill="#555" textAnchor="end">13200</text>
              <text x="-15" y="55" fontSize="10" fill="#555" textAnchor="end">13150</text>
              <text x="-15" y="105" fontSize="10" fill="#555" textAnchor="end">13100</text>
              <text x="-15" y="155" fontSize="10" fill="#555" textAnchor="end">13050</text>
              <text x="-15" y="205" fontSize="10" fill="#555" textAnchor="end">13000</text>
              <text x="-15" y="255" fontSize="10" fill="#555" textAnchor="end">12950</text>
              <text x="-15" y="305" fontSize="10" fill="#555" textAnchor="end">12900</text>
              <text x="-15" y="355" fontSize="10" fill="#555" textAnchor="end">12850</text>
              <text x="-15" y="405" fontSize="10" fill="#555" textAnchor="end">12800</text>

              {/* X Axis Labels */}
              <text x="0" y="420" fontSize="10" fill="#555" textAnchor="middle">25 Jun</text>
              <text x="88.8" y="420" fontSize="10" fill="#555" textAnchor="middle">26 Jun</text>
              <text x="177.7" y="420" fontSize="10" fill="#555" textAnchor="middle">26 Jun</text>
              <text x="266.6" y="420" fontSize="10" fill="#555" textAnchor="middle">26 Jun</text>
              <text x="355.5" y="420" fontSize="10" fill="#555" textAnchor="middle">29 Jun</text>
              <text x="444.4" y="420" fontSize="10" fill="#555" textAnchor="middle">29 Jun</text>
              <text x="533.3" y="420" fontSize="10" fill="#555" textAnchor="middle">29 Jun</text>
              <text x="622.2" y="420" fontSize="10" fill="#555" textAnchor="middle">30 Jun</text>
              <text x="711.1" y="420" fontSize="10" fill="#555" textAnchor="middle">30 Jun</text>
              <text x="800" y="420" fontSize="10" fill="#555" textAnchor="middle">01 Jun</text>

              {/* Data Path */}
              {/* Range: 12800 to 13200 (400 units range mapped to 400px height). 
                  So Y = 400 - (Value - 12800).
                  Data Points roughly:
                  25 Jun: 12950 -> Y = 250
                  26 Jun: 12988 -> Y = 212
                  26 Jun: 13088 -> Y = 112
                  26 Jun: 13090 -> Y = 110
                  29 Jun: 13200 -> Y = 0
                  29 Jun: 13108 -> Y = 92
                  29 Jun: 13008 -> Y = 192
                  30 Jun: 12850 -> Y = 350
                  30 Jun: 13015 -> Y = 185
                  01 Jun: 13015 -> Y = 185
              */}
              <path 
                d="M 0 250 L 88.8 212 L 177.7 112 L 266.6 110 L 355.5 0 L 444.4 92 L 533.3 192 L 622.2 350 L 711.1 185 L 800 185" 
                fill="none" 
                stroke="#99687d" 
                strokeWidth="1" 
              />
              
              {/* Data Nodes */}
              <circle cx="0" cy="250" r="2" fill="#222" />
              <circle cx="88.8" cy="212" r="2" fill="#222" />
              <circle cx="177.7" cy="112" r="2" fill="#222" />
              <circle cx="266.6" cy="110" r="2" fill="#222" />
              <circle cx="355.5" cy="0" r="2" fill="#222" />
              <circle cx="444.4" cy="92" r="2" fill="#222" />
              <circle cx="533.3" cy="192" r="2" fill="#222" />
              <circle cx="622.2" cy="350" r="2" fill="#222" />
              <circle cx="711.1" cy="185" r="2" fill="#222" />
              <circle cx="800" cy="185" r="2" fill="#222" />
            </svg>
            
            <span className="rh-x-label">Days(from last 10 days)</span>
          </div>
        </div>

        {/* Platinum Graph Section */}
        <div className="rh-graph-section">
          <h2 className="rh-graph-title" style={{ marginBottom: '3rem' }}>Platinum Rate Graph</h2>
          
          <div className="rh-svg-container">
            <span className="rh-y-label">PRICES IN RS PER GRAM</span>
            
            <svg viewBox="0 0 800 400" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              {/* Horizontal Grid Lines */}
              <line x1="0" y1="0" x2="800" y2="0" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="40" x2="800" y2="40" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="80" x2="800" y2="80" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="120" x2="800" y2="120" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="160" x2="800" y2="160" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="200" x2="800" y2="200" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="240" x2="800" y2="240" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="280" x2="800" y2="280" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="320" x2="800" y2="320" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="360" x2="800" y2="360" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="0" y1="400" x2="800" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              
              {/* Vertical Grid Lines */}
              <line x1="0" y1="0" x2="0" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="88.8" y1="0" x2="88.8" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="177.7" y1="0" x2="177.7" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="266.6" y1="0" x2="266.6" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="355.5" y1="0" x2="355.5" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="444.4" y1="0" x2="444.4" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="533.3" y1="0" x2="533.3" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="622.2" y1="0" x2="622.2" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="711.1" y1="0" x2="711.1" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              <line x1="800" y1="0" x2="800" y2="400" stroke="#f0f0f0" strokeWidth="1" />
              
              {/* Y Axis Labels (Mapped to Grid lines: 6800 to 6300, 10 steps of 50 = 500 range mapping to 400px height. Wait, steps of 50 are 11 grid lines) */}
              <text x="-15" y="5" fontSize="10" fill="#555" textAnchor="end">6800</text>
              <text x="-15" y="45" fontSize="10" fill="#555" textAnchor="end">6750</text>
              <text x="-15" y="85" fontSize="10" fill="#555" textAnchor="end">6700</text>
              <text x="-15" y="125" fontSize="10" fill="#555" textAnchor="end">6650</text>
              <text x="-15" y="165" fontSize="10" fill="#555" textAnchor="end">6600</text>
              <text x="-15" y="205" fontSize="10" fill="#555" textAnchor="end">6550</text>
              <text x="-15" y="245" fontSize="10" fill="#555" textAnchor="end">6500</text>
              <text x="-15" y="285" fontSize="10" fill="#555" textAnchor="end">6450</text>
              <text x="-15" y="325" fontSize="10" fill="#555" textAnchor="end">6400</text>
              <text x="-15" y="365" fontSize="10" fill="#555" textAnchor="end">6350</text>
              <text x="-15" y="405" fontSize="10" fill="#555" textAnchor="end">6300</text>

              {/* X Axis Labels */}
              <text x="0" y="420" fontSize="10" fill="#555" textAnchor="middle">01 Jul</text>
              <text x="88.8" y="420" fontSize="10" fill="#555" textAnchor="middle">02 Jul</text>
              <text x="177.7" y="420" fontSize="10" fill="#555" textAnchor="middle">02 Jul</text>
              <text x="266.6" y="420" fontSize="10" fill="#555" textAnchor="middle">02 Jul</text>
              <text x="355.5" y="420" fontSize="10" fill="#555" textAnchor="middle">02 Jul</text>
              <text x="444.4" y="420" fontSize="10" fill="#555" textAnchor="middle">03 Jul</text>
              <text x="533.3" y="420" fontSize="10" fill="#555" textAnchor="middle">03 Jul</text>
              <text x="622.2" y="420" fontSize="10" fill="#555" textAnchor="middle">04 Jul</text>
              <text x="711.1" y="420" fontSize="10" fill="#555" textAnchor="middle">04 Jul</text>
              <text x="800" y="420" fontSize="10" fill="#555" textAnchor="middle">06 Jul</text>

              {/* Data Path */}
              <path 
                d="M 0 308 L 88.8 308 L 177.7 360 L 266.6 360 L 355.5 360 L 444.4 360 L 533.3 184 L 622.2 184 L 711.1 72 L 800 88" 
                fill="none" 
                stroke="#310515" 
                strokeWidth="2" 
              />
              
              {/* Data Nodes */}
              <circle cx="0" cy="308" r="4" fill="#310515" />
              <circle cx="88.8" cy="308" r="4" fill="#310515" />
              <circle cx="177.7" cy="360" r="4" fill="#310515" />
              <circle cx="266.6" cy="360" r="4" fill="#310515" />
              <circle cx="355.5" cy="360" r="4" fill="#310515" />
              <circle cx="444.4" cy="360" r="4" fill="#310515" />
              <circle cx="533.3" cy="184" r="4" fill="#310515" />
              <circle cx="622.2" cy="184" r="4" fill="#310515" />
              <circle cx="711.1" cy="72" r="4" fill="#310515" />
              <circle cx="800" cy="88" r="4" fill="#310515" />
            </svg>
            
            <span className="rh-x-label">Days(from last 10 days)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateHistory;
