import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="about-hero-section">
        {/* Custom Header for About Us */}
        <header className="about-header">
          <div className="about-logo">
            {/* Can use an image if available, fallback to text logo */}
            <span className="about-logo-text">
              <span className="logo-icon"></span> Thangam
            </span>
          </div>
          <nav className="about-nav">
            <span className="about-nav-link active">ABOUT US ˅</span>
            <span className="about-nav-link" onClick={() => navigate('/corporate-governance')} style={{cursor: 'pointer'}}>CORPORATE GOVERNANCE ˅</span>
            <span className="about-nav-link">CAREERS</span>
            <span className="about-nav-link">INVESTOR ˅</span>
            <span className="about-nav-link">NEWS & MEDIA ˅</span>
            <span className="about-nav-link">STORES</span>
            <span className="about-nav-link">BLOGS</span>
          </nav>
        </header>

        <div className="about-hero-content">
          <h1 className="about-hero-title">Welcome to Thangam!</h1>
        </div>
      </div>

      {/* Feature Cards Overlapping Banner */}
      <div className="about-feature-cards">
        <div className="about-card">
          <div className="about-card-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="#007bff">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <h3 className="about-card-title">Mission</h3>
          <p className="about-card-desc">The objective of Thangam Jewellery Limited, being in business is to enable creation of wealth to our customers and other stakeholders like shareholders, employees, suppliers, etc.</p>
        </div>
        <div className="about-card">
          <div className="about-card-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="#007bff">
              <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
            </svg>
          </div>
          <h3 className="about-card-title">Vision</h3>
          <p className="about-card-desc">One of the key elements of growth for Thangam is its retail presence in the various tier II and III locations of Tamilnadu. This growth path will be continued in Tamilnadu till a stage where all the potential towns and habitats are covered in the next 3 years.</p>
        </div>
        <div className="about-card">
          <div className="about-card-icon">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="#007bff">
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 3.79c-.18.09-.37.13-.57.13-.2 0-.39-.04-.57-.13l-7.9-3.79C3.21 17.21 3 16.88 3 16.5v-9c0-.38.21-.71.53-.88l7.9-3.79c.35-.17.79-.17 1.14 0l7.9 3.79c.32.17.53.5.53.88v9zm-9-5.18l6.38-3.07L12 5.18 5.62 8.25 12 11.32zM4.5 9.94v5.37l6.75 3.24v-5.54L4.5 9.94zm15 5.37V9.94l-6.75 3.07v5.54l6.75-3.24z"/>
            </svg>
          </div>
          <h3 className="about-card-title">Our History</h3>
          <p className="about-card-desc">From the time of its inception in 2000 as Thangam Jewellery Private Limited, the company grew exponentially to turn out as a public limited company in 2007. It released its equity shares in 2010 which were listed in Bombay Stock Exchange Limited(BSE) and National Stock Exchange Limited(NSE), Mumbai.</p>
        </div>
      </div>

      {/* The Story Section */}
      <div className="about-story-section">
        <h2 className="about-story-main-title">About Thangam</h2>
        <h3 className="about-story-subtitle">The Thangam Story</h3>
        <div className="about-story-content">
          <p>
            <span className="drop-cap">T</span>hangam Jewellery Limited (TMJL), is one of the fastest growing companies in India, positioned in the market as a chain of retail jewellery stores across several districts in Tamil Nadu. South India comprising of 5 states has 40% share of entire India's total gold consumption (WGC).
          </p>
          <p>
            Prior to the formation of Thangam Jewellery Private Limited in the year 2000, business was carried on by the promoters of the company, in the name of "Balu Jewellery", at Madurai. The unique and chequered history of the company began from a mere 10×10 sq. Ft shop. The company primarily deals with four product lines, i.e., Gold, Silver, Diamonds and Platinum; the sale of gold being a predominant source of its income. As a part of the jewellery retail trade, majority of ornaments are bought from various dealers in the states of Andhra Pradesh, Gujarat, Kerala, West Bengal, etc., to be sold through its chain of stores. TMJL has also established a manufacturing unit in Madurai, that employ in-house goldsmiths to craft designer jewellery, which are in vogue with the current trends in the marketplace. The company instituted a number of savings schemes to suit the specific needs of various demographics, distinguishing itself a great deal from the run-of-the-mill business practices in retail jewellery.
          </p>
          <p>
            The flagship store of TMJL is located at Nethaji Road in Madurai. With a total area of 11,880 square feet out of which a sales area of 5,693 square feet. Thangam turned public limited company in 2007. It released its maiden equity shares in 2010 and the shares were listed in Bombay Stock Exchange (BSE) Limited and National Stock Exchange (NSE) Limited.The Company has its presence in Chennai through its Flagship store at T.nagar and stores in Suburbs of Chennai and overall presence in Tamil Nadu all comprising of 65 stores and thereby increasing the stores to foster future growth and development. Today, the company boasts a total operating area of approx. 1,25,000 square feet all over Tamil Nadu. Today Thangam takes pride in having several shareholders including mutual funds like SBI Magnum Children's benefit fund, SBI Conservative hybrid fund, SBI small cap fund, DSP small cap fund in its fold.
          </p>
          <p>
            TMJL had embraced the current trend in e-commerce, securing a foothold in what is now being considered as a modern trend for retail operations, worldwide. A fast, secure and highly accessible web portal now serves as a gateway to the several thousand products being offered at their retail stores, translating the brilliant in-store customer service into an aesthetic and visually-pleasing online user experience. TMJL has adapted itself to the bloom in e-commerce whereby implementing and exhibiting technical feats of a large magnitude, offering customers the ability to purchase jewellery 24×7 online from the comforts of their home.
          </p>
          <p>
            You may be interested in having a glance at our Wikipedia page.
          </p>
          <p>
            Follow us on our <a href="/" style={{color: '#4285f4', textDecoration: 'none'}}>Facebook</a> and <a href="/" style={{color: '#4285f4', textDecoration: 'none'}}>Instagram</a> page for instant updates on events and offers.
          </p>
        </div>
      </div>

      {/* Custom About Us Footer */}
      <footer className="about-custom-footer">
        <div className="about-footer-container">
          <div className="about-footer-col">
            <h4 className="about-footer-title">Contact Us</h4>
            <ul className="about-footer-list">
              <li><span className="footer-icon">📍</span> Palami Center (2nd & 3rd Floor), Near Ramakrishna Mutt, 25/6, New Natham Road, Narayanapuram, Madurai, Tamilnadu 625014</li>
              <li><span className="footer-icon">📞</span> 0452 2565553</li>
              <li><span className="footer-icon">✉️</span> care@thangam.com</li>
            </ul>
          </div>
          
          <div className="about-footer-col">
            <h4 className="about-footer-title">Corporate Info</h4>
            <ul className="about-footer-list">
              <li><a href="/about-us">About Thangam</a></li>
              <li><a href="/corporate-governance">Corporate Governance</a></li>
              <li><a href="/">Investor Relationship</a></li>
              <li><a href="/">Management Team</a></li>
              <li><a href="/news-and-media">News and Media</a></li>
              <li><a href="/">careers</a></li>
            </ul>
          </div>

          <div className="about-footer-col">
            <h4 className="about-footer-title">Policies</h4>
            <ul className="about-footer-list">
              <li><a href="/">Annual General Meeting</a></li>
              <li><a href="/">Share</a></li>
              <li><a href="/">Dividend</a></li>
              <li><a href="/">Our History</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="about-footer-col">
            <h4 className="about-footer-title">Newsletter Sign Up!</h4>
            <div className="about-newsletter">
              <label>Email</label>
              <input type="email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="about-footer-bottom">
          Copyright © 2026
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;

