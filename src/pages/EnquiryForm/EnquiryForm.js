import React from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        
        <div className="contact-grid">
          {/* Left Column */}
          <div className="contact-column">
            <h2 className="contact-title">Enquiry <strong>Form</strong></h2>
            
            <div className="input-group">
              <label>Name <span className="required">*</span></label>
              <input type="text" className="form-input" />
            </div>

            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" className="form-input active-input" />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" className="form-input" />
            </div>

            <div className="input-group">
              <select className="form-input select-input">
                <option value="">Select Category</option>
                <option value="online-shopping">Online shopping</option>
                <option value="online-scheme-purchase">Online scheme purchase</option>
                <option value="online-digigold-closure-purchase">Online digigold closure/purchase</option>
                <option value="corporate-gifts">Corporate Gifts</option>
                <option value="easy-money">Easy Money</option>
                <option value="about-digigold-scheme">About Digigold Scheme</option>
                <option value="about-jewellery-savings-scheme">About Jewellery savings scheme</option>
                <option value="feedback-appreciation">Feedback/appreciation</option>
                <option value="product-enquiry">Product Enquiry</option>
                <option value="others">Others</option>
              </select>
            </div>

            <button className="submit-btn">SUBMIT</button>
          </div>

          {/* Middle Column */}
          <div className="contact-column middle-column">
            <div className="input-group textarea-group">
              <label>What's on your mind? <span className="required">*</span></label>
              <textarea className="form-input" rows="8"></textarea>
            </div>

            <div className="input-group file-group">
              <label>Attachments <span className="required">*</span></label>
              <div className="file-input-wrapper">
                <input type="file" id="attachment" className="file-input" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="contact-column right-column">
            <h2 className="contact-title">Contact <strong>Details</strong></h2>
            
            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <div className="primary-text">+1800 889 7080</div>
                <div className="secondary-text">10AM to 6PM IST</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-text">
                <div className="primary-text">shop@Thangam.com</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EnquiryForm;
