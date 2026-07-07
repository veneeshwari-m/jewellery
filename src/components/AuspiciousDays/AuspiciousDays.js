import React, { useState } from 'react';
import '../Home/Home.css';
import '../FAQ/FAQ.css';
import './AuspiciousDays.css';

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

function AuspiciousDays() {
  const [viewMode, setViewMode] = useState('Calendar');

  return (
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
  );
}

export default AuspiciousDays;
