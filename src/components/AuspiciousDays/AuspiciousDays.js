import React, { useState } from 'react';
import '../Home/Home.css';
import '../FAQ/FAQ.css';
import './AuspiciousDays.css';
import Footer from '../Footer/Footer';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const auspiciousEvents = [
  {
    title: "Father's Day",
    start: new Date(2026, 5, 21), // 5 = June
    end: new Date(2026, 5, 21),
    allDay: true
  },
  {
    title: "Muharram",
    start: new Date(2026, 5, 26),
    end: new Date(2026, 5, 26),
    allDay: true
  },
  {
    title: "Doctor's Day",
    start: new Date(2026, 6, 1), // 6 = July
    end: new Date(2026, 6, 1),
    allDay: true
  }
];

const listEvents = [
  { date: '1 January 2022', title: 'New Year' },
  { date: '2 January 2022', title: 'Hanuman Jayanthi' },
  { date: '13 January 2022', title: 'Bhogi Pandigai / Vaigunda Ekadhasi' },
  { date: '14 January 2022', title: 'Pongal' },
];

function AuspiciousDays({ onNavigate }) {
  const [viewMode, setViewMode] = useState('Calendar');

  const scrollToSection = (id) => {
    if (id === 'hero' || id === 'collections' || id === 'calculator') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const rates = {
    gold22k: 13645,
    gold24k: 14885,
    gold18k: 11164,
    silver: 260,
    platinum: 7167,
    lastUpdated: '10/06/26 10:23 AM'
  };

  return (
    <div className="App">
      {/* 1. RATE BOARD BANNER */}
      <div id="rates" className="rate-board-container">
        <div className="rate-board-wrapper">
          <div className="rates-row">
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
          </div>
          <button className="rate-history-btn">RATE HISTORY</button>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="main-header">
        <div className="top-utility-bar">
          <div className="utility-left">
            <button onClick={() => scrollToSection('footer')} className="utility-link bold-link">CONTACT US | ENQUIRY FORM</button>
            <button onClick={() => onNavigate('storeLocator')} className="utility-link bold-link">STORE LOCATOR</button>
          </div>
          <div className="utility-right">
            <button className="utility-link active-link">AUSPICIOUS DAYS</button>
            <button className="utility-link scheme-btn">SAVINGS SCHEME PAYMENT</button>
            <button className="utility-link">BLOG</button>
            <button className="utility-link">CREATE AN ACCOUNT</button>
          </div>
        </div>

        <nav className="navbar-new">
          <div className="navbar-left" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>
            <img src="/image/jewel-logo.png" alt="Jewel Logo" className="jewel-logo-img" />
            <div className="virtual-shopping">
              <svg className="virtual-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
                <path d="M22 8l-6 4 6 4V8z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>VIRTUAL SHOPPING</span>
            </div>
          </div>

          <div className="navbar-center">
            <div className="search-bar-container">
              <input type="text" placeholder="Search..." className="search-input" />
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="navbar-right">
            <div className="contact-phone">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="phone-details">
                <span className="phone-number">+1800 889 7080</span>
                <span className="phone-hours">10AM to 6PM IST</span>
              </div>
            </div>

            <button className="nav-action-item">
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Login</span>
            </button>

            <button className="nav-action-item">
              <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Wishlist</span>
            </button>

            <button className="nav-action-item">
              <div style={{ position: 'relative' }}>
                <svg className="action-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="cart-badge">0</span>
              </div>
              <span>Cart</span>
            </button>
          </div>
        </nav>
      </header>

      {/* 3. CATEGORIES BAR */}
      <div className="faq-categories-bar">
        <ul className="faq-cat-list">
          <li onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} style={{ cursor: 'pointer' }}>HOME</li>
          <li>GOLD JEWELLERY <span>v</span></li>
          <li>HOME DECOR <span>v</span></li>
          <li>DIAMOND <span>v</span></li>
          <li>COINS <span>v</span></li>
          <li>SILVER <span>v</span></li>
          <li>SILVER JEWELLERY <span>v</span></li>
          <li>DIGIGOLD APP <span>v</span></li>
          <li>SCHEMES <span>v</span></li>
          <li>CORPORATE GIFTS</li>
        </ul>
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="auspicious-main">
        <div className="auspicious-container">
          <h1 className="auspicious-title">Auspicious Days</h1>
          <p className="auspicious-breadcrumb">Auspicious Days</p>

          <div className="auspicious-filters-row">
            <div className="auspicious-filter-col">
              <label className="auspicious-label">Filter Event by Category:</label>
              <div className="auspicious-select-wrapper">
                <select className="auspicious-select" defaultValue="All Events">
                  <option value="All Events">All Events</option>
                  <option value="Muhurtham">Muhurtham</option>
                  <option value="Festival">Festival</option>
                </select>
                <div className="auspicious-select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="auspicious-filter-col">
              <label className="auspicious-label">View Mode:</label>
              <div className="auspicious-select-wrapper">
                <select className="auspicious-select" value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                  <option value="Calendar">Calendar</option>
                  <option value="List">List</option>
                </select>
                <div className="auspicious-select-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conditionally Render Calendar or List View */}
          {viewMode === 'Calendar' ? (
            <div className="auspicious-calendar-wrapper">
              <Calendar
                localizer={localizer}
                events={auspiciousEvents}
                startAccessor="start"
                endAccessor="end"
                defaultDate={new Date(2026, 5, 1)} // Default to June 2026 as per screenshot
                views={['month', 'week', 'day']}
              />
            </div>
          ) : (
            <div className="auspicious-list-wrapper">
              {listEvents.map((event, idx) => (
                <div key={idx} className="auspicious-list-card">
                  <div className="auspicious-list-img-wrapper">
                    <span className="auspicious-list-date-badge">{event.date}</span>
                    <img src="https://images.unsplash.com/photo-1506784951209-243e36abc010?w=600&q=80" alt="Calendar Event Background" className="auspicious-list-img" />
                  </div>
                  <div className="auspicious-list-title">
                    {event.title}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 5. FOOTER */}
      <Footer scrollToSection={scrollToSection} onNavigate={onNavigate} />
    </div>
  );
}

export default AuspiciousDays;
