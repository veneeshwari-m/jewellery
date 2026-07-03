import React from 'react';
import './Footer.css';

function Footer({ scrollToSection }) {
  return (
    <footer id="footer" className="footer-new">
      <div className="footer-new-content">
        {/* Col 1 */}
        <div className="footer-new-col">
          <h4 className="footer-new-title">Corporate Info</h4>
          <ul className="footer-new-links">
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">About Thangam</button></li>
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Corporate Governanace</button></li>
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">News and Media</button></li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="footer-new-col">
          <h4 className="footer-new-title">Let us help you</h4>
          <ul className="footer-new-links">
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">FAQ</button></li>
            <li><a href="/contact-us" className="footer-new-link">Contact Us</a></li>
            <li><a href="/enquiry-form" className="footer-new-link">Enquiry Form</a></li>
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Bangle size Guide</button></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="footer-new-col">
          <h4 className="footer-new-title">Policies</h4>
          <ul className="footer-new-links">
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Returnd & Exchnge</button></li>
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Lifetime Exchange</button></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div className="footer-new-col">
          <h4 className="footer-new-title">Information</h4>
          <ul className="footer-new-links">
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Disclamire</button></li>
            <li><button onClick={() => scrollToSection('hero')} className="footer-new-link">Terms & Condition</button></li>
          </ul>
        </div>

        {/* Col 5 */}
        <div className="footer-new-col">
          <h4 className="footer-new-title">Contact Us</h4>
          <div className="footer-new-contact-info">
            <span className="footer-new-contact-val">+91 12345 67890</span>
            <span className="footer-new-contact-val">+0123 456 7890</span>
          </div>
        </div>

        {/* Col 6 */}
        <div className="footer-new-col footer-new-newsletter-col">
          <h4 className="footer-new-title">Be the first know</h4>
          <p className="footer-new-newsletter-text">
            Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.
          </p>
          <span className="footer-new-subscribe-label">Subscribe</span>
          
          {/* Email Pill Input */}
          <div className="footer-new-subscribe-pill">
            <input type="email" placeholder="Enter your email id" className="footer-new-subscribe-input" />
            <button className="footer-new-subscribe-btn">SUBSCRIBE</button>
          </div>

          {/* Download App block */}
          <div className="footer-new-download-app-block">
            <span className="footer-new-download-text">Download App</span>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="footer-new-badge-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="footer-new-badge-img" />
            </a>
          </div>
        </div>
      </div>

      {/* Separating Border Line */}
      <div className="footer-new-separator"></div>

      {/* Bottom utility row */}
      <div className="footer-new-bottom">
        <p className="footer-new-copy">
          © 2026 Thangam All rights reserved.
        </p>

        <div className="footer-new-followus-container">
          <span className="footer-new-followus-text">Follows Us</span>
          <div className="footer-new-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn fb-icon">
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn ig-icon">
              <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        <button className="footer-new-scrolltop-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg className="scrolltop-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
