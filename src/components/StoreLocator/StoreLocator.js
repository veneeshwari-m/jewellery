import React from 'react';
import '../Home/Home.css';
import '../FAQ/FAQ.css';
import './StoreLocator.css';

function StoreLocator() {
  return (
    <div className="store-locator-main">
      <h1 className="store-locator-title">Stores Locator</h1>
      
      <div className="store-locator-card">
        <h2 className="store-card-title">Reach Your Nearest Store</h2>
        <p className="store-card-desc">Save your time by getting access to the nearest store</p>
        
        <div className="store-dropdown-container">
          <select className="store-dropdown" defaultValue="">
            <option value="" disabled>CHOOSE A STORE</option>
            <option value="Chennai - Pallavaram">Chennai - Pallavaram</option>
            <option value="Chennai - Neelangarai">Chennai - Neelangarai</option>
            <option value="Chengalpattu">Chengalpattu</option>
            <option value="Chennai - Avadi">Chennai - Avadi</option>
            <option value="Chennai - Keelkattalai">Chennai - Keelkattalai</option>
            <option value="Paramakudi">Paramakudi</option>
            <option value="PERAMBALUR">PERAMBALUR</option>
            <option value="Madurai - BB Kulam">Madurai - BB Kulam</option>
            <option value="Chennai - Gowrivakkam">Chennai - Gowrivakkam</option>
            <option value="Chennai - Urapakkam">Chennai - Urapakkam</option>
            <option value="Chennai - Iyyappanthangal">Chennai - Iyyappanthangal</option>
            <option value="Chennai - Virugambakkam">Chennai - Virugambakkam</option>
            <option value="Silver Smile">Silver Smile</option>
            <option value="Puliyangudi">Puliyangudi</option>
            <option value="Chennai - TNagar">Chennai - TNagar</option>
            <option value="Coimbatore - Kuniyamuthur">Coimbatore - Kuniyamuthur</option>
            <option value="Mayiladuthurai">Mayiladuthurai</option>
            <option value="Rameswaram">Rameswaram</option>
            <option value="Melur">Melur</option>
          </select>
          <div className="store-dropdown-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        
        <p className="store-count-text">67 STORES</p>

        <div className="store-map-container" style={{ marginTop: '30px', width: '100%' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.17646537759!2d78.0827218!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0x559475fc19bea4dc!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717906950000!5m2!1sen!2sin" 
            width="100%" 
            height="500" 
            style={{ border: 0, borderRadius: '8px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Madurai Store Locations"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
