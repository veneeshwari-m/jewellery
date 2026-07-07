import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BangleSizeGuide.css';

const BangleSizeGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="bangle-size-page">
      <div className="bangle-size-container">
        
        <h1 className="bangle-size-title">BANGLE SIZE GUIDE</h1>
        
        <div className="faq-breadcrumb">
          <svg 
            className="breadcrumb-home-icon" 
            onClick={() => { navigate('/'); window.scrollTo(0,0); }} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ cursor: 'pointer' }}
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="breadcrumb-separator">&gt;</span>
        </div>

        <a 
          href="/bangle-size-guide.pdf" 
          download="Bangle_Size_Guide.pdf" 
          className="download-pdf-btn"
          style={{ display: 'inline-block', textDecoration: 'none' }}
        >
          Download as PDF
        </a>

        <div className="bangle-guide-content">
          <div className="bangle-guide-header-line"></div>
          
          <div className="bangle-guide-logo-area">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Thangamayil_Jewellery_Limited_Logo.png" 
              alt="Thangamayil Logo" 
              className="bangle-guide-logo" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x80?text=THANGAMAYIL";
              }}
            />
          </div>

          <div className="bangle-guide-yellow-banner">
            <h2>How to determine your Bangle Size?</h2>
          </div>
          
          {/* Instructions Section */}
          <div className="bangle-instructions-container">
            <div className="bangle-circle-diagram">
              <div className="bangle-circle">
                <span className="bangle-inner-text">Bangle Inner Size</span>
                <div className="bangle-arrow"></div>
              </div>
            </div>
            
            <div className="bangle-instructions-list">
              <ol>
                <li>Take a Bangle that fits you perfectly.</li>
                <li>Place a ruler horizontally across its centre and note the reading where the two ends of the inner circle touch the ruler, to get the exact measurement of the diameter in inches.</li>
                <li>Look up the 1st Ruler measurement ( from inches 2 to 3) to identify the decimal points (eg. 2.5, 2.6, 2.7etc) of your bangle size.</li>
              </ol>
            </div>
          </div>

          {/* Ruler Section */}
          <div className="bangle-ruler-section">
            <img 
              src="/image/ruler-measurement-1.png" 
              alt="Ruler Measurement Step 1" 
              className="bangle-ruler-image"
            />
          </div>

          <div className="bangle-ruler-section" style={{ marginTop: '2rem' }}>
            <img 
              src="/image/ruler-measurement-2.png" 
              alt="Ruler Measurement Step 2" 
              className="bangle-ruler-image"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BangleSizeGuide;
