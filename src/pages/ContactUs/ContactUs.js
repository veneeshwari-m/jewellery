import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/iniyamsi2004@gmail.com", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      setShowPopup(true);
      form.reset();
      
      // Auto close popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
      alert("There was an error submitting your form. Please try again.");
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        
        {/* Success Popup */}
        {showPopup && (
          <div className="contact-popup-overlay">
            <div className="contact-popup">
              <div className="popup-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3>Thank You!</h3>
              <p>Your message has been sent successfully. We will get back to you shortly.</p>
              <button onClick={() => setShowPopup(false)} className="popup-close-btn">Close</button>
            </div>
          </div>
        )}

        <form 
          className="contact-grid" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact from Thangamayil Jewellery Website" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Left Column */}
          <div className="contact-column">
            <h2 className="contact-title">Write <strong>Us</strong></h2>
            
            <div className="input-group">
              <label>Name <span className="required">*</span></label>
              <input type="text" name="name" className="form-input" required />
            </div>

            <div className="input-group">
              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" className="form-input" required />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" className="form-input" />
            </div>

            <div className="input-group">
              <select name="category" className="form-input select-input">
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

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>

          {/* Middle Column */}
          <div className="contact-column middle-column">
            <div className="input-group textarea-group">
              <label>What's on your mind? <span className="required">*</span></label>
              <textarea name="message" className="form-input" rows="8" required></textarea>
            </div>

            <div className="input-group file-group">
              <label>Attachments <span className="required">*</span></label>
              <div className="file-input-wrapper">
                <input type="file" name="attachment" id="attachment" className="file-input" required />
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
                <div className="primary-text">+91 97862 21122</div>
                <div className="secondary-text">10AM to 6PM IST</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-text">
                <div className="primary-text">Jwell@thangam.com</div>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ContactUs;
